### 插件

* ```js
  - nprogress(进度条)
  - yarn add nprogress
  import Nprogress from 'nprogress'
  import 'nprogress/nprogress.css'
  Nprogress.start() // 显示进度条
  Nprogress.done() // 隐藏进度条
  ```

  * [git地址,nprogress](https://github.com/rstacruz/nprogress)

* ```js
  - lodash
  - yarn add lodash
  // 引入lodash工具对象
  import throttle from 'lodash/throttle' --> 按需引入
  // 使用节流, 第一个参数回调, 第二个参数, 时间
  // 在 wait 秒内最多执行 func 一次的函数
  _.throttle(func, [wait=0], [options={}])
  showSubCategorys: throttle(function (index) {
    this.currentIndex = index
    console.log(index)
  }, 300)
  ```

  * [lodash(Git)](https://github.com/lodash/lodash)
  * [lodash(中文网)](https://www.lodashjs.com/docs/lodash.throttle)

* ```js
  -mockjs
  - yarn add mockjs
  // 引入
  import Mock from 'mockjs'
  // 使用后
  Mock.mock('/mock/banners', {
    code: 200,
    message: '成功',
    data: banners
  })
  // 在main.js文件中引入
  // 引入mock
  import './mock/mockSerer'
  ```

  [mock官网](http://mockjs.com/)

