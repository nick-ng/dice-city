import dotenv from "dotenv";
dotenv.config();

import { randomUUID } from "crypto";
import GameServer from "./game/game-server";

const WORKER_ID = randomUUID();

new GameServer(WORKER_ID);
