module.exports = function (api) {
    api.cache(true);

    return {
        presets: [
            ['@babel/preset-react'],
            ['@babel/preset-env', {
                targets: {
                    chrome: "78",
                }
            }],
        ],
        plugins: ["@babel/plugin-transform-regenerator"]
    };
}