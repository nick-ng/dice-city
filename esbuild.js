import { context } from "esbuild";

const options = {
  bundle: true,
  format: "esm",
  platform: "node",
  external: ["./node_modules/*"],
  target: ["node16"],
};

await Promise.all([
  context({
    ...options,
    entryPoints: ["./src-back/main.ts"],
    outfile: "./dist-back/main.js",
  }).then((ctx) => ctx.watch()),
  context({
    ...options,
    entryPoints: ["./src-back/worker.ts"],
    outfile: "./dist-back/worker.js",
  }).then((ctx) => ctx.watch()),
]);

console.log("watching...");
