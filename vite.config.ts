import { resolve } from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

import packageData from "./package.json";

type BuildEnvironment = "storybook" | "library";

const buildEnvironment: BuildEnvironment =
	(process.env.BUILD_ENV as BuildEnvironment) || "library";

const libPlugins = [
	react(),
	dts({
		rollupTypes: true,
	}),
];

const storybookPlugins = [
	react({
		jsxRuntime: "automatic",
	}),
];

// https://vitejs.dev/config/
export default defineConfig({
	plugins: buildEnvironment === "storybook" ? storybookPlugins : libPlugins,
	build: {
		lib: {
			entry: resolve(__dirname, "src", "lib.ts"),
			formats: ["es", "cjs"],
			fileName: (format) => `index.${format}.js`,
		},
		rollupOptions: {
			external:
				buildEnvironment === "storybook"
					? []
					: [...Object.keys(packageData.peerDependencies)],
			output: {
				// Since we publish our ./src folder, there's no point
				// in bloating sourcemaps with another copy of it.
				sourcemapExcludeSources: true,
			},
		},
		target: "esnext",
		sourcemap: true,
		minify: false,
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
		},
	},
});
