import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			name: "Table Pagination",
			formats: ["es", "umd", "cjs"],
			fileName: format => `table-pagination.${format}.js`,
		},
	},
});
