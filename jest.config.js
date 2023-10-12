module.exports = {
    transform: {
        "^.+\\.js$": "babel-jest",
        "^.+\\.svelte$": "svelte-jester"
    },
    moduleFileExtensions: ["js", "svelte"],
    transformIgnorePatterns: ["node_modules/(?!(svelte|@testing-library/svelte)/)"]
}
  