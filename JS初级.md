### 晨测

## js 的组成 及各自作用

ECMAScript:语言的核心
DOM:文档对象模型，提供了一系列的应用程序接口(API),供使用者对 DOM 进行增删改查等操作
BOM:浏览器对象模型，客户端和浏览器窗口操作的基础，可以使用 BOM 对浏览器窗口进行访问和操作，
BOM 没有一个成型的规范，但是所有浏览器都支持

## 延迟执行和异步加载的区别及执行时机

延迟执行(defer):就是 js 是异步加载的但是不会执行，只有等页面全部加载完毕之后才会加载 js，只对外嵌入 js 生效
异步加载(async):因为 js 如果放在前面的话，浏览器从上到下解析，然后当解析到 js 的时候就会停止对页面的解析，
所以用异步加载可以让 js 在加载的时候不会影响到其他代码的加载
虽然是异步加载 js，但是 js 一旦加载完毕之后，就会立马执行 js，执行的时候就会停止其他的操作

## 什么是声明提升 及 举例子说明

生命提升:先打印一个 a 变量，然后在打印的后面再去声明一个变量 var a=2;因为浏览器是有一个预加载的功能
会先把 js 里面所有声明的变量提取到网页的最前面去开始解析，所以打印出来的值是 undefined

## 定义全局变量的 3 中方式

1、在最外面定义一个 var a = 1;
2、不管在哪个位置定义 window.b = 2; 因为不管在哪里，全局作用域的对象就是 window
3、直接给未声明的变量赋值，它也是全局变量

## 数据类型有哪些 及 含义

简单的值:String 字符串 、 Number 数字 、 Null 空 、 Undefined 未定义 、 Boolean 布尔值
复杂的数据结构:Object 对象 、 Array 数组 、 function 函数

## Undefined 应用场景

1、声明未赋值
2、函数调用的时候没有给值
3、调用对象里的数据的时候，对象里面没有该参数，或者该参数没有赋值
4、函数没有返回值的时候，默认返回 undefined

## Null 应用场景

1、函数传入参数的时候，如果不想给值或者表示他不是一个对象的时候
2、定义一个全局变量的，但是现在不用，将来调用的时候就可以初始化为 null
3、最为原型链的终点

## 各个值互相转换

number 转换为 number:
会把其他进制转换成十进制，其他不变
string 转 number:
如果是纯数字那么直接转成 number、8 进制因为 0 开头所以按照 10 进制转换
只要含有非数字(除 NaN、无穷大、科学计数法)都是 NaN
空字符串和都是空格的字符串都是 0
boolean 转 number:
true 为 1、false 为 0
undefined 转 number:NaN
object 转 number:空数组是 0、只有一个值的数组就会把这个值转换为数字

## 逗号操作符的作用

能先执行逗号左边的操作数，再执行右边的操作数，并把右边的操作数返回出来

## 进制转换

## 什么是浮点数溢出 现在怎么解决

浮点溢出就是 js 在做小数运算的，因为二进制浮点运算标准导致
解决：
整数运算是精确的，我们可以把浮点转换为整数再除 10 即可

## isNaN 方法

isNaN 就是用来检测一个值是否为非纯数字，如果是非纯数字返回 true，否则为 false

## 说出逻辑与逻辑或逻辑非的步骤

逻辑与:
一假即假，两个操作数都返回 true 的时候才返回 true
操作数 1 结果为 true 的时候返回操作数 2,如果操作数 1 结果为 false 的时候返回操作数 1
逻辑或:
一真即真
操作数 1 结果为 true 的时候返回操作数 1，如果操作数 1 为 false 则返回操作数 2
逻辑非:
一元运算符，直接在操作数的前面加上！把操作数转换成布尔值

## = == ===的区别

=:赋值
==:等于 两个值相等即可
===:全等 两个值不仅值相等，类型也得相等
undefined 和 null 相等，不全等
两个操作数都是对象的时候，就比较他们的地址

## 加法操作符运算规则

+:
运算过程中出现字符串，那么会把其他类型都转成字符串然后拼接
(按照顺序计算，如果第一个是字符串后面都是字符串)
如果对象和数字相加或者对象对象 数组数组相加 都是转成字符串
如果 undefined 和 null 运算都转成数字 是 NaN

## 乘法操作符运算规则

*:
操作符计算会把不同类型的值，都会转换成 number 类型 然后计算

## 隐藏题

## 字符串转数字方法有哪些

