# NodeJS

## nodejs中js的组成

* DOM(完全没有)
* BOM(干掉了大部分内容)
  * console.log()
  * setTimeout()
  * setInterval()
* ECMAScript(基本实现)

### 事件轮询机制

```javascript
  timers:
    定时器本阶段执行已被setTimeout()和setInterval()
  pending callbacks:
    待定回调,执行延迟到下一个循环迭代的I/O回调
  idle,prepare:
    idle,prepare仅系统内部使用
  poll轮询
    执行I/O操作回调(文件读写,数据库读写)
    依次取出,同步执行回调函数,直到全部执行完了(回调队列为空)
    除非满足下面两个条件之一,否则一直停留在当前阶段,不会执行下一个阶段
      1.定时器到点
      2.之前设置过了setImmediate
  check 检测:
    执行setImmediate回调
  close callbacks:
    关闭回调函数,close
```

```
宏任务、微任务：
      异步代码是有优先级关系的,有的优先级高先执行,有点优先级低后执行
      微任务优先级高:process/nextTick、Promise.then/cath、queueMicrotask
          优先级最高的:
              process/nextTick
              其他代码按顺序执行
      宏任务优先级低:setTimeout、setImmediate
          看nodejs轮询机制
      js引擎执行异步代码.会优先执行微任务,再执行宏任务,在执行微任务的时候,碰到微任务就会放入下一个微任务队列
```

```javascript
// 1 4 8 5 2 6 3 9
process.nextTick(() => { console.log(111); });
setTimeout(() => { console.log(222); }, 0);
setImmediate(() => { console.log(333); });
const promise = Promise.resolve();
promise
  .then(() => {
    console.log(444);
    process.nextTick(() => { console.log(555); });
    setTimeout(() => { console.log(666); }, 0);
  })
  .catch(() => {
    console.log(777);
  })
  .then(() => {
    console.log(888);
    setImmediate(() => { console.log(999); });
  })
  .catch(() => {
    console.log(101010);
  })
```

### nodejs中的函数

```javascript
每一个模块都私有的,除非通过暴露语法向外暴露内容
      require
      exports
      module.exports
  nodejs中所有的模块默认使用commonjs模块化,使用commonjs模块化给所有模块包裹一层函数,这个函数会将模块化的变量传入进出
  function (exports, require, module, __filename, __dirname) {
        exports     暴露模块
        require     引入模块
        module      module.exports 暴露模块
        __filename  当前文件的绝对路径
        __dirname   当前文件的文件夹的绝对路径
    }
console.log(__dirname);
console.log(__filename);
```

### package.json

```javascript
package.json包描述文件
    name:
        包名称:不能有中文、特殊字符等
        作用:下载包时传入的名称
    version:
        版本号:x.x.x
          第一个x:代表大版本的更新
          第二个x:代表中版本的更新
          第三个x:代表修复一些小bug
    dependencies:
        生成依赖:运行时需要使用的依赖
    devDependencies:
        开发依赖:构建包时需要使用依赖
    scripts:
        运行包指令
        'start' -->npm start
        'build' -->npm run build
    创建package.json
        npm init 初始化一个package.json，里面需要直接详细配置
        npm init -y 初始化一个默认配置package.json
```

### npm包管理

```javascript
npm包管理
        如何下载包?
    注意:下载前先初始化一个package.json

    版本号:
        1.12.4 -->必须是1.12.4版本
        ^1.12.4-->必须是1.12.x版本,x取最新的
        ~1.12.4-->必须是1.x.x版本,x取最新的

    1. npm i xxx  === npm i xxx -S === npm i xxx --save
        默认下载最新版本的包
        创建一个node_modules目录,把下载的包安装进去
        创建一个package-lock.json文件,npm下载好的文件
            1.能让第二次下载速度更快
            2.会记录版本包和依赖关系
            3.将下载的包添加大奥package.json中产生依赖
    2. npm i xxx@1.8.3
        下载指定版本
       npm i xxx@1.12
        下载1.12.x版本的包,x代表最新版本
    3.npm i xxx -D ===npm i xx --svae-dev
        下载包并添加到开发依赖里
    4.npm i xxx -g
        全局安装一个包
        作用:
            将来作用cmd/终端指令使用,不是通过模块化语法引入使用
        比如：
            npm i webpack -g -->将来就可以在cmd终端中使用webpack指令
        如果本地安装也可以作为指令使用:npx xxx
            npx babel -->会将babel临时添加为环境变量,从而作为指令使用
    5.npm i
        下载当前package.json中所有依赖(开发依赖、生产依赖)包
    6.npm remove xxx
        删除包和依赖
        npm config set prefix "D:\study\node\node_global"
```

