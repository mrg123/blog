const path = require('path');
module.exports = {
    mode: 'production', // 生成模式
    entry: './index.js',  // 入口
    output: {  // 生成bundle.js
        path: path.resolve(__dirname,'static'),
        filename: '[name].[chunkhash].js',
        crossOriginLoading: 'anonymous' // 启用跨域加载
        //chunkFilename: '[name].js'
        
    },
    module:{
        rules: [
            { test: /\.css$/, use: 'css-loader' },
            { test: /\.ts$/, use: 'ts-loader' }
        ]
    }

}