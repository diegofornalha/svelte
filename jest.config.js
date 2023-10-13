module.exports = {
    transform: {
        "^.+\\.js$": "babel-jest",
        "^.+\\.ts$": "ts-jest",
        "^.+\\.svelte$": "svelte-jester"
    },
    moduleFileExtensions: ["js", "svelte", "ts"],
    transformIgnorePatterns: ["node_modules/(?!(svelte|@testing-library/svelte)/)"]
}
