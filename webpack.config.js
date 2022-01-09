module.exports = {
    mode: "development",
    devtool: false,
    module:{
        rules:[{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }]
    },
    devServer: {
        static: "./ dist"
    }
}