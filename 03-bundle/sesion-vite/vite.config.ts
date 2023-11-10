import { defineConfig } from "vite";
import checker from "vite-plugin-checker"
import typescript from "@rollup/plugin-typescript";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [
		checker({ typescript: true }),
		react()
	],
	build: {
		sourcemap: true,
		rollupOptions: {
			plugins: [
				typescript({ tsconfig: "tsconfig.json", noEmitOnError: true, sourceMap: true })
			]
		}
	}
})