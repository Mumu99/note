# Vue

## Vue基础

```html
<body>
  <div id="app">
    <!-- v-model='msg' 表达式 表示双向数据绑定的指定 -->
    <input type="text" v-model='msg'>
    <!-- {{msg}}插值语法 -->
    <p>{{msg}}</p>
  </div>
  <script type="text/javascript">
    // 体验Vue的双向数据绑定
    /*
      需求:
        在文本框中输入的东西, p标签内就显示
    */
    // 实例化对象
    const vm = new Vue({
      el: '#app',
      data: {
        msg: '猪妈妈'
      }
    })
    /*
      Vue中的双标签中间显示的内容如果是动态的, 就使用插值语法: {{表达式}}
      表单标签要显示内容, 或获取输入的内容, 使用双向数据绑定的指令: v-model= '表达式'
      Vue中的标签中使用了属性和值的写法, 就是键值对, 但是v-开头的叫指令
      如果在标签中看到了v-开头的东西, 即指令

      data中属性和值是键值对的关系, data中的叫属性, html中用到了叫表达式
      v-model 指令: 双向数据绑定的指令
      双向数据绑定: 数据变化了, 界面也会随之变化, 界面变化了, 数据也会变化

      html中的#app 是容器
      #app内部所有的html内容即为模板
      new Vue({
        el : '#app'--> 根据选择器获取html中对应的容器, 目的: 为了操作容器中模板的内容
        data: {} --> 对象, 相关的数据都会在data中定义, data中的内容一般都是键值对的方式, 里面内容是属性和值的关系
      })
      {{msg}} --> 插值语法, msg叫表达式
      v-model: 首先是一个属性, 但是由于是v-开头, 所以在Vue中叫做指令, v-model:双向数据绑定的指令
      v-model='msg' --> msg为表达式, 这个值是动态的
      差值语法一般用于成对的标签中间, v-model一般用在表单标签中
    */
  </script>
</body>

</html>
```

### 模板语法

```vue
{{msg}}  --> 差值一般用在成对的标签中显示
const vm = new Vue({}) {} <-- 放置配置对象
el 	     <-- 容器
methods  <-- 定义方法
computed <-- 计算属性, 当某个属性的值发生变化的时候, 和其相关的属性的值会自动发生变化
watch    <-- 监听(监听/侦听), 当某个数据的值发生变化, 需要做相关的操作的时候
v-model  <-- 双向数据绑定的指令, 一般用在表单中, 该属性是动态的
v-bind   <-- 强制数据绑定, 
	简写 :属性名='表达式' 一般用在普通标签上
v-on     <-- 事件监听的指令, 
	简写 @事件名='回调函数' 绑定事件的时候使用
v-if     <-- 条件渲染指令 设置标签显示或隐藏 (在DOM树中可能不存在)
v-else   <-- 配合v-if使用 (在DOM树中可能不存在)
v-else-if <-- 配合v-if使用 (在DOM树中可能不存在)
v-show   <-- 条件渲染指令 设置标签显示或隐藏 (在DOM树中一直存在)
v-for    <-- 用来遍历数组或对象
	数组:
		(item,index) in 数组名字 item --> 数组中的每一项数据, index索引
		item in 数组名字
	对象:
		(value,key,index) in 对象名字
			key   <-- 对象中的属性名字
			value <-- 对象中的值
			index <-- 索引
$refs    <-- Vue实例对象的一个属性, 该属性可以获取DOM元素, 进行DOM操作
Vue中元素的样式操作:
    - class方式, 可以使用对象模式, 数组模式, 动态, 静态
    - style方式, 对象模式, 数组模式
.prevent <-- 阻止默认行为跳转
         <a v-on:click.prevent="doThis"></a>
.stop <-- 阻止事件冒泡
         <a v-on:click.stop="doThis"></a>
.enter <-- 只要按下了回车就会触发该事件的回调函数
.13 同上
    	 <input v-on:keyup.13="submit">
v-html <-- 相当于DOM中的innerHTML
     <p v-html='content'>{{content}}</p>
v-text <-- 相当于DOM中innerText/textContent --> 和插值语法结果一样
	<p v-text='content'>{{content}}</p>
```

