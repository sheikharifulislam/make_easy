import react from "@vitejs/plugin-react";
import fs from "fs/promises";
import { resolve } from "node:path";
import { defineConfig, loadEnv } from "vite";

export default defineConfig((_configEnv, mode) => {
    // eslint-disable-next-line no-undef
    const env = loadEnv(mode, process.cwd());
    const envWithProcessPrefix = Object.entries(env).reduce((prev, [key, val]) => {
        return {
            ...prev,
            ["process.env." + key]: `"${val}"`,
        };
    }, {});
    return {
        define: envWithProcessPrefix,
        plugins: [react()],
        esbuild: {
            loader: "jsx",
            include: /src\/.*\.jsx?$/,
        },
        optimizeDeps: {
            esbuildOptions: {
                plugins: [
                    {
                        name: "load-js-files-as-jsx",
                        setup(build) {
                            build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => ({
                                loader: "jsx",
                                contents: await fs.readFile(args.path, "utf8"),
                            }));
                        },
                    },
                ],
            },
        },
        build: {
            sourcemap: true,
            emptyOutDir: false,
            lib: {
                entry: {
                    index: resolve("src", "index.js"),
                },
                formats: ["es", "cjs"],
                fileName: (format, entryName) => `${entryName}.${format}.js`,
            },
            rollupOptions: {
                external: ["react"],
            },
        },
    };
});
