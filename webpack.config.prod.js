import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
//import webpack from 'webpack';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default{
    //debug: true,
    devtool: 'source-map',
    // noInfo: false,
    entry: {
        main : path.resolve(__dirname, 'src/index'),
        vendor: path.resolve(__dirname, 'src/vendor')
    },
    target: 'web',
    output:{
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].[chunkhash].js'
    },
    devServer:{
        contentBase: path.resolve(__dirname, 'src')
    },
    plugins:[
        //Eliminate duplicate packages when generating bundle
        //new webpack.optimize.DedupePlugin(),    //---deprecated

        //Minify JS
        //new webpack.optimize.UglifyJsPlugin() //---deprecated

        // create HTML file that includes references to bundled JS.
        new HtmlWebpackPlugin({
            template: 'src/index.html',
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
            inject: true,
            trackJSToken: '43ad216f57d94259968435894490a5c7'
        }),
        // Use CommonsChunkPlugin to create a separate bundle
        // of vendor libraries so that they're cached separately.
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor'
        // }),

        new WebpackMd5Hash(),

        //Generate an external css file with a hash in the filename
        //new ExtractTextPlugin('[name].[contenthash].css')
        
    ],
    module:{
        rules:[
            {test: /\.js$/, exclude: /node_modules/, loaders:['babel-loader']},
            //{test:/\.css$/, loaders:['style','css']}
            {test:/\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')}
        ]
    }
};