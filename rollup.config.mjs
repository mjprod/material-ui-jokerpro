import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    postcss({
      extensions: [".css"],
      extract: "joker_tokens.css", // Extrai o CSS para um arquivo separado
      minimize: true,
      sourceMap: false,
    }),
  ],
  external: ["react", "react-dom"],
};
