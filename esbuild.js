import { context } from "esbuild";

import { mainOptions, workerOptions } from "./esbuild.prod.js";

const makePlugins = (environment) => [
  {
    name: `${environment}-rebuild-watch`,
    setup: (build) => {
      build.onEnd((result) => {
        const { errors, warnings } = result;
        let temp = [
          errors.length > 0 && errors,
          warnings.length > 0 && warnings,
        ].filter((a) => a);
        console.info(new Date().toISOString(), environment, "rebuilt", ...temp);
      });
    },
  },
];

await Promise.all([
  context({ ...mainOptions, plugins: makePlugins("main") }).then((ctx) =>
    ctx.watch({})
  ),
  context({ ...workerOptions, plugins: makePlugins("worker") }).then((ctx) =>
    ctx.watch()
  ),
]);

console.log("Also run npm start and npm run dev-logs.\nwatching...");
