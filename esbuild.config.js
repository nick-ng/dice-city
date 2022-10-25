require("esbuild")
  .build({
    entryPoints: ["src-front/index.tsx"],
    bundle: true,
    splitting: true,
    tsconfig: "./src-front/tsconfig.json",
    metafile: true,
    minify: true,
    treeShaking: true,
    format: "esm",
    outdir: "dist-front/",
    define: {
      API_ORIGIN: `"${process.env.API_ORIGIN || ""}"`,
    },
  })
  .catch(() => process.exit(1));
