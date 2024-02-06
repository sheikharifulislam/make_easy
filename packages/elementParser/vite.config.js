import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        rollupOptions: {
            output: {
                dir: {
                    entryFileNames: "bundle.js",
                },
            },
        },
    },
    plugins: [react()],
});
