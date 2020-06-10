  # ECMAScript
    ## ECMA组织介绍
      1.ECMA组织:欧洲计算机制造商协会,制定和发布的脚本语言规范
      2.ECMAscript是基于Netscape javaScript的一种标准脚本语言。
      3.JavaScript包含3个部分:
        1)ECMAScript核心(JS标准语法)
        2)浏览器端的扩展
          BOM(浏览器对象模型)
          DOM(文档对象模型)
        3)服务器端的扩展
          Node.js
      4.ES的几个重要版本
        ES5:09年发布
        ES6:15年发布,也叫ECMA2015
        ES7:16年发布,也叫ECMA2016
    ## 理解:
      1. 除了正常运行模式(混杂模式),ES5添加了第二种运行模式:"严格模式(strict mode)"
      2. 顾明思议,这种模式使得JS在严格的语法条件下运行
    ## 目的/作用:
      1. 消除JS语法一些不合理,不严谨的地方,减少一些怪异行为
      2. 消除代码运行的一些不安全之处,为代码的安全运行保驾护航
      3. 为未来新版本的JS做好铺垫
    ## 使用:
      1. 在全局或函数的第一条语句定位为: 'use strict';
      2. 如果浏览器不支持,只解析为一条简单的语句,没有任何副作用
    ## 语法和行为改变
      1. 必须用var 声明变量
      2. 禁止自定义的函数中this指向window
      3. 创建eval作用域
      4. 对象不能有重名的属性(语法报错)

    ## JSON对象
      1. JSON.stringify(obj/arr) js对象(数组)转换为json对象(数组)
      2. JSON.parse(json) json对象(数组)转换为js对象(数组)
      3. 用于前后端进行交互(或者数据的存储)

    ## ES5给Object扩展了一些静态方法,常用的2个:
      1. Object.create(prototype,[descriptors])
      1. Object.create(prototype,[descriptors]) 创建对象并继承
        - 作用: 以指定对象为原型创建新的对象
        - 为新的对象指定新的属性,并对属性进行描述
        - value: 指定的值
        - weitable:标识当前属性值是否是可修改的,默认为false
        - configurable:标识当前属性是否可以被删除,默认是false
        - enumberable: 标识当前属性是否能用for in 枚举,默认为false
        - for-in(性能问题)不仅枚举自身属性,也可以枚举原型对象上的属性,一般配合对象.hasOwnProperty()方法
      2. Object.defineProperties(object, descriptors)
        - 作用:为指定对象定义扩展多个属性
        - get: 用来获取当前属性值的回调函数
        - set: 修改当前属性值的触发的回调函数,并且实参为修改后的值
        - 存储器属性: settter,getter一个用来存值,一个用来取值
      3. 对象本身有两个方法
        - get propertyName(){} 用来得到当前属性值的回调函数
        - set propertyName(){} 用来监视当前属性值变化的回调函数
    ## Array的方法扩展
      1. Array.prototype.indexOf(value):得到数组中的某个数据的第一个下标,用来找数据的
      2. Array.prototype.lastIndexOf(value):得到数组中某个数据的最后一个小标
      3. Array.prototype.forEach(function(item,index){}):遍历数组
      4. Array.prototype.map(function(item,index){}):遍历数组,返回新数组
      5. Array.prototype.filter(function(item,index){}):遍历数组,过滤后的数组
    ## Function的扩展
      1. Function.prototype.bind(obj)
        - 作用:讲函数内的this绑定为obj,并将函数返回
      2. 面试题:区别:bind()与call和applay()?
        - call()/apply()是立刻调用函数
        - bind()是将函数返回

  ## ES6的笔记
    ## let关键字
      1. 作用: 与var 类似,用于声明变量
      2. 特点:在块级作用内有效,不能重复声明,不会预处理,不存在提升
      3. 应用:循环遍历加监听,使用let取代var是趋势
    ## const关键字
      1. 作用: 定义一个常量
      2. 特点: 不能修改,其他的同let一样
      3. 应用: 保存不用改变的数据
    ## WebStorm--->Languages&Frameworks--->Javascript--->右侧的窗口中找下拉框--->切换ECMAScript 6 保存即可

    ## 解构赋值
      1. 理解:从对象或数组中提取数据,并赋值给变量(多个)
      2. 对象的解构赋值: let {m,n}={n:'a',m:'b'}
      3. 数组的解构赋值: let [a,b]=[10,'测试']
      4. 用途: 给多个形参赋值
      5. 注意:解构赋值对象的时候,写的变量名字一定是对象中存在的属性名字,想要什么属性就写什么属性

    ## 模版字符串
      1. 作用:简化字符串的拼接
      2. 模版字符串必须用 `` 包含
      3. 变化的部分使用 ${xxx}定义
    ## 简化对象的写法
      1. 省略同名的属性值
      2. 省略方法的function
    ## 箭头函数
      1. 作用: 定义匿名函数
      2. 基本语法: ()=>{console.log('xxxx')}
      3. 一个参数: msg=> msg+2
      4. 多个参数: (m,n)=>m+n
      5. 函数体不用大括号:默认有返回结果
      6. 函数体如果有多个语句,需要使用{}包裹,如果内部有需要返回的值,则手动return
      7. 使用场景: 多用来定义回调函数
      8. 箭头函数的特定:
        - 简洁
        - 箭头函数没有自己的this,箭头函数的this不是调用的时候决定的,而是在定义的时候处在自己对象就是它的this
        - 扩展理解: 箭头函数的this看外层的是否有函数,如果有,外层函数的this就是内部箭头函数的this,如果没有则this是window
    ## 三点运算符: 拆包和打包
    ## 形参默认值: 简化函数的形参语法
    ## Promise对象:代表了未来某个将要发生的事件(通常是一个异步操作)
      1. 理解:有了Promise对象,可以将异步操作以同步的流程表达出来,避免层层嵌套的回调函数(回调地狱)
        - 回调地狱:回调嵌套或者函数相互调用(很乱的调用)
        - ES6的Promise是一个构造函数,用来生成Promise的实例对象
      2. 使用Promise基本步骤(2步)
        - 创建Promise对象
        - let promise = new Promise((resolve,reject)=>{
          // 初始化promise状态为pending,执行异步操作
          if(异步操作成功){
            resolve(value); // 修改promise的状态为fullfilled
          }else{
            reject(errMsg); // 修改promise的状态为rejected
          }
        })
        - 调用promise的then()
        - promise.then(function(){
            result=>console.log(result),
            errorMsg=>alert(errorMsg)
        })
      3. promise对象的三个状态
        - pending: 初始化状态
        - fullfilled: 成功状态
        - rejected: 失败状态
      4. 应用:
        - 使用promise实现超时状态
        - 使用promise封装ajax请求
        let request = new XMLHttpRequest();
        request.onreadystatechange=function(){}
        request.respnseType='json';
        request.open('GET',url)
        request.send()
    ## Symbol:
      1. ES5中对象的属性名都是字符串,容易造承重名,污染环境
      2. 概念:ES6中的添加了一种原始数据类型Symbol(已有的原始数据类型:String,Number,Boolean,null,undefined,对象)
      3. 特点:
        - Symbol 属性对应的值是唯一的,解决命名冲突问题
        - Symbol 值不能与其他数据进行计算,包括同字符串拼串
        - for in , for of 遍历时不会遍历symbol 属性 
      4. 使用:
        - 调用Symbol 函数得到symbol 值
        - let symbol =Symbol()
        - let obj ={}
        - obj[symbol]='hello';
      5. 传参标识
        - let symbol = Symbol('one')
        - let symbol2 = Symbol('two')
        - console.log(symbol) // Symbol('one')
        - console.log(symbol2) // Symbol('two')
      6. 定义常量标识
        - 可以定义常量,就是标识
        - const person_key = Symbol('person_key')
        - console.log(person_key)
      7. 内置Symbol值
        - 除了定义自己使用的Symbol值以外,ES6还提供了11个内置的Symbol值,指向语言内部使用的方法
        - Symbol.iterator
        - 对象的Symbol.iterator属性,指向该对象的默认遍历器方法(很快就讲了)
    ## iterator 是一种接口机制,为各种不同的数据结构提供统一的访问机制
      1. 作用:
        - 为各种数据结构,提供一个统一的，简便的访问接口
        - 使得数据结构的成员能够按某种次序排列
        - ES6创造了一种新的遍历命令,for..of循环,Iterator接口主要提供for...of消费
      2. 工作原理
        - 创建一个指针对象(遍历器对象),指向数据结构的起始位置
        - 第一次调用next方法,指针自动指向数据结构的第一个成员
        - 接下来不断调用next方法,指针会一直往后移动,知道指向最后一个成员
        - 每调用next方法返回的是一个包含value和done的对象,{value:当前成员的值,done:布尔值}
        - value表示当前成员的值,done对应的布尔值表示当前的数据的结构是否遍历结束
        - 当遍历结束的时候返回的value值是undefine,done值为false
        - 原生具备iterator接口的数据(可用for of遍历)
        - 扩展理解:
          - 当数据结构上部署了Symbol.iterator接口,该数据可以用for-of遍历
          - 当使用for of去遍历目标数据的时候,该数据会自动去找Symbol.iterator
        - Symbol.iterator属性指向对象的默认遍历器方法(iterator接口)
          - Array
          - arguments
          - set容器
          - map容器
          - String
          ....

    ## Generator函数
      1. 概念:
        - ES6提供的解决异步编程的方案之一
        - Generator函数是一个状态,内部封装了不同状态数据
        - 用来生成遍历对象
        - 可暂停函数(惰性求值),yield可暂停,next方法可启动,每次返回的是yield后的表达式结果
      2. 特点:
        - function 与函数名之间有一个星号
        - 内部用yield表达式来定义不同的状态
        - 例如:
          function * generatorExample(){
            let result = yield 'hello'; // 状态值为hello
            yield 'generator'; // 状态值为generator
          }
        - generator函数返回的是指针对象(接iterator),而不会执行函数内部逻辑
        - 调用next方法函数内部逻辑开始执行,遇到yield表达式停止,返回{value:yield后的表达式结果/undefined,done:true}
        - 再次调用next方法会从上一次停止时的yield处开始,直到最后
        - yield语句返回结果通常为undefine,当调用next方法时传参内容会作为启动时yield语句的返回值
    ## async 函数是generator函数的语法糖
      1. 概念: 真正意义上去解决异步回调问题,同步流程表达异步操作
      2. 本质: Generator的语法糖
      3. 语法:
        - async function foo(){
            await 异步操作;
            await 异步操作;
        }
      4. 特点:
        - 不需要像Generator去调用next方法,遇到await等待,当恰你的异步操作完成就往下执行
        - 返回的总是Promise对象,可以用then方法进行下一步操作
        - async 取代Generator函数的星号*,await 取代Generator的yield
        - 语义上更为明确,使用简单,经临床验证,暂时没有副作用及不良反应
      1. await 是暂停,但是必须跟着promise对象才会暂停,其他的都不暂停
    ## class
      1. 通过class定义类/实现类的继承
      2. 在类中通过constructor定义构造方法
      3. 通过new 来创建类的实例
      4. 通过extends来实现类的继承
      5. 通过super调用父类的构造函数
      6. 重写从父类继承的一般方法
    ## 字符串扩展
      1. includes(str) 判断是否包含指定的字符串
      2. startsWith(str) 判断是否以指定字符串开头
      3. endsWith(str) 判断是否以指定字符串结尾
      4. repeat(count) 重复指定的次数
    ## 二进制与八进制数值表示法:二进制用0b,八进制用0o
      1. Number.isFinite(i) 判断是否是有限大的数
      2. Number.isNaN(i) 判断是否是NaN
      3. Number.isInteger(i) 判断是否是整数
      4. Number.parseInt(str) 将字符串转换为对应的数值
      5. Math.trunc(i) 直接去除小数部分
    ## 数组扩展
      1. Array.form(伪数组) 伪数组转真数组
      2. Array.of(val1,val2,val3)将一些列数值转换为数组
      3. find(回调) 找出第一个满足条件的元素
      4. findIndex(回调) 找出第一个满足条件的元素的下标
    ## 对象扩展
      1. Object.is(v1,v2)
      2. Object.assign(target,obj1,obj2) 将对象的属性复制到目标对象上
      3. 直接操作__proto__属性
        - let obj2={}
        - obj2.__proto__=obj1
    ## 拷贝数据
      1. 基本数据类型
        - 拷贝后悔生成一份新的数据,修改拷贝以后的数据不会影响原数据
      2. 对象/数组
        - 拷贝后不会生成新的数据,而是拷贝的是引用,修改拷贝以后的数据会影响原来的数据
      3. 拷贝数据的方法:
        - 直接赋值给一个变量 浅拷贝
        - Object.assgin() 浅拷贝
        - Array.prototype.concat() 浅拷贝
        - Array.pototype.slice() 浅拷贝
        - JSON.parse(JSON.stringify()) 深拷贝(深度克隆),拷贝的数据里不能有函数,处理不了
      4. 浅拷贝(对象/数组)
        - 特点: 拷贝引用,修改拷贝以后的数据会影响原数据
      5. 深拷贝(深度克隆)
        - 特点: 拷贝的时候生成新数据,修改拷贝以后的数据不会影响原数据
        - 深度克隆会进行深度的遍历(会用到递归)
        - 需要进行类型的检测 : typeof 返回数据类型:String,Number,Boolean,Undefined,Object,Function
        - Object.prototype.toString.call(obj) 返回的是该对象到底是什么类型
        - console.log(Object.prototype.toString.call(result))
        - 截取获取的真正的数据类型
        - console.log(Object.prototype.toString.call(result).slice(8, -1))
        - for-in循环 对象(属性名) 数组(下标)
    ## Set容器:无序不可重复的多个值的集合体
      1. Set()
      2. Set(array)
      3. add(value)
      4. delete(value)
      5. has(value)
      6. clear()
      7. size
    ## Map容器: 无序的key不重复的多个key-value的集合体
      1. Map()
      2. Map(array)
      3. set(key,value) 添加
      4. get(key)
      5. delete(key)
      6. has(key)
      7. clear()
      8. size

    ## for-of循环可以遍历下面内容:
      1. 遍历数组
      2. 遍历Set
      3. 遍历Map
      4. 遍历字符串
      5. 遍历伪数组

  ## ES7
    ## Array.prototype.oncludes() 判断数组中是否包含指定的value
    ## 指数运算符(幂): **
  ## ES8
    ## Object.values(对象) 获取对象中所有的属性的值 
    ## Object.entries(对象) 把对象转数组
  ## ES9
    ## Promise.finally
      -   let promise = new Promise((resolve,reject)=>{
              console.log('开始执行')
              resolve('111')
              console.log('结束执行')
          })

          promise.then((data)=>{
              console.log('成功:'+data)
            }).catch((errorMsg)=>{
              console.log('报错啦:'+errorMsg)
            }).finally(()=>{
              console.log('成功失败都会执行的')
          })

      