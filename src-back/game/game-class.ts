export default class Game {
  // id: string;
  // shortId: string;
  // host: string;
  // maxPlayers: number;
  // players: Players;
  // gameSettings: GameSettings;
  // gameSecrets: GameSecrets;
  // playerSecrets: PlayerSecrets;
  // gameState: GameState;
  // lastActionId: string;
  // gameServer: string | null;
  // resumeAction: ActionIncomingMessageObject | null;

  constructor() {
    // if (!initial.host) {
    //   throw {
    //     type: "error",
    //     message:
    //       "Game needs a host. Initiate with at least { host: hostPlayerId }",
    //   };
    // }

    // const defaultGameState = {
    // };

    // const defaultGameSecrets = {
    // };

    const temp = {};

    // this.id = temp.id;
    // this.shortId = temp.shortId;

    // this.host = temp.host;
    // this.maxPlayers = temp.maxPlayers;
  }

  getGameData = () => {
    const {
      getGameData,
      getGameDataForPlayer,
      addPlayer,
      gameAction,
      ...gameData
    } = this;
    return gameData;
  };

  getGameDataForPlayer = (playerId: string, playerPassword: string) => {};

  isPlayer = (playerId: string, playerPassword: string): boolean => {
    return false;
  };

  isHost = (playerId: string, playerPassword: string): boolean => {
    return this.isPlayer(playerId, playerPassword);
  };

  addPlayer = (
    playerId: string,
    playerName: string,
    playerPassword: string
  ) => {};

  gameAction = (playerId: string, password: string, action: string) => {};
}
