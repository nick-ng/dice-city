import { useEffect } from "react";

import type { GameData, PlayerAction } from "~common/types/index.js";

import { getName } from "~front/utils/name-generator.js";
import { useOptions } from "~front/hooks/options-context.js";

import Build from "~front/app/build/index.js";
import City from "~front/app/city/index.js";

interface GameProps {
  gameData: GameData;
  sendViaWebSocket: (action: PlayerAction) => void;
}

export default function Game({ gameData, sendViaWebSocket }: GameProps) {
  const { options } = useOptions();
  const { gameDetails, gameState, gameSettings } = gameData;
  const { players, isPublic } = gameDetails;
  const { common, players: playerStates } = gameState.publicState;
  const { activePlayerId, supply, turnEvents, turnPhase } = common;
  const { landmarks } = gameSettings;

  const showNames = isPublic ? options.showNamesPublic : options.showNames;

  const myState = playerStates[options.playerId];
  const myTurn = activePlayerId === options.playerId;

  useEffect(() => {
    if (myTurn && turnPhase === "before-build" && myState.money === 0) {
      sendViaWebSocket({
        ...options,
        type: "build",
        payload: {
          buildingKey: "",
        },
      });
    }
  }, [turnPhase, myTurn]);

  // @todo(nick-ng): show opponents cities below and clicking on the opponent in the players list takes you to their city
  // @todo(nick-ng): players list shows money (and landmark count?)
  return (
    <div className="flex flex-row">
      <div className="flex-grow">
        <h1>Dice City</h1>
        <div>
          {!myTurn && (
            <div>
              Waiting for{" "}
              {getName(
                activePlayerId,
                players.find((p) => p.id === activePlayerId)?.name,
                showNames
              )}{" "}
              to finish their turn.
            </div>
          )}
          {myTurn && turnPhase === "before-roll" && (
            <div className="mt-1">
              <button
                className="button-default px-4 py-2"
                onClick={() => {
                  sendViaWebSocket({
                    ...options,
                    type: "roll-dice",
                    payload: { diceCount: 1 },
                  });
                }}
              >
                Roll 1 🎲
              </button>
              {myState.city.landmarks.trainStation && (
                <button
                  className="button-default px-4 py-2"
                  onClick={() => {
                    sendViaWebSocket({
                      ...options,
                      type: "roll-dice",
                      payload: { diceCount: 2 },
                    });
                  }}
                >
                  Roll 2 🎲
                </button>
              )}
            </div>
          )}
          <h3>Your Money: {myState.money}</h3>
          <details open={myTurn && turnPhase === "before-build"}>
            <summary className="no-underline">
              <h2 className="inline-block underline">Supply</h2>
            </summary>
            <Build
              city={myState.city}
              onBuild={(e) => {
                sendViaWebSocket({
                  ...options,
                  type: "build",
                  payload: {
                    buildingKey: e,
                  },
                });
              }}
              supply={supply}
              gameData={gameData}
              options={options}
            />
          </details>
          <h2>Your City</h2>
          <City availableLandmarks={landmarks} city={myState.city} />
        </div>
      </div>
      <div className="flex-shrink-0">
        <h3>Players</h3>
        <ul className="list-inside">
          {players.map((player) => {
            return (
              <li
                className={
                  player.id === activePlayerId ? "list-disc" : "list-[circle]"
                }
                key={player.id}
              >
                {getName(
                  player.id,
                  player.name,
                  showNames || player.id === options.playerId
                )}{" "}
                {player.id === options.playerId && "(You)"}
              </li>
            );
          })}
        </ul>
        <hr />
        <h3>Turn Events</h3>
        <ol className="list-inside list-decimal">
          {turnEvents.map((event) => (
            <li key={event}>
              {players.reduce((prev, { id, name }) => {
                return prev.replaceAll(
                  `%${id}%`,
                  getName(id, name, showNames || id === options.playerId)
                );
              }, event)}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
