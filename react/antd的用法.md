# `antd` 用法

* 使用官方脚手架, 先创建项目
* 安装

```bash
create-react-app 01.react_antd
```

### 第二步,打开`antd`网站查看 `<https://ant.design/docs/react/introduce-cn>`

* ```
  yarn add antd
  ```

### 第三步, 选择取消的组件, 然后复制代码

```js
import { Drawer, Button } from 'antd';

class App extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div className="site-drawer-render-in-current-wrapper">
        Render in this
        <div style={{ marginTop: 16 }}>
          <Button type="primary" onClick={this.showDrawer}>
            Open
          </Button>
        </div>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          getContainer={false}
          style={{ position: 'absolute' }}
        >
          <p>Some contents...</p>
        </Drawer>
      </div>
    );
  }
}
```

```css
.site-drawer-render-in-current-wrapper {
  height: 200px;
  overflow: hidden;
  position: relative;
  border: 1px solid #ebedf0;
  border-radius: 2px;
  padding: 48px;
  text-align: center;
  background: #fafafa;
}
```

### 第四步, 在问文档选中`create-react-app`

* ```bash
  yarn create react-app antd-demo
  yarn add antd
  ```

* 引入css文件

* ```
  import 'antd/dist/antd.css';
  ```

### 第五步, 高级配置

* ```
  yarn add react-app-rewired customize-cra
  ```

* 更改`package.json`文件

```json
/* package.json */
"scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test",
+   "test": "react-app-rewired test",
}
```

* 然后在项目根目录创建一个 `config-overrides.js` 用于修改默认配置。

```
module.exports = function override(config, env) {
  // do stuff with the webpack config...
  return config;
};
```

### 第七步, 使用`babel-plugin-import`

> 注意：`antd` 默认支持基于 `ES module` 的 `tree shaking`，`js` 代码部分不使用这个插件也会有按需加载的效果。

* [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 是一个用于按需加载组件代码和样式的 babel 插件（[原理](https://ant.design/docs/react/getting-started-cn#%E6%8C%89%E9%9C%80%E5%8A%A0%E8%BD%BD)），现在我们尝试安装它并修改 `config-overrides.js` 文件。

```
yarn add babel-plugin-import
```

```js
+ const { override, fixBabelImports } = require('customize-cra');

- module.exports = function override(config, env) {
-   // do stuff with the webpack config...
-   return config;
- };
+ module.exports = override(
+   fixBabelImports('import', {
+     libraryName: 'antd',
+     libraryDirectory: 'es',
+     style: 'css',
+   }),
+ );
```

* 然后移除前面在 `src/App.css` 里全量添加的 `@import '~antd/dist/antd.css';`

* 最后重启 `yarn start` 访问页面，`antd` 组件的 `js` 和 `css` 代码都会按需加载

