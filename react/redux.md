## redux 的API

### 先初始化项目

```bash
create-react-app redux
```

### 然后下载redux

```bash
yarn add redux
```

### `index.js`文件

```js
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import store from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))
```

* `Provider`是实时更新和当哪个需要store时, 自动给

### `App.jsx`文件

```js
import React, { Component, Fragment } from 'react'

// 引入count
import CountContainer from './containers/Count'
// 引入Dog
import DogContainer from './containers/Dog'
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <CountContainer />
        <br />
        <hr />
        <br />
        <DogContainer />
      </Fragment >
    )
  }
}
```

* `App`里面渲染的是容器组件

### 新建`redux`文件夹

1. 然后再新建: `actions.js`文件夹

   1. Count.js

      ```js
      /*
        专门为Count组件创建对象的
      */
      
      // 引入防止写错的js
      import { PLUS, REDUCE } from '../action.types';
      export const createPlusAction = value => ({ type: PLUS, data: value });
      export const createReduceAction = value => ({ type: REDUCE, data: value });
      
      export const createPlusAsyncAction = (value, time) => {
        return (dispatch) => {
          setTimeout(() => {
            dispatch(createPlusAction(value))
          }, time)
        }
      }
      ```

   2. Dog.js

      ```js
      /*
        专门为Dog组件创建对象的
      */
      
      // 引入防止写错的js
      import { ADDDOG } from '../action.types';
      export const createDogAction = dogObj => ({ type: ADDDOG, data: dogObj });
      ```

2. 新建: `reducers.js`文件夹

   1. `Count.js`文件

      ```js
      /*
        工作函数
      */
      // 引入防止写错的js
      import { PLUS, REDUCE } from '../action.types';
      /**
       * @param preState = 0 形参默认值
       * @param action 接受到的是一个对象
       */
      export default (preState = 0, action) => {
        const { type, data } = action;
        let newState = null; // 定义一个新的变量, 用于返回值
        switch (type) {
          case PLUS:
            newState = preState + data
            return newState;  // 放回 加
          case REDUCE:
            newState = preState - data
            return newState;  // 返回 减
          default:
            return preState;  // 当既不是 加 也不是 减 , 就返回默认值
        }
      }
      ```

   2. `Dog.js`文件

      ```js
      /*
        工作函数
      */
      // 引入防止写错的js
      import { ADDDOG } from '../action.types';
      /**
       * @param preState = 0 形参默认值
       * @param action 接受到的是一个对象
       */
      export default (preState = [{ name: '拉布拉多', age: 3 }], action) => {
        const { type, data } = action;
        let newState = null; // 定义一个新的变量, 用于返回值
        switch (type) {
          case ADDDOG:
            newState = [data, ...preState]
            console.log(newState);
            return newState
      
          default:
            return preState
        }
      }
      ```

   3. `index.js`文件

      ```js
      import CountReduer from './Count';
      import DogReduer from './Dog';
      
      import { combineReducers } from 'redux'
      export default combineReducers({
        number: CountReduer,
        dogs: DogReduer
      })
      ```

3. 新建: `store.js`文件

   ```js
   import { createStore, applyMiddleware } from 'redux'
   import thunk from 'redux-thunk'
   import reduce from './reducers'
   import { composeWithDevTools } from 'redux-devtools-extension'
   
   // 每次定义的时候都需要传入一个reducer
   export default createStore(reduce, composeWithDevTools(applyMiddleware(thunk)))
   ```

4. 新建: `action.types`文件

   ```js
   /*
     定义经常要使用的变量, 反正写错, 一般都为常量
   */
   export const PLUS = 'plus';
   export const REDUCE = 'reduce';
   export const ADDDOG = 'add_dog';
   ```

### 新建`containers`文件

