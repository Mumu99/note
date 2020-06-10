# 自定义call和apply和bind方法

## 自定义call方法   

**Function.prototype.call**

**语法**

> fun.call(thisArg[arg1,arg2[,...]])

**参数**

> thisArg

在fun函数运行时指定的this的值

> arg1,arg2...

给fun的参数列表

```javascript
let per = {
   name: "mumu",
}

function person(name, age) {
    console.log(name);
    console.log(age);
    console.log(this.name);
    return 1;
}
person.call(per,'木木',20);//木木，20，mumu
```

第一步： call改变了this的指向,指向到per 

第二步：person函数执行

第二步：函数通过调用后,结构如下：

```javascript
let per = {
    name: "mumu",
    person(name, age) {
    console.log(name);
    console.log(age);
    console.log(this.name);
	}
}
person.call(per,'木木',20);//木木，20，mumu
```

自定义call方法

* 将函数设为传入对象的属性
* 执行函数
* 删除函数

```javascript
Function.prototype.myCall = function (context, ...args) {
    // 判断调用者是不是函数，如果不是就抛出错误
    if (typeof this !== 'function') {
        throw new TypeError('not a function');
    }
    context = context || window;
    //定义一个属性
    const fn = null;
    //context是一个对象,给对象添加属性等于传入的this,就是函数
    context[fn] = this;
    //然后...args是用来收集其他的参数,然后传入当前函数中
    let result = (context[fn])(...args);
    delete context[fn] //删除掉属性值,避免造成污染
    return result; //一定要在原函数中写return
}
let per = {
    name: "mumu",
}

function person(name, age) {
    console.log(name);
    console.log(age);
    console.log(this.name);
    return 1;
}
person.myCall(per, '木木大神', 20);//木木大神，20，mumu
```

## 自定义apply方法

**Function.prototype.apply**

**语法**

> fun.apply(thisArg, [argsArray])

**参数**

> thisArg

在fun函数运行时指定的this的值

> arg1,arg2...

给fun的参数列表

**和call方法基本一样,改变传入参数的形式**

```javascript
Function.prototype.myApply = function (context, args) {
    // 判断调用者是不是函数，如果不是就抛出错误
    if (typeof this !== 'function') {
        throw new TypeError('not a function');
    }
    //定义一个属性
    const fn = null;
    //context是一个对象,给对象添加属性等于传入的this,就是函数
    context[fn] = this;
    //然后...args是用来收集其他的参数,然后传入当前函数中
    (context[fn])(...args);
    delete context[fn] //删除掉属性值,避免造成污染
}
```

