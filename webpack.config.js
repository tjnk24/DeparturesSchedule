const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const development = process.env.NODE_ENV !== 'production';

// call dotenv and it will return an Object with a parsed key
const env = dotenv.config().parsed;

// reduce it to a nice object, the same as before
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

const cssLoaders = [
  {
    loader: development ? 'style-loader' : MiniCssExtractPlugin.loader,
  },
  {
    loader: 'css-loader',
    options: {
      modules: true,
      localIdentName: '[local]-[hash:hex:6]',
    },
  },
  {
    loader: 'sass-loader',
  },
];

module.exports = {
  entry: [
    './src/index.tsx',
  ],
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '',
  },
  devtool: development ? 'source-map' : undefined,
  mode: development ? 'development' : 'production',
  devServer: {
    host: 'localhost',
    port: 8080,
    contentBase: path.resolve(__dirname, 'src'),
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.(css|scss)$/,
        use: cssLoaders,
      },
      {
        test: /\.(png|jpg|gif|svg|ttf|woff|woff2|mp4)$/,
        loader: 'file-loader',
        options: {
          context: path.resolve(__dirname, 'src'),
          publicPath: '',
          name: development ? '[path][name].[ext]' : '[name]-[hash:6].[ext]',
          limit: 1000,
        },
      },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      ...envKeys
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: development ? '[name].css' : '[name].[hash].css',
    }),
  ],
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
    ],
    enforceModuleExtension: false,
    enforceExtension: false,
    extensions: ['.js', '.ts', '.tsx', '.scss', '.json'],
    alias: {
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@pages': path.resolve(__dirname, 'src', 'pages'),
      '@store': path.resolve(__dirname, 'src', 'store'),
      '@apptypes': path.resolve(__dirname, 'src', 'types'),
      '@utils': path.resolve(__dirname, 'src', 'utils'),
      '@mocks': path.resolve(__dirname, 'mocks'),
      '@bootstrap-module': path.resolve(__dirname, 'src', 'assets', 'bootstrap.min.module.css'),
    },
  },
};