1、Number
2、+"a"
3、-0
4、*1
5、/1
6、parseInt
7、parseFloat

## 写一个三元运算符

true ? 1 : 2

## if 的优化

利用三元
var a = 1;
var b = 2;
a > b ? 1 : 2;
//短路原理优化
a > b && 1 || 2;

## 小括号 大括号 中括号的作用

()提高优先级，函数的调用和声明
{}代码块，声明对象
[]下标，数组

## 调试语句是什么？

debugger 语句，是用来暂停 js 执行，可以在代码的任何的位置去暂停脚本，但是不会删除变量
文件等信息，类似于在审查元素中打断点需要打开审查元素(调试工具)才起作用

## 完整的 switch 语法

switch(){
case 1 :语句 1;
break;
case 1 :语句 2;
break;
case 1 :语句 3;
break;
default:语句;
}

## do while 和 while 的区别

区别:
do while 表达式的值是在每次循环结束以后去检查，而不是开始就检查，所以
do while 至少执行一次，但是 while 可能一次都不会执行

## break 和 continue 的区别

break:跳出整个循环
continue:跳出本次循环，继续执行表达式为真的代码

## label 语句是干什么的

label 可以是任意合法的标识符，然后使用冒号，分割，标签与标签语句
label 和 break、continue 一起使用的时候，主要用来跳出内部循环体

## 异常处理

try、catch、finally 为异常处理语句
try{
调试代码
}catch(e){
捕获异常，e 为异常类型。
当异常后执行的代码
}finally{
后期清理代码块
}

## 写出常见的异常类型及含义

Error:普通异常;
typeError:类型错误;
ReferenceError:变量未定义;
SyntaxError:语法错误

## 匿名函数的调用有哪些

1、用小括号把整个函数包起来然后在后面加小括号
2、在函数前面加一元表达式函数后面加小括号
3、arguments.callee

## 获取函数的参数个数

arguments.length 就是实参的个数
arguments 是伪数组，可以使用下标的方法

## 什么是形参和实参

形参：
在定义函数的时候，声明的参数变量，仅在函数内可见
实参：
在调用函数的时候，传入的参数

## 谈一谈作用域

变量作用域(scope)：
指的是变量在程序中可以访问的有效范围。
全局作用域：
变量在整个页面都是可见的，可以被自由访问
局部作用域：
变量仅仅能够在函数内部可见
1、谈一谈变量对象
变量对象是一个键值对的形式
全局上下文变量对象：
初始化是一个 window 对象，是一个预定义对象，作为全局变量和全局函数的占位
函数上下文变量对象：
先执行上下文，会激活所有变量对象。最少有 arguments 对象（先加载）然后再加载
其他方法属性，函数声明的时候，如果变量对象已经存在了相同的属性，那么就会替换。
如果是变量名称和对应值组成的变量对象属性被创建，如果变量名称与已经声明的形参
或者函数相同的时候。。不会被覆盖
2、谈一谈作用域链
当代码在一个环境中执行的时候，就会创建一个对象作用域链
保证对执行环境有权访问的所有变量和函数的有序访问，作用域链的首端，始终都是
当前代码所在环境的变量对象，标识符沿着作用域一级一级的搜索的过程，逐级向后走，
直到找到标识符为止，找不到就会报错
内部函数访问外部函数的变量，采用是链式查找的方法来决定的
//\*\*//
当代码在一个环境中执行的时候。会创建一个对象作用域链，保证执行环境有权访问所有
的变量和函数，采用逐级查找的方式。如果找不到就会报错 3.谈一谈 this
指代当前函数的调用者，如果没有调用者，则指向全局对象 window
4、获取标签的四种方法
document.getElementById();
document.getElementsByTagName();
document.getElementsByName();
document.getElementsByClassName();
5、5 个事件
onfocus(); 焦点
onblur(); 失去焦点
onclick(); 单击
ondblclick();双击
oncontextmenu();右键单击
onchange();
oninput();

## 手写选项卡切换代码 其中一个

var oLis = document.querySelectorAll("li");
var oBox = document.querySelectorAll(".b1");
for (var i = 0; i < oLis.length; i++) {
oLis[i].onclick = function () {
for (var j = 0; j < oLis.length; j++) {
if (oLis[j] == this) {
oLis[j].className = "act";
oBox[j].className = "b2";
} else {
oLis[j].className = "";
oBox[j].className = "b1";
}
}
}
}

