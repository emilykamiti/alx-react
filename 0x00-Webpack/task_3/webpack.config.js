const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.export = {
  plugins: [
    new HTMLWebpackPlugin({
      filename: './index.html'
    }),
    new CleanWebpackPlugin()
  ],
  devtool: 'inline-source-map',
  mode: 'development',
  entry: {
    header: {
      import: './modules/header/header.js',
      dependOn: 'shared'
    },
    body: {
      import: './modules/body/body.js',
      dependOn: 'shared'
    },
    footer: {
      import: './modules/footer/footer.js',
      dependOn: 'shared'
    },
    shared: 'jquery'
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: '[name].bundle.js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  performance: {
    maxAssetSize: 1000000,
    maxEntrypoinSize: 1000000
  },
  devServer: {
    static: {
      directory: path.join(__dirname, './public')
    },
    compress: true,
    port: 8564
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true
            }
          }
        ]
      }
    ]
  }
};
