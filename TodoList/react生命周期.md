## 生命周期函数
![](https://upload-images.jianshu.io/upload_images/9249356-11bc7536235b3a57.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


> 在组件运行的某个时刻，会被自动执行的一些函数。

React生命周期函数的四大阶段：Initialization (初始化)  --> Mounting（挂载）  --> Updation（更新）  -->  Unmonting (剔除)

**挂载**
* `componentWillMount()`：在组件即将被挂载到页面的时刻自动执行
* `render()`：渲染
* `componentDidMount()`：组件刚刚被挂载之后的时刻自动执行

****

**更新**
* `shouldComponentUpdate()`：组件被更新之前，它会自动执行。该函数要求返回boolean值，返回false这不会执行render函数更新组件。所以可以理解这个函数为：是否应该更新组件？
* `componentWillUpdate()`：组件被更新之前，它会自动执行，但它会在 `shouldComponentUpdate()` 之后执行。如果`shouldComponentUpdate()`：返回false就不会有该函数执行了
* `componentDidUpdate()`：组件在被更新完成后，它会自动执行
* `componentWillReceiveProps()`：当一个组件要从父组件接收了参数，且只有父组件的render函数被重新执行了，则子组件的这个生命周期函数就会被执行。如果这个子组件一开始没有，第一次添加到父组件中时，`componentWillReceiveProps()`是不会被执行的！打个自己理解的比方，这个生命周期函数好比，要先有儿子以后，父亲给儿子传递属性才会触发，要是连个父亲都有没，母亲生的儿子，是不可能触发的！！！

****

**剔除**
* `componentWillUnmount`：组件即将要从页面中剔除的时刻，它会自动执行

**shouldComponentUpdate使用**
![](https://upload-images.jianshu.io/upload_images/9249356-9b1886bbaf9f8772.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**一般用`componentDidMount()`来发送ajxa请求**