import { context } from "esbuild";

import { mainOptions, workerOptions } from "./esbuild.prod.js";

await Promise.all([
  context(mainOptions).then((ctx) => ctx.watch()),
  context(workerOptions).then((ctx) => ctx.watch()),
]);

console.log("Also run npm start and npm run dev-logs.\nwatching...");
