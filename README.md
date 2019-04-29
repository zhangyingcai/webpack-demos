# webpack-demos
学习 webpack 的合集

# how to use

clone the repo
```
$ git clone https://github.com/zhangyingcai/webpack-demos.git
```
then install the dependencies
```
$ cd webpack-demos
$ npm install
```

# 开始

初始化
```
npm init
```

[参考](https://www.webpackjs.com/guides/installation/)

## 安装 webpack

我们使用最新的的4+版本

```
npm install --save-dev webpack
```

## Entry_file

webpack.config.js
```
const path = require('path')
module.exports = {
    entry: './Entry_file/main.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, './')
    }
  };
```
build
```
npx webpack --config .\Entry_file\webpack.config.js
```

## css_loader

javascript import css files
```
npm install --save-dev style-loader css-loader
```