## Buffer

**Buffe用来存储二进制数据的容器**

### 创建Buffer

```javascript
Buffer.alloc(size)        里面数据都是0
Buffer.allocUnsafe(size)  里面数据可能包含敏感数据
Buffer.from(string)       将一个字符串转换为Buffer数据
```

### 使用Buffer

> Buffer位于global上,所以不需要引入,直接使用

*  *UTF-8编码*

    *英文,一个字节*

    中文,三个字节

```javascript
let buf1 = Buffer.alloc(10);
console.log(buf1);//<Buffer 00 00 00 00 00 00 00 00 00 00>
let buf2 = Buffer.allocUnsafe(10);
console.log(buf2);//<Buffer 03 00 00 03 7a 89 02 00 50 69>
let buf3 = Buffer.from('解决问题的方法,不可能由导致这个问题的思维方式来解决');//将字符串转换成buffer存储
console.log(buf3);//<Buffer e8 a7 a3 e5 86 b3 e9 97 ae e9 a2 98 e7 9a 84 e6 96 b9 e6 b3 95 2c e4 b8 8d e5 8f af e8 83 bd e7 94 b1 e5 af bc e8 87 b4 e8 bf 99 e4 b8 aa e9 97 ae e9 ... 26 more bytes>
buf3.forEach(item => {
  console.log(item)
});
// buf3.fill(0);//将数据全部填充为0
// console.log(buf3);

console.log(buf3.toString());//转换为字符串的格式
```

## process进程

```javascript
process.argv  : 获取运行指令的命令参数
process.argv0 : nodejs程序的目录
process.env : 获取系统环境变量
环境变量:path -->遍历每个路径,查找到程序运行
process.execArgv : 获取运行指令文件前面的命令行参数
process.cwd() : 当前文件的绝对路径  === __dirname
process.exit([code]) : 退出程序
```

```javascript
// console.log(process.argv);
/*
  [
    //nondejs程序目录
    'D:\\study\\node\\node.exe',
    //当前运行文件的路径
    'D:\\study\\1108_Web\\Web Front-end course\\直播课\\高级部分\\curriculum\\Node课程\\0304\\code\\02.process.js'
    'hello',
    '猪妈妈'
  ]
*/
//console.log(process.argv0);//D:\study\node\node.exe

// node --inspect .\02.process.js hello process
//console.log(process.execArgv);//[ '--inspect' ]

// console.log(process.env)


// console.log(process.cwd())//D:\study\1108_Web\Web Front-end course\直播课\高级部分\curriculum\Node课程\0304\code
// console.log(__dirname);
let i = 0;
/**
 * 1.这么终止nodejs程序的运行
 * ctrl+c
 * 
 * 2.process.exit();
 */
setInterval(() => {
  console.log('定时器执行了', ++i);
  if (i > 5) {
    process.exit();
  }
}, 1000);
```

## path路径

```javascript
path.relative(from, to)  处理相对路径
处理from到to的相对路径
path.resolve([...paths]) 处理绝对路径

Buffer和process是global全局变量,所以可以直接使用
而nodejs其他模块,不需要下载,但是需要引用才能使用
```

```javascript
let path = require('path');
// console.log(path.relative('./public', 'index.html'));//..\index.html

//console.log(path.resolve('index.html'))//D:\study\1108_Web\Web Front-end course\直播课\高级部分\curriculum\Node课程\0304\code\index.html


/*
  需要在path.js文件,获取process.js文件的绝对路径
*/
let dirname = __dirname;
// let dirname = process.cwd();
//先找到当前文件的文件夹的路径,再写文件
// console.log(path.resolve(dirname, '02.process.js'));
console.log(path.resolve(dirname, '../测试/1.html'))
```

## fs 文件系统

### 同步写入

#### 打开文件

* fs.openSync()

#### 写入文件

* fs.wirteSync()

#### 关闭文件

* fs.closeSync()

