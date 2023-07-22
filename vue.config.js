const path = require("path");

module.exports = {
    devServer: {
        disableHostCheck: true
    },

    chainWebpack: config => {
        config.resolve.alias
            .set("@a", path.join(__dirname, "src/assets"))
            .set("@c", path.join(__dirname, "src/components"))

        config.module
            .rule('raw')
            .test(/\.txt$/)
            .use('raw-loader')
            .loader('raw-loader')
            .end()

        config.module
            .rule("zip")
            .test(/\.zip$/)
            .use("file")
            .loader("file-loader")
            .end()
    }
}
