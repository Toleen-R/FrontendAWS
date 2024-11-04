import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  "process.env": {
    REACT_APP_ENVIRONMENT: JSON.stringify(process.env.REACT_APP_ENVIRONMENT),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
