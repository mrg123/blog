const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
    mode: "production",
    entry: {
        css: __dirname + "/entry/css.js",
        header: __dirname + "/entry/header.js"
    },
    output: {
        path: __dirname,
        filename: "../public/theme/one/webpack/[name].[hash:5].js"
    },
    /* 
      resolve: {
          modules: [
            path.join(__dirname, "js/helpers"),
            "node_modules"
          ]
      }, */
    externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        jquery: "jQuery",
        "popper.js": "Popper"
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "../public/theme/one/webpack/[name].[hash:5].css"
            //chunkFilename: '[id].css',
            //ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
        new OptimizeCSSAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require("cssnano"),
            // cssProcessorOptions: cssnanoOptions,
            cssProcessorPluginOptions: {
                preset: [
                    "default",
                    {
                        discardComments: {
                            removeAll: true
                        },
                        normalizeUnicode: false
                    }
                ]
            },
            canPrint: true
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.$": "jquery",
            "window.jQuery": "jquery"
        })
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: [require("postcss-import")(), require("autoprefixer")()]
                        }
                    }
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                },
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: true,
            cacheGroups: {
                styles: {
                    name: "style",
                    test: /\.css$/,
                    chunks: "all",
                    enforce: true
                }
            }
        }
    }
};