## 定义对象的 3 中方法

1、构造函数法：
使用 new 操作符调用构造函数，可以造一个实例对象
var objName = new funName(参数);
objName:实例化对象的标识符
funName:构造函数的名称
参数：实例化对象的配置参数列表
2、对象直接量：
可以使用对象直接量快速的定义对象，也是最高效，最简洁的方法，每一个键值对使用逗号隔开
3、使用 Object.create 方法
用来定义一个实例对象，这个方法可以指定对象的原型和对象的特性
Object.create(prototype,description)
prototype:指定对象原型，可以是 null
description：可选参数，用来描述包含数据特性和访问器特性
value：值
writable：默认 false，设置属性值是否可以书写
enumerate：设置属性是否可以被枚举(for/in)
configurable：是否能修改或删除
访问器：包含两个方法 get 和 set

## 引用类型值的特点和基本类型值的特点

基本类型值特点:
1、基本类型值不可变(除非赋值后直接替换新值)
2、不能给基本类型值设置自定义的方法和属性
3、基本类型值的比较是值和值的比较
4、基本类型值的变量存储在栈区
引用类型值特点:
1、引用类型值是可变的，可以给引用类型值设置属性和方法
2、引用类型值是同时保存在堆区和栈区
3、引用类型值的比较是地址的比较

## 如何定义数组

1、使用 new 运算符调用 Array 函数来定义一个新的数组 var arr = new Array()
2、数组直接量:var arr = []
3、多维数组:通过数组的嵌套来定义多维数组
4、空位数组:数组中包含空元素
5、关联数组:数组的下标值超出范围时，会定义为字符串，并生成一个关联数组
6、伪类数组:类似数组结构的对象

## 数组的栈操作是什么，并说出返回值

push():把一个或多个参数加到数组的尾部，并返回数组的长度
pop():删除数组中最后一个元素，并返回删除的值
栈是先进后出，后进先出的

## 对象属性的操作 两个

///////////////////////对象属性操作////////////////////////
0、对象属性直接量定义：
属性名和属性值之间使用冒号间隔，多个属性之间使用逗号间隔，一个对象中属性不能重复
1、点语法 arr.p=2
2、中括号[书写字符串类型的属性名] arr["p"]=2
3、Object.defineProperty(obj,pro,{})
obj:设置的对象
pro:设置的属性名
{}:书写属性的特性
使用 Object.defineProperty 函数可以为对象添加属性或者修改
4、Object.defineProperties(obj,description)
obj:被设置的对象
description:设置的属性的一个集合

## 删除对象的属性

delete 运算符可以删除属性,直接移除，并不是 undefined
///////////////////////读取对象属性////////////////////////
1、点语法
2、中括号
3、Object.getOwnPropertyNames();
返回对象的私有属性名称，返回的是一个数组
4、Object.keys();
仅能获取可枚举的私有属性，返回一个数组
5、Object.getOwnPropertyDescriptor();
获取对象属性的描述符
///////////////////////删除对象属性////////////////////////
1、delete 运算符可以删除属性
///////////////////////控制对象状态////////////////////////
1、Object.PreventExtensions():阻止为对象添加新的属性
2、Object.seal():阻止为对象添加新的属性和删除旧的属性
3、Object.freeze():阻止为对象进行添加修改和删除的属性
4、Object.isExtensible():检测对象是否可以被添加新属性
5、Object.isSealed():检测对象是否使用了 seal 方法
6、Object.isFrozen():检测对象是否使用了 freeze 方法

## 说出 sort 排序原理 及如何降序或升序

1、不传参数会把每一个值转换成 string 类型，然后按照 ascII 码的顺序破排序
2、必须传入两个值，第一个值 a 为后面一个值，第二个值 b 为前面一个值，两个值做比较
如果返回结果为正则不交换，如果返回结果为负就交换

## splice 方法的作用

