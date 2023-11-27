import react from "@vitejs/plugin-react";
import path from "path";
import vike from "vike/plugin";
import { UserConfig } from "vite";

const config: UserConfig = {
  plugins: [
    react(),
    vike({
      prerender: true,
    }),
  ],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./"),
    },
  },
};

export default config;
