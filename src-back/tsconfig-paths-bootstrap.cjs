const tsConfig = require("./tsconfig.json");
const tsConfigPaths = require("tsconfig-paths");

const cleanup = tsConfigPaths.register({
  baseUrl: "./",
  paths: tsConfig.compilerOptions.paths,
});

cleanup();
