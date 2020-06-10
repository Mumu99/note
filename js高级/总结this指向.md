## this 指向
- this 指向是动态的，看函数的调用方式

- 普通函数
  - 函数直接调用 fn() --> window
    - 在 ES5 严格模式下('use strict') --> undefined
  - 函数隐式调用 obj.fn() --> obj
  - 函数显示调用 fn.call/apply(obj) --> obj
  - 函数 new 调用 new fn() --> 实例对象
  - 事件的回调函数：指向被绑定事件的 DOM 元素
  - 定时器的回调函数：window
    - 在 ES5 严格模式下('use strict') --> undefined

- 特殊函数
  - ES6 的箭头函数：指向离它最近，包裹它函数的 this（没有就是 window）
    - 在 ES5 严格模式下 之前指向 window --> undefined
    - 不能被 new 调用，不能被 call/apply 改变 this 指向
  
- ES6 类语法（class）中的方法：指向类的实例对象
## this指向
**this指向是动态的,看函数的调用方式**  
1.全局环境中,this-->window
`console.log(this);`  

2.在普通函数中,this-->window
```
	function fn(){
      console.log(this);
    }
```  

3.隐式调用,this-->当前实例对象
```
var obj = {  
   set: function () {  
   console.log(this)
   }
}
obj.set();
```

4.显示调用 call/apply/bind ， this-->传入的指定对象
```
function fn(){
  console.log(this)
  }
  let obj = {
    name : '木木'
  }
  fn.apply(obj);
```

5.构造函数调用,this-->当前事件发生对象
```
function Person(){
   console.log(this)
}
let per = new Person()
```

6.定时器 this-->window
```
 setimeout(function(){
   console.log(this)
 },0);
```

7.事件监听 this-->当前事件对象
```
document.documentElement.addEventListener('click', function () {
   console.log(this);
})
```

8.箭头函数的this无法修改,因为他没有自己的this指向--->window
```
let obj = ()=>{
    console.log(this);
}
let obj1 = {};
obj.apply(obj1)
```