1、不传参数，不执行操作
2、传一个参数，代表删除数组位置的下标以后的所有元素
3、传两个参数，第一个就代表下标从多少开始，第二代表个数
4、传三个参数或多个，则第三个参数及后面的参数都是插入的元素，在第一个参数的位置插入
5、当第一个参数为负的时候，从右边开始数(起始值为##1)

## slice 方法的使用

1、不传参，无影响
2、不会影响到原来的数组
3、传一个参，从下标多少开始截取到末尾
4、穿两个参，从下标多少开始，到结束的下标(不可取)
5、如果为负，也是从右边开始向左边找

## 添加元素

push():在数组的末尾添加一个或多个元素
unshift():在数组的第一位插入
concat():按顺序依次插入到数组末尾，不会修改原来数组
splice():可以在指定位置的下标处添加元素

## 删除元素

pop():在数组的末尾删除元素
shift():在数组的开头删除元素
length:也可以删除数组
splice():传入一个参，代表从下标为几开始，直到末尾
传入两个参，代表从下标为几开始，总共删几个

## 两种删除元素的区别

delete:删除的元素不会改变原来数组的长度，但是删除的元素会变成空，使用 for\in 会跳过 undefined，只能一次删除一个
splice:数组长度发生改变，此时就可以用 for 去遍历得到，可以一次删除多个且可以替换和新增元素

## 两个截取的区别

splice():能对数组元素删除、插入、替换操作、返回值为被删除的值，第一个参数为
第一项位置,第二个参数为要删除几个,会改变原数组
slice():从数组中返回选定的元素，但是不包含 end 元素，且不会修改原数组，[可以在
字符串中使用]

## .和[]的区别

.:
对象名+.+添加的属性或者修改的属性=属性值
[]:
对象名+[里面书写字符串类型的属性名]=属性值

## toString 和 join 的区别

toString:
把数组中的每一个值都转换成字符串，然后逗号连接显示
join:
可以将数组转换成字符串，不过 join 可以指定间隔符

## some every filter reduce forEach map 遍历

some:
一真即真，遍历条件中只要有一个满足条件，则停止执行，如果一直没有就返回 false
every:
一假即假，如果有一个值返回 false，则停止执行，every 直接返回 false
filter:
返回数组中满足条件的元素组成一个新的数组返回出来，不会对空位元素迭代、
reduce:
四个参数，返回的是累加的结果，并且此返回值在下一个调用该回调函数时传入
forEach:
forEach 不会迭代空位数组，没有返回值
map:
map 不会迭代空位数组，但是有返回值，返回一个数组

## 计时器的使用及清除

setTimeout（function(){}）、clearTimeout
setInterval、clearInterval

## 碰壁反弹 无缝轮播 日历

## 12 个属性 offset client scroll

offsetWidth(获取宽度、content+padding+border)
offsetHeight(获取高度、content+padding+border)
offsetTop(获取当前元素到最近定位父级的 Y 轴偏移量)
offsetLeft(获取当前元素到最近定位父级的 X 轴偏移量)
clientWidth(获取当前元素宽度、content+padding)
clientHeight(获取当前元素高度、content+padding)
clientTop(获取上面边框的大小)
clientLeft(获取左边的边框大小)
scrollWidth(获取元素的滚动宽度，包括 padding)
scrollHeight(获取元素的滚动高度，包括 padding)
scrollTop(滚动条已经滚过的距离)
scrollLeft(滚动条已经滚过的距离)

## 获取窗口大小 获取文档大小 获取滚动条位置 设置滚动条 （兼容）

document.documentElement.clientHeight||document.body.clientHeight
document.documentElement.clientWidth||document.body.clientWidth
document.documentElement.offsetHeight||document.body.offsetHeight
document.documentElement.offsetWidth||document.body.offsetWidth
获取滚动条的位置：
1、scrollLeft、scrollTop
2、document.documentElement.scrollTop：可获取可设置
3、window.pageYOffset:可获取不可设置
设置滚动条：
1、window.scrollTo(x,y)||document.documentElement.scrollTop||document.body.scrollTop

## offsetParent

获取一个元素最近定位的父级

## BOM 对象 打开窗口 和关闭窗口 和检测是否关闭

BOM 对象：
浏览器对象模型
打开窗口：
window.open()可以打开一个新的窗口，url 可选字符串，新页面的地址
name：可选字符串，声明新窗口的名称，如果是已存在的就直接跳到已存在的窗口
features：可选字符串，声明了新窗口的特征 width、height 等
关闭窗口：
window.close():可以关闭窗口，open 的返回值可以调用 close 方法
使用窗口名.closed 可以检测是否关闭

## 三种弹窗

alert：确定提示框
prompt：可输入提示框，两个按钮和一个输入框，点击确定返回用户输入的值，否则返回 false
confirm：选择提示框，两个按钮，点击确定返回 true 否则返回 false

## 获取浏览器识别码

window.navigator.userAgent

## 重定向和刷新

location.assign("http://baidu.com"):重定向
location.reload("http://baidu.com"):刷新
location.replace():替换当前网页

## 历史记录退回

history.back():在历史记录中返回
history.forward()：在历史记录中前进
history.go()可以输入数字，代表哪一个历史记录比如 1 前进一页，##2 后退两页

## DOM 是什么

document、Object、Model
文档对象模型

## 节点类型

document 根节点\文档节点
Element 元素节点
Attr 属性节点
comment 注释节点
Text 文本节点
documentFragment 文档片段节点

## nodeName nodeValue nodeType 分别是什么

nodeName：节点名称
nodeValue：节点值
nodeType：节点类型

## 书写一个获取上一个兄弟节点的兼容

function (ele) {
if (ele.previousElementSibling){
return ele.previousElementSibling;
}else{
return ele.previousSibling;
}
};

## firstChild 和 firstElementChild 的区别

firstChild:获取第一个子节点
firstElementChild：获取第一个子元素节点

## 一些列 添加 删除 克隆 替换 插入等操作

appendChild()：添加
removeChild()：删除
cloneNOde()：克隆
replaceChild()：替换
insertBefore(new1,olis[1])

## 属性的操作 自定义的

getAttribute:获取属性
setAttribute：设置属性
dataset.m="1";
delete dataset.m;

## 文档片段怎么使用

documentFragment;
先把需要插入的数据依次插到文档碎片中，最后将文档碎片的内容一次性插入到文档树中显示出来

## DOM

文档对象模型（document\object\model）

## innerHTML outerHTML innerText outerText

innerHTML:返回调用元素所有包含的子节点及对应的 HTML 字符串，可以传入 HTML 字符串，
创建 DOM 节点
outerHTML：会设置元素自身
innerText：在指定的元素中插入文本，如果包含 HTML 字符串。将会当成编码显示，只能获取到
文本内容
outerText：会包含设置的元素本身

## 新的 h5 获取标签的写法 及和之前的区别

document.querySelector
document.querySelectorALL 和 document.getElementsByClassName 的区别就是前者为静态
后者为动态，前者可以使用 css 选择器规范去获取元素

## classList 对象是什么 方法有哪些

html5 为每一个元素新增了一个 classList 对象，classList 对象保证着控制当前元素类名的各个
方法和属性
length：返回类名的个数
add：在原有的类名的基础上添加一个类名
remove：在原有的类名基础上，移出某一个类名
toggle：如果有这个类名。则删除这个类名。如果没有 则添加进去
item：根据索引 获取类名
contains：判断元素是否包含某一个类名

## Math 对象 方法

是 js 内置对象
只读属性：
PI：圆周率
E：自然底数
LN2:2 的自然对数
SQRT2:2 的平方根
Math 对象的方法：
abs()：绝对值，非纯数字的字符串转成 NaN
ceil()：向上取整，向大数取整
floor()：向下取整，向小数取整
round()：四舍五入，负数：小数点后大于 5 整数部分##1，小于 5 整数部分不变，等于 5，如果
小数点后面有一位，则减一，如果没有后一位则不变
max()、min()、：求一组数中的最大值和最小值
pow()：两个参数，第一个参数是底数，第二个参数是幂
sin、cos、tan：求一个角度的正弦、余弦、正切，接受的参数必须是弧度
sqrt()：求一个值的平方根
random()：生成一个[0,1)之间的随机数

## 生成一个随机数

Math.random()*(max-min)+min

## 设置一个未来的时间

var dat = new Date(2020-1-1 00:00:00);

## 设置一个 7 天以后的时间

dat.setDate(dat.getDate()+7) 1.获取时间戳
getTime();
Date.now();
var timer = new Date().valueOf();
将时间对象转换成数字类型
var timer = +new Date();
var timer = Number(new Date());
parseInt 不能转换

2. 获得代码运行时间
   console.time("name");参数代表需计时的名称
   console.timeEnd("name");结束时自动计算差值 3.字符串合并的方法
   concat():在原来的字符串后面拼接上，没有长度限制
   也可以使用数组，然后再用 join 方法 + 4.字符串查找的方法
   charAt(n):返回字符串中下标为 n 的字符
   indexOf():根据参数字符串，返回查找字符串中出现的下标，找不到返回-1，第二个参数为查找的
   起始位置
   lastIndexOf():最后出现的位置
   search():能传入正则表达式，返回第一次出现的位置
   match():能找出所有的匹配字符串，以数组的形式返回出来，没有就返回 null 
   5.字符串截取的方法
   slice(a,b):
   一个参数的时候，从 a 下标开始截取到末尾，两个参数的时候，第二个参数代表结束的
   下标(不可取),会将传入的负数与字符串的长度相加，然后再运算
   substr(a,b):
   第一个参数为负数的时候，也是与字符串相加，如果第二个参数为负数的时候，
   就会默认截取的长度为 0，使用会返回空字符串
   substring(a,b):
   会接受所有的负数，然后全部转为 0，然后再比较两个数的大小，从小的一方当做开始的位置 
   6.字符串对象互相转换
   字符串转对象：
   var str ="http://www.baidu.com?username=xiaowang&password=12345&sex=nv&age=19&on=yes";
   var s = {};
   str.split("?")[1].split("&").foreach(function(item){
   s[item.split("=")[0]]=item.split("=")[1];
   })
   对象转字符串：
   var url = "http://www.baidu.com";
   var userData = {username:"xiaowang",password:"12345",sex:"nv",age:19,on:"yes"};
   var arr=[];
   for(var i in userData){
   arr.push(i+"="+userData[i]);
   }
   url+"?"+arr.join("&");

## window 的几个事件

onload
页面加载完毕之后执行
onunload
页面被超链接跳转走，或者关闭窗口时触发
onscroll
页面滚动时触发
onresize
改变窗口时触发
beforeunload：
页面被超链接跳转走，或者关闭窗口时触发，会弹出一个选择框，在 ie 支持
oninput:
输入框改变时触发
onkeypress：
键盘按下并弹起触发

## 节流函数

节流函数优化高频率执行 JS 的一种手段，一般可以定义一个开关来控制 js 执行的频率

## 懒加载思想

就是当用户想看页面某个区域的时候，再去加载，可以减轻服务器的压力，也加快了页面的
呈现速度。核心就在于，先把 src 地址给自定义的属性，当需要加载的时候再给 src

## 事件流是什么

多个节点对象对同一个事件的响应顺序：
1、冒泡型：
从里向外
2、捕获型：
从外向里
3、混合型
先执行捕获阶段，到目标阶段，再执行冒泡阶段

## DOM0 和 DOM2 绑定事件的区别

DOM0：
绑定的事件流是冒泡、不允许给同一个元素绑定多个事件，否则会覆盖
DOM2：
可以调用 addEventListener 方法，可以为元素设置同一个事件多次，可以选择事件发生在捕获
还是在冒泡

## DOM2 绑定事件的使用

addEventListener：
第一个参数(type)：注册对象的类型名称
第二个参数(listener)：监听函数
第三个参数(useCapture)：是一个布尔值，true 为发生在捕获，反之为冒泡阶段，默认为 false】
var oBox.addEventListener('click',function(){
alert(1);
},true)

## 销毁事件

DOM0：
直接给事件赋值 null，覆盖原有的事件
DOM2：
必须保证绑定的函数和移除的函数是同一个函数，使用 removeEventListener 方法

## DOMContentLoaded 事件和 window.onload 事件的区别

DOMContentLoaded 事件：
当所有的节点都加载完毕以后就执行，onDOMContentLoaded 事件是 DOM2 的事件，只能通过
addEventListener 绑定
window.onload 事件:
当所有的节点以及资源全部加载完毕之后再执行，如果使用 DOM0，则 window 只能被绑定一次

## event 事件对象的常用属性

target:返回事件源节点’
preventDefault():阻止默认事件、
stopPropagation():阻止传播，阻止事件在捕获阶段、目标阶段、冒泡阶段进行进一步的传播
type:判断事件类型
cancelable:返回布尔值，判断当前的事件发生有没有取消默认事件，如果取消则返回 false
bubbles:返回布尔值，判断是否属于冒泡类型

## event 事件对象怎么获取

var e = e || window.event;

## 阻止默认事件兼容

e.preventDefault?e.preventDefault():e.returnValue=false;

## 阻止传播兼容

e.stopPropagation?e.stopPropagation():e.cancelBubble = true;

## 事件委托是什么 优点是什么 原理是什么

事件委托:
也被称为事件代理和事件托管、就是把一个元素的事件，委托到祖先元素
优点：
提高了 js 性能、减少内存的占用，提高事件的处理速度、动态绑定事件
事件委托的原理：
冒泡原理、把事件加到父元素或祖先元素上，触发执行效果
