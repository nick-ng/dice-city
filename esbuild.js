import { buildSync } from "esbuild";

const options = {
  bundle: true,
  format: "esm",
  platform: "node",
  external: ["./node_modules/*"],
  target: ["node16"],
};

buildSync({
  ...options,
  entryPoints: ["./src-back/main.ts"],
  outfile: "./dist-back/main.js",
});

buildSync({
  ...options,
  entryPoints: ["./src-back/worker.ts"],
  outfile: "./dist-back/worker.js",
});
