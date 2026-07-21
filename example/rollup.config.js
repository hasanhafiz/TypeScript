import typescript from "@rollup/plugin-typescript";

export default {
    input: "task-list-bundle/src/task-list-example.ts",
    output: {
        file: "dist/app.js",
        format: "iife"
    },
    plugins: [
        typescript()
    ]

}