## 脚手架

```js
/**
 *  安装脚手架命令  脚手架2的命令
 *  npm install -g vue-cli
 *  下载模版命令
 *  vue init webpack my-project
 * 
 *  npm run dev 运行项目命令---不会自动打开浏览器
 *  npm run build 打包 产生dist目录
 *  serve dist 运行打包文件
 * 
 *  npm start 可以直接运行,此时不会自动打开浏览器
 *  如果你用的是yarn 下载的,那么运行项目的时候  yarn 是不需要写run的
 * 
 *  在config目录中的index.js文件中的第18行代码:autoOpenBrowser: true 修改为true,自动打开浏览器
 *  在build目录中的webpack.base.conf.js文件中第25行: app: './src/main.js' 是整个项目的入口文件
 * node_modules 依赖包目录
 * eslint检查的问题
 * build目录是webpack的相关的设置
 * config目录配置文件,里面的index.js中可以设置是否让浏览器自动打开
 * dist目录---打包后的目录文件
 * node-modules--依赖包---相关的文件
 * static---存放的是静态资源,css样式,图片,字体
 * babelrc---文件--babel的相关配置----mint-ui中配置
 * .eslintignore---->可以直接用 *.vue 或者*.js 的方式全局的忽略检查
 * .eslintrc.js 文件中 rules---一项一项的配置eslint的相关检查----看我操作
 * index.html----项目主入口html文件
 * package.json配置文件
 * src目录
 * main.js程序的主入口的js文件
 * App.vue父级组件文件
 * assets目录---图片---直接干掉----不用
 * components目录-------里面放的都是组件文件(.vue后缀的文件,叫组件文件)
 * 组件:html+css+js----形成的一个.vue文件---组件
 * 组件:具有一定功能效果的集合,里面包含html+css+js
 * 抽取了多个的组件,就形成了组件化
 * 源码的分析:
 * 
 * 
 * scoped:有可能会影响父子级组件之间的样式
 */

```

### 组件通信问题

#### 父子通信利用props

```vue
<List :todos="todos" :toggleTodo="toggleTodo" />
props: ['todos', 'toggleTodo'] <-- 通过数组接收
props: {
   todos: Array,
   toogleTodo: Function
} <--- 通过对象
```

#### 可以通过@事件名来传递,利用$emit

```vue
<Header @addTodo="addTodo" />
this.$emit('addTodo', todo) <-- 用$emit去接收传来的数据
```

#### 通过消息订阅和发布pubsub(不属于Vue)

```vue
yarn add pubsub-js
import PubSub from 'pubsub-js'
然后在mounted里面
PubSub.subscribe('delTodo', (msg, data) => {
  // 删除数据
  this.delTodo(data)
}) <-- 发送
PubSub.publish('delTodo', this.index) <-- 接收
```

0.Vue的理解
  Vue是渐进式的JavaScript框架
  数据绑定,模版解析,组件化,虚拟DOM
1.Vue中的常见指令
 v-if(v-else,v-else-if),v-show,v-for,v-model,v-on,v-bind,v-text,v-html
2.Vue中组件之间通信的方式理解
 props,自定义事件,事件总线,插槽,Vuex,PubSub
3.Vue中如何发送异步请求
 vue-source,axios
4.Vue中路由的理解
 路由的解释,router-link(router-view),声明式路由,编程式路由,路由传参
5.Vuex的理解
 state,mutations,actions,getters
 组件内部修改状态数据的流程
 组件内部如何获取状态数据
6.数据代理的理解
   能够说出数据代理的原理
7.模版解析的理解(事件指令,普通指令)
 能够说出模版解析是怎么回事,事件指令和普通指令及插值是如何解析的