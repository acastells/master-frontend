import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
// más config en: https://github.com/FatehAK/vite-plugin-image-optimizer

export default defineConfig({
	build: {
		assetsInlineLimit: 0,
	},
	plugins: [
		react(),
		ViteImageOptimizer({
			svg: {
				floatPrecision: 0,
			},
			jpg: {
				quality: 90,
				progressive: true,
				optimiseCoding: true,
				mozjpeg: true,
				trellisQuantisation: true,
				overshootDeringing: true,
				optimiseScans: true,
			},
			jpeg: {
				quality: 90,
				progressive: true,
				optimiseCoding: true,
				mozjpeg: true,
				trellisQuantisation: true,
				overshootDeringing: true,
				optimiseScans: true,
			},
			png: {
				compressionLevel: 9,
				adaptiveFiltering: true,
				palette: true,
			},
		}),
	],
});