1. `Count.js`

   ```js
   /*
     容器组件
   */
   import React, { Component, Fragment } from 'react'
   // 引入react-redux
   import { connect } from 'react-redux';
   // 引入create_acion
   import { createPlusAction as cpa, createReduceAction as cra, createPlusAsyncAction as cpaa } from '../redux/actions/Count'
   
   
   class Count extends Component {
     optionRef = React.createRef();
     plus = () => {
       const { value } = this.optionRef.current;
       this.props.plus(value * 1)
     }
     reduce = () => {
       const { value } = this.optionRef.current;
       this.props.reduce(value * 1)
     }
     plusIfEven = () => {
       const { value } = this.optionRef.current;
       const count = this.props.number
       if (count % 2 === 0) {
         this.props.plus(value * 1)
       }
     }
     plusAsync = () => {
       const { value } = this.optionRef.current;
       this.props.plusAsync(value * 1, 500);
     }
     render() {
       const { number, dogs } = this.props
       return (
         <Fragment>
           <h2>运算总和为: {number}, 下面兄弟的个数为: {dogs}</h2>
           <select ref={this.optionRef}>
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
           </select>&nbsp;
           <button onClick={this.plus}>+</button>&nbsp;
           <button onClick={this.reduce}>-</button>&nbsp;
           <button onClick={this.plusIfEven}>plus if Even</button>&nbsp;
           <button onClick={this.plusAsync}>plus Async</button>
         </Fragment>
       )
     }
   }
   
   
   export default connect(
     value => ({
       number: value.number,
       dogs: value.dogs.length
     }),
     {
       plus: cpa,
       reduce: cra,
       plusAsync: cpaa
     }
   )(Count)
   ```

2. `Dog.js`

   ```js
   /*
     容器组件
   */
   // 引入react-redux
   import { connect } from 'react-redux';
   // 引入create_acion
   import { createDogAction } from '../redux/actions/Dog'
   
   import React, { Component, Fragment } from 'react'
   
   class Dog extends Component {
   
     addDog = () => {
       const { name, age } = this.refs
       if (!age.value.trim()) {
         alert('年龄不能为空!')
         return;
       } else if (isNaN(age.value.trim())) {
         alert('年龄必须为数字!');
         age.value = ''
         return;
       }
       this.props.AddDog({ name: name.value, age: age.value })
       age.value = ''
       name.value = '拉布拉多'
     }
     render() {
       const { number, dogs } = this.props
       return (
         <Fragment>
           <h2 >狗的总个数为: {dogs.length}, 上面兄弟的和为: {number}</h2>
           <select style={{ width: 100, height: 30 }} ref='name'>
             <option value="拉布拉多">拉布拉多</option>
             <option value="藏獒">藏獒</option>
             <option value="萨摩耶">萨摩耶</option>
             <option value="金毛">金毛</option>
             <option value="牧羊犬">牧羊犬</option>
             <option value="秋田犬">秋田犬</option>
             <option value="二哈">二哈</option>
             <option value="哈士奇">哈士奇</option>
           </select>&nbsp;
           <input type="text" style={{ height: 24 }} placeholder='请输入狗狗的年龄' ref='age' />
           <button onClick={this.addDog}>提交</button>
           <ul>
             {
               this.props.dogs.map((dog, index) => {
                 return <li key={index}>狗狗名称: {dog.name} , 狗狗年龄: {dog.age}</li>
               })
             }
           </ul>
         </Fragment>
       )
     }
   }
   
   
   export default connect(
     value => ({
       dogs: value.dogs,
       number: value.number
     }),
     {
       AddDog: createDogAction
     }
   )(Dog)
   ```

   

### createStore 创建一个store对象

```js
import { createStore } from 'redux'
```

### store.getState() 接受数据

### store.dispatch  通知redux帮我实现

### store.subscribe(()=>{}) 重新渲染

### github库

```js
screenfull 全屏
	import screenfull from 'screenfull'
      fullScreen = () => {
        screenfull.toggle();
      }
nprogress  进度条
dayjs      当前时间
	import dayjs from 'dayjs'
	time: dayjs(Date.now()).format('YYYY年 MM月DD日 HH:mm:ss')
	this.timer = setInterval(() => {
      this.setState({
        time: dayjs(Date.now()).format('YYYY年 MM月DD日 HH:mm:ss')
      })
    }, 1000);
    clearInterval(this.timer)
```

![github库](D:\study\1108_Web\Practice\笔记\images\github库.png)

[jpuri/react-draft-*wysiwyg*](https://github.com/jpuri/react-draft-wysiwyg) //富文本git库