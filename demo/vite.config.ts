import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
	base: "/",
	root: __dirname,
	build: { outDir: "../dist" },
	resolve: {
		alias: {
			lib: resolve(__dirname, "../src/*"),
		},
	},
});