```javascript

let fs = require('fs');
let path = require('path');
//打开文件
//fd 文件描述符,代表打开文件的唯一标识
//如果文件存在就打开,如果不存在就自动创建文件
let filePath = path.resolve(__dirname, 'a.txt');
// w 写入内容会覆盖
// a 追加内容
let fd = fs.openSync(filePath, 'a');
console.log(fd);
//写入内容
let result = fs.writeSync(fd, '春来发几枝');
console.log(result);
//关闭文件
fs.closeSync(fd);
```

### 异步写入

> 异步写入:一般都有回调函数

#### 打开文件

* fs.open()

#### 写入文件

* fs.wirte()

#### 关闭文件

* fs.close()

```javascript
let fs = require('fs');
let path = require('path');
//打开文件
let filePath = path.resolve(__dirname, 'a.txt');
// w  写入会覆盖
// a  接着后面写入

fs.open(filePath, 'w', (error, fd) => {
  /*
    error 错误对象
      null 没有错误
      {错误信息} 有错误
  */
  //在nodejs程序中,往往异步回调函数的第一个参数都是error,这种机制我们叫做 错误优先机制(提倡优先解决错误)
  //fd 打开文件的文件描述符
  if (error) {
    throw new console.error(erroe, '错误');
    return;
  }

  //写入文件
  fs.write(fd, '猪宝宝', (error) => {
    //不管写入成功与否都要关闭文件
    if (error) {
      throw new console.error(erroe, '错误');
    }
    //关闭文件
    fs.close(fd, (error) => {
      if (error) {
        throw new console.error(erroe, '错误');
        return;
      }
      console.log('文件关闭');
    });
  });
});
```

## async+promise解决异步回调地狱

**先定义模块**

```javascript
let fs = require('fs');
let path = require('path');
```

**封装方法**

```javascript
//open打开方法
function open(filePath) {
  //创建promise对象并返回
  return new Promise((resolve, reject) => {
    //打开文件
    let filePath = path.resolve(__dirname, 'a.txt');
    //执行文件
    fs.open(filePath, 'w', (error, fd) => {
      if (error) {
        //失败   将promise对象的状态改变
        reject(error);
        return;
      }
      //成功   将promise对象的状态改变成功传入fd
      resolve(fd);
    });
  });
}
//write写的方法
function write(fd, string) {
  //创建promise对象并返回
  return new Promise((resolve, reject) => {
    //执行文件
    fs.write(fd, string, (error) => {
      if (error) {
        //失败   将promise对象的状态改变
        reject(error);
        return;
      }
      //成功   将promise对象的状态改变成功传入fd
      resolve(fd);
    })
  });
}
//close关闭的方法
function close(fd) {
  //创建promise对象并返回
  return new Promise((resolve, reject) => {
    //执行文件
    fs.close(fd, (error) => {
      if (error) {
        //失败   将promise对象的状态改变
        reject(error);
        return;
      }
      //成功   将promise对象的状态改变成功传入fd
      resolve(fd);
    })
  });
}
```

**定义一个async函数**

```javascript
(async () => {
  //执行异步操作
  /*
    async函数的返回值一定是promise对象
    await会等后面的promise对象发生变化(只等promise对象,别的不会等)
    一旦状态变成成功状态,就不会等了，会将resole(value)中value返回
    一旦失败状态就变成失败状态,退出async函数(剩下代码就不会执行了),并将async函数返回promise对象的状态改为失败状态
  */
  let fd = await open('a.txt');
  await write(fd, 'async+promise解决回调地狱');
  await close(fd);

})()
  .then(() => {
    //async没有promise对象的状态是失败状态
    //所有异步代码都成功了，此时async返回promise是成功状态
    console.log('成功');
  })
  .catch((error) => {
    //只要有一个async函数中有一个promise对象变成失败
    //就会终止运行,返回一个失败状态的promise
    //error就是失败的原因
    console.log('失败');
  })
```

## 简单写入文件

* fs.writeFile();
* fs.writeFileSync();

```javascript
let fs = require('fs');
let path = require('path');
let filePath = path.resolve(__dirname, 'b.txt');
// {flag:'a'} 往后追加内容，默认为w
fs.writeFile(filePath, '木木大人', { flag: 'a' }, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('文件写入成功');
});
```

## 流式文件写入

* 简单文件写入 -- 一般用于小文件
* 流式文件写入 -- 一般用于大文件
* fs.createWriteStream()

