# webpack

### 第一步全局安包

* ```bash
  npm i webpack webpack-cli-g  //cmd中
  ```

* ```bash
  npm init   //注意名字不是webpack
  ```

* ```bash
  npm i webpack webpack-cli -D  //在项目的根目录运行
  ```

  

### 第二步, 进行初步的配置

- 新建webpack.config.js 配置文件

```javascript

let { resolve } = require('path');

module.exports = {

  //入口文件entry
  entry: './src/js/index.js',

  //输出文件output
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'dist.js'
  },

  //webpack只能解析json和js文件, 需要解析其他文件需要loader
  // loader

  //需要的插件 plugin

  //模式 mode
  mode: 'development'//开发环境

}
//运行 webpack 之后就会出现一个dist的文件夹
```

![第二步文件结构](D:\study\1108_Web\Practice\Online course\0317\work\images\1.png)

### 第三步、在官网webpack中的LOADER选中less-loader

* 安装 npm install less-loader --save-dev

* ```javascript
  配置
  module: {
      rules: [{
        test: /\.less$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'less-loader' // compiles Less to CSS
        }]
      }]
    }
  ```

* 安装

  ```bash
  npm i less -D  
  ```

* 安装 

  ```bash
  npm i style-loader -D
  ```

* 安装 

  ```bash
  npm i css-loader -D
  ```

### 第三步、在官网webpack中的LOADER选中html-loader

* ```bash
  npm i -D html-loader
  ```

* ```bash
  {
    test: /\.(html)$/,
    loader: 'html-loader',
  }
  ```

* ```bash
  npm i html-webpack-plugin -D
  ```

* ```bash
  let HtmlWebpackPlugin = require('html-webpack-plugin');
  
  //需要的插件 plugin
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })],
  ```

### 第四步、在webpack中找到url-loader

* 安装

```bash
npm install url-loader --save-dev
```

* 配置

```javascript
 //处理图片文件(默认是不能处理html的图片)
{
    test: /\.(png|jpg|gif)$/i,
    use: [
      {
        loader: 'url-loader',
        options: {
        /*
            11kb以下的图片会被base64处理 
            优点：图片不会发送额外的请求，随着html文件一起被请求下来（减少服务器压力）
            缺点：体积会变的更大
            所以一般针对小图片来做
          */
          limit: 11000
        }
      }
    ]
}
```

* 安装

* ```bash
  npm i file-loader -D
  ```

### 第五步、解决html文件里面导入图片的问题

* 在定义的html文件里面定义一个img标签,

```html
 <img src="./images/1.png" alt="">
```

*  然后利用webpack打包之后

```html
<img src="[object Module]" alt="">
```

* 因为在第三步中就配置过图片, 所以只需要加上一个属性esModule:false

```javascript
 //处理图片文件(默认是不能处理html的图片)
  {
    test: /\.(png|jpg|gif)$/i,
    use: [
      {
        loader: 'url-loader',
        options: {
          /*
            11kb以下的图片会被base64处理 
            优点：图片不会发送额外的请求，随着html文件一起被请求下来（减少服务器压力）
            缺点：体积会变的更大
            所以一般针对小图片来做
          */
          limit: 11000,
          //[hash:10] hash值取10位
          //[ext] 原来文件的扩展名是什么就是什么
          name: "[hash:10].[ext]",
          //解决html中img src 为 [object Module]
          esModule: false
        },
      }
    ]
  }
```

### 第六步 解决字体图标问题

- 从iconfont下载图标

![文件iconfont](D:\study\1108_Web\Practice\Online course\0317\work\images\2.png)

* 然后将iconfont.css放到less文件夹中,并改文件名的扩展名为less

* 然后把其他需要的文件放入新建的文件夹media中
* 然后就需要去更改iconfont你们的引用路径了
* 然后打开demo_index.html文件查看 引入方法

```bash
<span class="iconfont icon-xxx"></span>
```

* 然后根据图标的名字更改类名
* 然后在主模块引入iconfont.less文件
* 然后在webpack.config.js文件中写入

```javascript
{
    //排除文件
    exclude: /\.(less|jpg|png|gif|js|html)$/,
    loader: 'file-loader',
    options: {
      name: '[hash:10].[ext]'
    }
}
```

### 第七步配置自动化devServer

* 安装devServer

```bash
npm i webpack-dev-server -D
```

