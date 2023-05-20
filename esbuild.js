import { context } from "esbuild";

import { mainOptions, workerOptions } from "./esbuild.prod.js";

await Promise.all([
  context(mainOptions).then((ctx) => ctx.watch()),
  context(workerOptions).then((ctx) => ctx.watch()),
]);

console.log("watching...");
