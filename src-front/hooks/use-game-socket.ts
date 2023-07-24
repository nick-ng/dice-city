import { useCallback, useState, useEffect, useRef } from "react";

import type {
	GameData,
	PlayerAction,
	WebSocketClientToServerMessage,
} from "~common/types/index.js";
import { webSocketServerToClientMessageSchema } from "~common/types/schemas/message.js";

declare const __API_ORIGIN__: string;
const WEBSOCKET_URL = (__API_ORIGIN__ || location.origin).replace(
	/^http/i,
	"ws"
);

const isNewWebSocketNeeded = (webSocket: WebSocket | null): boolean =>
	!webSocket ||
	WebSocket.CLOSING === webSocket.readyState ||
	WebSocket.CLOSED === webSocket.readyState;

const safeSend = (
	websocket: WebSocket | null,
	messageObject: WebSocketClientToServerMessage
): void => {
	websocket?.send(JSON.stringify(messageObject));
};

// @todo(nick-ng): figure out why the screen flashes periodically
export const useGameSocket = (
	gameId: string,
	playerDetails: {
		id: string;
		password: string;
	}
): {
	playerGameData: GameData | null;
	connectionStatus: string;
	latency: number;
	sendViaWebSocket(playerAction: PlayerAction): void;
} => {
	const reOpenWebSocketRef = useRef(false);
	const webSocketRef = useRef<WebSocket | null>(null);
	const getNewWebSocketRef = useRef(
		(_messageObject?: WebSocketClientToServerMessage) => {}
	);
	const [playerGameData, setPlayerGameData] = useState<GameData | null>(null);
	const [connectionStatus, setConnectionStatus] = useState<
		"not-connected" | "connected" | "reconnecting" | "not-found"
	>("not-connected");
	const [latency, setLatency] = useState(-1);

	const sendViaWebSocket = useCallback(
		(messageObject: PlayerAction): void => {
			if (isNewWebSocketNeeded(webSocketRef.current)) {
				getNewWebSocketRef.current(messageObject);
			} else {
				safeSend(webSocketRef.current, messageObject);
			}
		},
		[getNewWebSocketRef.current, playerDetails.id]
	);

	useEffect(() => {
		const currentDomainParts = location.origin.split(".").reverse();
		const apiDomainParts = __API_ORIGIN__.split(".").reverse();

		let topDomainParts = [];
		for (let i = 0; i < currentDomainParts.length; i++) {
			if (currentDomainParts[i] !== apiDomainParts[i]) {
				break;
			}

			topDomainParts.unshift(currentDomainParts[i]);
		}

		const topDomain = topDomainParts.join(".");

		document.cookie = `dicecityplayerid=${playerDetails.id}; Domain=${topDomain}; SameSite=Lax;`;
		document.cookie = `dicecityplayerpass=${playerDetails.password}; Domain=${topDomain}; SameSite=Lax;`;

		reOpenWebSocketRef.current = true;
		getNewWebSocketRef.current = (
			messageObject?: WebSocketClientToServerMessage
		) => {
			if (!isNewWebSocketNeeded(webSocketRef.current)) {
				return;
			}

			console.info(
				new Date().toLocaleTimeString(),
				"Getting a new WebSocket connection"
			);

			webSocketRef.current = new WebSocket(`${WEBSOCKET_URL}/game/${gameId}`);

			webSocketRef.current.addEventListener("open", () => {
				console.info(
					new Date().toLocaleTimeString(),
					"WebSocket connection opened"
				);

				if (messageObject) {
					setTimeout(() => {
						safeSend(webSocketRef.current, messageObject);
					}, 20);
				}
			});

			webSocketRef.current.addEventListener(
				"message",
				(webSocketMessageEvent) => {
					const { data } = webSocketMessageEvent;
					const result = webSocketServerToClientMessageSchema.safeParse(
						JSON.parse(data)
					);

					if (!result.success) {
						console.error(
							new Date().toLocaleTimeString(),
							"Unexpected data from WebSocket",
							JSON.stringify(result.error, null, "  ")
						);
						return;
					}

					const message = result.data;

					switch (message.type) {
						case "not-found":
							setPlayerGameData(null);
							setConnectionStatus("not-found");
							setLatency(0);
							return;
						case "ping":
							safeSend(webSocketRef.current, {
								type: "pong",
								playerId: playerDetails.id,
								playerPassword: playerDetails.password,
							});
							break;
						case "game-data":
							const playerGameData = message.payload.playerGameData;

							if (playerGameData.gameDetails.id === gameId) {
								setPlayerGameData(playerGameData);
								setConnectionStatus("connected");
							}
							break;
						default:
					}

					if (message.payload?.latency) {
						setLatency(message.payload?.latency);
					}
				}
			);

			webSocketRef.current.addEventListener("close", () => {
				if (reOpenWebSocketRef.current) {
					setConnectionStatus("reconnecting");
					console.info(
						new Date().toLocaleTimeString(),
						"WebSocket connection lost"
					);
					getNewWebSocketRef.current();
				} else {
					setConnectionStatus("not-connected");
					console.info(
						new Date().toLocaleTimeString(),
						"WebSocket connection closed"
					);
				}
			});
		};

		getNewWebSocketRef.current();

		return () => {
			console.info(
				new Date().toLocaleTimeString(),
				"Closing WebSocket connection"
			);
			reOpenWebSocketRef.current = false;
			webSocketRef.current?.close();
			webSocketRef.current = null;
		};
	}, [gameId, playerDetails.id, playerDetails.password]);

	return {
		playerGameData,
		connectionStatus,
		latency,
		sendViaWebSocket,
	};
};
