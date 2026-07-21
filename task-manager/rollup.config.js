import typescript from "@rollup/plugin-typescript";

export default {
    input: "src/script.ts",
    output: {
        file: "dist/app.js",
        format: "iife"
    },
    plugins: [
        typescript()
    ]

}