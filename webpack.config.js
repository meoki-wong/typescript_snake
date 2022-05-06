const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.ts", // 指定入口文件
  // 指定打包文件的目录
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
    environment: {
      arrowFunction: false, // 在打包的时候  不使用箭头函数
      const: false // 默认不使用const生命变量
    },
  },

  // 指定打包时要使用的模块
  module: {
    // 指定加载规则
    rules: [
      {
        // test指定的是规则生效的文件
        test: /\.ts$/,
        // use: 'ts-loader',
        use: [
          // 加载顺序是从后往前加载
          {
            loader: "babel-loader",
            options: {
              // 设置预置环境
              presets: [
                // 指定环境的插件
                [
                  "@babel/preset-env",
                  // 配置信息
                  {
                    targets: {
                      // 指定兼容的浏览器版本
                    },
                    // 指定corejs的版本
                    corejs: "3",
                    // 使用corejs方式  加载usage   表示按需加载
                    useBuiltIns: "usage",
                  },
                ],
              ],
            },
          },
          "ts-loader",
        ],
        exclude: /node_modules/,
      },
      {
        // 设置less文件处理
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          { // 处理低版本浏览器对高级css的前缀兼容性支持
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browsers: "last 2 versions",
                    },
                  ],
                ],
              },
            },
          },
          "less-loader",
        ],
      },
    ],
  },
  // 配置webpack插件
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html', // 以哪个html为模板
      title: "贪吃蛇", // 编译的文件标题
    }),
  ],
  // 用来设置引用模块
  resolve: {
    extensions: [".ts", ".js"], // 表示在文件中import引入的时候  js和ts的文件都可以作为模块来引入
  },
};
