import { buildSync } from "esbuild";

const options = {
  bundle: true,
  format: "esm",
  platform: "node",
  external: ["./node_modules/*"],
  target: ["node18"],
};

export const mainOptions = {
  ...options,
  entryPoints: ["./src-back/main.ts"],
  outfile: "./dist-back/main.js",
};

buildSync(mainOptions);

export const workerOptions = {
  ...options,
  entryPoints: ["./src-back/worker.ts"],
  outfile: "./dist-back/worker.js",
};

buildSync(workerOptions);
