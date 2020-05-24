import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import livereload from "rollup-plugin-livereload";
import svelte from "rollup-plugin-svelte";
import {terser} from "rollup-plugin-terser";
import replace from '@rollup/plugin-replace';
import sveltePreprocess from 'svelte-preprocess';

const purgecss = require("@fullhuman/postcss-purgecss")
const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/main.js",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "public/build/bundle.js"
  },
  plugins: [
    replace({
      __apiUrl__: production ? 'https://miner.stormgain.com/api/v1/' : 'https://cloudminer.web2.dev.fxclub.org/api/v1/'
    }),
    svelte({
      // enable run-time checks when not in production
      dev: !production,
      preprocess: sveltePreprocess({ postcss: true }),
      // we'll extract any component CSS out into
      // a separate file — better for performance
      css: css => {
        css.write("public/build/bundle.css");
      }
    }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration —
    // consult the documentation for details:
    // https://github.com/rollup/rollup-plugin-commonjs
    resolve({
      browser: true,
      dedupe: importee =>
        importee === "svelte" || importee.startsWith("svelte/")
    }),
    commonjs(),

    // In dev mode, call `npm run start` once
    // the bundle has been generated
    !production && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload("public"),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser()
  ],
  watch: {
    clearScreen: false
  }
};

function serve() {
  let started = false;

  return {
    writeBundle() {
      if (!started) {
        started = true;

        require("child_process").spawn("npm", ["run", "start", "--", "--dev"], {
          stdio: ["ignore", "inherit", "inherit"],
          shell: true
        });
      }
    }
  };
}