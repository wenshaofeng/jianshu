### [react（一）：组件的生命周期](https://www.cnblogs.com/jinzhou/p/9096825.html)

## 生命周期函数
![](https://upload-images.jianshu.io/upload_images/9249356-ea7176534fe68539.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


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

**render**
render函数是一个纯函数，他并不进行实际上的渲染动作，他只是一个JSX描述的结构，最终是由React来进行渲染过程，render函数中不应该有任何操作，对页面的描述完全取决于this.state和this.props的返回结果，不能在render调用this.setState
>有一个公式总结的非常形象     **UI=render（data）**

**componentDidMount**
componentDidMount函数作用就大得多，由于这一过程通常只能在浏览器端调用，所以我们在这里获取异步数据，而且在componentDidMount调用的时候，组件已经被装载到DOM树上了，还有，可以在这里执行其他库的代码，比如Jquery。在服务端渲染时没有该生命周期
**在这个方法中this.setState会引起组件的重新渲染**

**shouldComponentUpdate(nextProps,nextState)**
  这个方法决定组件是否继续执行更新过程。 
  默认是true，继续更新；false阻止更新。
  一般是通过比较nextPops，nextState和当前组件的props，state来决定返回结果。 
  这个方法可以减少不必要的渲染，优化组件性能。
  >原因：根据渲染流程，首先会判断shouldComponentUpdate是否需要更新。如果需要更新，调用render方法生成新的虚拟DOM与旧的虚拟DOM进行对比(render只是返回一个UI描述)，如果对比不一致，则根据最小粒度改变去更新DOM。