* 配置

```javascript
 /*
      devServer 用来自动化
      npm i webpack-dev-server -D
      之前启动指令是: webpack(这个启动是不会加载devServer配置)
      要想启动devServer, 必须使用npx webpack-dev-server

      webpack 和 webpack-dev-server的区别：
      1. 只有webpack-dev-server才能启动devServer配置，而webpack不行
      2. webpack-dev-server是在内存中构建，没有输出。 webpack会有输出到build下面 
  */
  devServer: {
    contentBase: resolve(__dirname, 'dist'),//运行(构建后)代码的根目录
    compress: true,//启动gzip压缩
    port: 3000,//端口号
    host: 'localhost',//地址
    open: true,//自动打开浏览器
    overlay: false,//不要webpack错误在浏览器全屏提示
    quiet: true,//不要打包打印信息
  }
```

### 第八步, 搭建开发环境

* 在webpack文件夹中新建config文件夹,然后把webpack.config.js文件复制到config文件中,然后改名为webpack.dev.js然后更改里面的绝对路径

![更改路径](D:\study\1108_Web\Practice\Online course\0317\work\images\3.png)

* 然后复制一份改名为: webpack.prod.js然后把里面的devServer的模块删除,然后把mode更改成生产依赖

```javascript
mode: 'production',//生产环境,会自动压缩js
```

* 然后更改package.json文件

```javascript
"scripts": {
    "start": "webpack-dev-server --config ./config/webpack.dev.js",
    "build": "webpack --config ./config/webpack.prod.js"
  },
```

* 然后启动就用命令:npm start

### 第九步, 提取独立的css文件

* 安装

```bash
npm install --save-dev mini-css-extract-plugin
```

* 导入

```js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
```

* 配置(webpack.prod.js)

```js
new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
```

* 配置(.less)把loader: 'style-loader替换'

```js
loader: MiniCssExtractPlugin.loader,
```

* 运行

```bash
npm run build
```

### 第十步 压缩css文件

* 安装

```bash
npm install --save-dev optimize-css-assets-webpack-plugin
```

* 导入

```js
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
```

* 配置

```js
//压缩css文件
    new OptimizeCssAssetsPlugin({
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
    })
```

### 第十一步, 自动删除打包资源

* 安装

```bash
npm i clean-webpack-plugin -D
```

* 导入

```js
//自动删除打包资源
let { CleanWebpackPlugin } = require('clean-webpack-plugin');
```

* 配置(在plugins中配置)

```js
 //自动删除output.path输出目录的文件
 new CleanWebpackPlugin(),
```

### 第十二步, 压缩html文件

* 因为之前下载过html的包,所以只需要添加东西即可
* 找到plugins里面的HtmlWebpackPlugin在里面添加

```js
new HtmlWebpackPlugin({
  template: './src/index.html',
  minify: {
    collapseWhitespace: true,//去除换行符 / 空格
    removeComments: true, // 去除注释
    removeRedundantAttributes: true,// 去除默认值标签属性
    removeScriptTypeAttributes: true,// 删除script type
    removeStyleLinkTypeAttributes: true,// 删除link type
    useShortDoctype: true//使用doctype
  }
}),
```

### 第十三步, 输出到指定的目录

```js
output: {
    path: resolve(__dirname, '../dist'),
    filename: 'static/js/[name].js',//只需要在路径前面添加即可
  },
//图片路径/字体图标
name: "static/media/[hash:10].[ext]",
//css文件路径
filename: "static/css/[name].css",
```

![图片文件](D:\study\1108_Web\Practice\Online course\0317\work\images\4.png)

### 第十四步,因为路径修改然后less引入的图片和html引入的图片会不一样,会有其中一个加载不出来,需要在每个路径前面加个 / 代表根路径

```js
  //输出文件output
  output: {
    path: resolve(__dirname, '../dist'),
    filename: 'static/js/[name].js',
    publicPath: '/',//公共引入资源路径
  },
```

* 又因为是公共路径, 所以就要需要安装一个服务器, 然后利用服务器启动

```bash
npm i serve -g
```

```bash
serve dist(输出路径文件夹的名称)
```

![服务器](D:\study\1108_Web\Practice\Online course\0317\work\images\5.png)

![输出文件夹](D:\study\1108_Web\Practice\Online course\0317\work\images\6.png)