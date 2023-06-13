import { fileURLToPath, URL } from "node:url";

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import { NodeModulesPolyfillPlugin } from "@esbuild-plugins/node-modules-polyfill";
import nodePolyfills from "rollup-plugin-polyfill-node";
import cjs from "@rollup/plugin-commonjs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      process: "rollup-plugin-node-polyfills/polyfills/process-es6",
      buffer: "rollup-plugin-node-polyfills/polyfills/buffer-es6",
      events: "rollup-plugin-node-polyfills/polyfills/events",
      util: "rollup-plugin-node-polyfills/polyfills/util",
      sys: "util",
      stream: "rollup-plugin-node-polyfills/polyfills/stream",
      _stream_duplex:
        "rollup-plugin-node-polyfills/polyfills/readable-stream/duplex",
      _stream_passthrough:
        "rollup-plugin-node-polyfills/polyfills/readable-stream/passthrough",
      _stream_readable:
        "rollup-plugin-node-polyfills/polyfills/readable-stream/readable",
      _stream_writable:
        "rollup-plugin-node-polyfills/polyfills/readable-stream/writable",
      _stream_transform:
        "rollup-plugin-node-polyfills/polyfills/readable-stream/transform",
    },
  },
  build: {
    rollupOptions: {
      plugins: [
        // Enable rollup polyfills plugin
        // used during production bundling
        nodePolyfills({
          include: ["node_modules/**/*.js", "../../node_modules/**/*.js"],
        }),
        cjs(),
      ],
    },
    commonjsOptions: {
      include: [],
      transformMixedEsModules: true,
    },
  },
  optimizeDeps: {
    disabled: false,
    plugins: [
      NodeGlobalsPolyfillPlugin({
        process: true,
      }),
      NodeModulesPolyfillPlugin(),
    ],
  },
})
