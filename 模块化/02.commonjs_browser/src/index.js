/*
  commonjs既能运行在nodejs平台，也能运行在browser平台
    默认情况下，在browser平台是不能运行的，会报错：Uncaught ReferenceError: require is not defined

    将commonjs代码经过工具编译处理（将commonjs语法编译成浏览器能识别的语法）。

    browserify
      1. 需要下载安装
        npm init -y 生成一个package.json 
        npm i browserify -D
          注意：1. 一定要在02.commonjs_browser中运行  2. 建议配置淘宝镜像，下载速度就更快
            npm config set registry https://registry.npm.taobao.org

      2. 运行browserify，将commonjs语法编译成浏览器能识别的语法
        npx browserify commonjs的文件 -o 浏览器能识别的文件
*/

const add = require("./add");
// const person = require("./person");

// ES6 对象解构赋值~
const { name, age } = require("./person");

console.log(add(2, 5));
// console.log(person.name, person.age);
console.log(name, age);
