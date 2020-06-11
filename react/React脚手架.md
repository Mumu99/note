# React脚手架

* 创建

```bash
npm i create-react-app -g
```

* 然后下载依赖

```bash
create-react-app xxx
```

### 创建项目并启动

```bash
npm install -g create-react-app
create-react-app hello-react
cd hello-react
npm start
```

### react脚手架项目结构

```
ReactNews
	|--node_modules---第三方依赖模块文件夹
	|--public
		|-- index.html-----------------主页面
	|--scripts
		|-- build.js-------------------build打包引用配置
	|-- start.js-------------------start运行引用配置
	|--src------------源码文件夹
		|--components-----------------react组件
		|--index.js-------------------应用入口js
	|--.gitignore------git版本管制忽略的配置
	|--package.json----应用包配置文件 
	|--README.md-------应用描述说明的readme文件
```

### 搭建简单的页面

* index.js

```react
/**
 * React 脚手架入手文件
 */

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

* App.jsx

```react
import React, { Component } from "react";

//样式引入
import './App.css'

class App extends Component {
  render() {
    return (<h1 className='color'>hello react cli</h1>);
  }
}
export default App;
```

* App.css

```css
.color {
  font-size: 50px;
  color: hotpink;
  text-align: center;
}
```

