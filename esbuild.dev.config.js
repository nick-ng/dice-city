require("esbuild")
  .build({
    entryPoints: ["src-front/index.tsx"],
    bundle: true,
    tsconfig: "./src-front/tsconfig.json",
    metafile: true,
    format: "esm",
    sourcemap: true,
    outdir: "dist-front/",
    define: {
      API_ORIGIN: `"${process.env.API_ORIGIN || ""}"`,
    },
  })
  .catch(() => process.exit(1));
