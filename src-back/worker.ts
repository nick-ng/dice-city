import dotenv from "dotenv";
dotenv.config();

console.info("worker", process.env.NODE_ENV, process.env.TS_NODE_PROJECT);
