## 开发环境搭建
报错
```
PS C:\Users\lijiawei\Desktop> npx create-react-app my-app
npm ERR! code ENOLOCAL
npm ERR! Could not install from "Files\nodejs\node_cache\_npx\68292" as it does not contain a package.json file.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Program Files\nodejs\node_cache\_logs\2018-12-17T07_15_39_571Z-debug.log
```
#### 解决方法
```
npm install -g create-react-app 
create-react-app myApp
```
## React中组件的语法
**函数式组件和类组件**
- 函数式
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
- 类组件
```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
两种写法
![](https://upload-images.jianshu.io/upload_images/9249356-9f7dd88246af09c2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### JSX语法
![](https://upload-images.jianshu.io/upload_images/9249356-2a0953123dab1bb4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
自定义的组件开头要大写

#### 代码优化
1、在构造函数中做好this指向的改变
下面就不用.bind(this)
可以改变代码的执行性能
![](https://upload-images.jianshu.io/upload_images/9249356-2efa0c1e22a62910.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

2、解决render函数中代码过长
![](https://img.mukewang.com/5b61d72e0001bf2c05000343.jpg)

#### Fragment（片段）
![](https://upload-images.jianshu.io/upload_images/9249356-faf44b1235278647.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](https://upload-images.jianshu.io/upload_images/9249356-c244e66e67caf919.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### react 的特点
![](https://upload-images.jianshu.io/upload_images/9249356-3055cf0996b1a63d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## JSX语法
从本质上讲，JSX 只是为 React.createElement(component, props, ...children) 函数提供的语法糖。JSX代码:

```
<MyButton color="blue" shadowSize={2}>
  Click Me
</MyButton>
```
编译为：
```
React.createElement(
  MyButton,
  {color: 'blue', shadowSize: 2},
  'Click Me'
)
```
* 组件写样式，不要直接用class，会和es6关键字同名，得用 `className`
* 组件属性：`dangerousSetInnerHTML` 危险的转换html
![](https://upload-images.jianshu.io/upload_images/9249356-8453b3041a837ff0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




### JSX是进步还是倒退

在HTML中的 `onclick` 缺点
- onclick添加的事件处理函数是在全局环境下执行的，污染了全局环境
- 如果给多个DOM元素添加 click 事件，会影响网页性能，因为网页需要的事件处理函数越多，性能就会降低
- 使用 click 的DOM元素，如果需要动态的删除，需要注销 时间处理器，否则可能造成内存泄露

而 React 中的 onClick ，是使用了**事件委托**的方式处理点击事件，无论有多少个onClick出现， 其实最后都只在DOM树上添加了一个事件处理函数， 挂在最顶层的DOM节点上。 所有的点击事件都被这个事件处理函数捕获， 然后根据具体组件分配给特定函数。