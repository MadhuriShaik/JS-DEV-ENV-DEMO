import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
export default{
    //debug: true,
    devtool: 'inline-source-map',
    // noInfo: false,
    entry: [
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web',
    output:{
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer:{
        contentBase: path.resolve(__dirname, 'src')
    },
    plugins:[
        // create HTML file that includes references to bundled JS.
        new HtmlWebpackPlugin({
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
              },
            template: 'src/index.html',
            inject: true
        })
    ],
    module:{
        rules:[
            {test: /\.js$/, exclude: /node_modules/, loaders:['babel-loader']},
            {test:/\.css$/, loaders:['style','css']}
        ]
    }
};
//some chnages for demo