```javascript
let fs = require('fs');
let path = require('path');
let filePath = path.resolve(__dirname, 'c.txt');
//创建可写流
let ws = fs.createWriteStream(filePath);


//绑定事件:监听流式文件写入是否结束
//once绑定一次性事件,执行完自动解绑
ws.once('open', () => {
  console.log('可写流打开了')
})
ws.once('close', () => {
  console.log('可写流关闭了')
})

//往可写流中塞数据
ws.write('锄禾日当午');
ws.write('汗滴禾下土');
ws.write('谁知盘中餐');
ws.write('粒粒皆辛苦');

//关闭可写流
ws.end();
```

## 简单读取文件

* fs.readFile();

```javascript
let fs = require('fs');
let path = require('path');

let filePath = path.resolve(__dirname, './03.path.js');

fs.readFile(filePath, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('读取文件成功');
  //将Buffer数据转换成字符串
  console.log(data.toString())
})
```

## 流式读取文件

* fs.createReadStream();

```javascript
let fs = require('fs');
let path = require('path');
let filePath = path.resolve(__dirname, './a.txt');
//创建可读流
let rs = fs.createReadStream(filePath);
//可读流默认情况下,只会读取一次数据(64kb)
//消费读取的这个数据,可读流就会读取下一次数据
let string = '';

//nodejs的设计一般都可以链式调用 
rs
  .on('data', (data) => {
    /*
      data就是读取的数据
      data事件就是消费可读流的数据
      持续性事件会一直消费可读流,直到所有内容全部读取完毕,可读流会自动关闭
    */
    string += data.toString();

  })
  .once('end', () => {
    //可读流数据关闭事件,说明数据拼接完成
    console.log(string);
  })

```

## 流式复制文件

```javascript
let fs = require('fs');
let path = require('path');
let inputFilePath = '../video/04.path路径.mp4';
let outFilePath = path.resolve(__dirname, 'd.mp4');
//创建可读流  会自动关闭
let rs = fs.createReadStream(inputFilePath);
//创建可写流  不会自动关闭,需要手动
let ws = fs.createWriteStream(outFilePath);

// rs
//   .on('data', (data) => {
//     //当数据读取出来,要写入成另外一个文件
//     ws.write(data);
//   })
//   .on('end', () => {
//     //关闭可写流
//     ws.end();
//   })

//会持续性消费可读流数据
//将可读数据写入到可写流中
//会自动关闭
rs.pipe(ws);
```

## events事件模块

```javascript
let EmiterEvents = require('events');

class MyEmiter extends EmiterEvents { };
let myEvent = new MyEmiter();

//自定义事件

//一个事件可以绑定多个回调函数
//绑定持久性事件
myEvent.on('aaa', (a, b) => {
  console.log('111---aaa事件触发', a, b);
});
let callback = () => {
  console.log('222---aaa事件触发');
}
myEvent.on('aaa', callback);
//绑定一次性事件
myEvent.once('bbb', () => {
  console.log('bbb事件触发');
})
//触发自定义事件
myEvent.emit('aaa', 123, 1234);
//解绑事件
myEvent.off('aaa', callback)
myEvent.emit('aaa');
myEvent.emit('bbb');
myEvent.emit('bbb');
```

## crypto加密

* 消息摘要的加密算法(md5,sha1)
  1. 生成的密文长度固定
  2. 同样的明文加密后得到同样的密文
  3. 不可逆(不能通过密文逆向破解明文)
* 加盐

```javascript
const crypto = require('crypto');
// const md5 = crypto.createHash('md5');
const md5 = crypto.createHash('sha256');

// 定义明文  必须是字符串
let password = '123456';

// 定义盐
const salt = '6TE#6gbXQO';

password = password + salt;

// md5.update(password, 'utf8') 加密处理，生成密文
// digest('hex') 装换成16进制显示
const secret = md5.update(password, 'utf8').digest('hex');
// 密文
console.log(secret); // 54269bc65b5d1be10a75645a296b78c3
```

## debugger

**如何在nodejs中调试代码**

1. 可以直接在chrome浏览器调试
   1. --inspect 启动调试
   2. -brk 在第一行打一个断点
   3. node --inspect -brk xxx
2. 在vscode里面调试

```javascript
function max() {
  let a = Math.floor(Math.random() * 100);
  let b = Math.floor(Math.random() * 100);
  let result = Math.max(a, b);
  return result;
}
let arr = [];
for (let i = 0; i < 10; i++) {
  let result = max();
  arr.push(result);
}
console.log(arr);
```

