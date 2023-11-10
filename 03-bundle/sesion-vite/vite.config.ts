import { defineConfig } from "vite";
import checker from "vite-plugin-checker"
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
	plugins: [
		checker({ typescript: true })
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