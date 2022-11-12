import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  return {
    publicDir: "static",
    plugins: [react()],

    build: {
      outDir: "dist-front",
    },

    server: {
      port: 3434,
    },
    resolve: {
      alias: {
        "~front": path.resolve(__dirname, "./src-front"),
        "~common": path.resolve(__dirname, "./src-common"),
      },
    },

    define: {
      __API_ORIGIN__: `"${process.env.API_ORIGIN || "http://localhost:3232"}"`,
    },
  };
});
