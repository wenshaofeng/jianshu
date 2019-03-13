**第一种渲染**
```html
  1. state 数据
  2. JSX 模板
  3. 数据 + 模板 结合 ， 生成真实的DOM，来显示
  4. state 发生改变
  5. 数据 + 模板 结合 ， 生成真实的DOM，替换原始的DOM

缺陷：
第一次生成了一个完整的DOM片段
第二次生成了一个完整的DOM片段
第二次的DOM替换第一次的DOM，非常耗性能


```
**第二种渲染**
```
  1. state 数据
  2. JSX 模板
  3. 数据 + 模板 结合 ， 生成真实的DOM，来显示
  4. state 发生改变
*****************************
  5. 数据 + 模板 结合 ， 生成真实的DOM，并不直接替换原始的DOM
  6. 新的DOM(DoucumentFragment(文档碎片)) 和原始的DOM 做比对， 找差异
  7. 找出input 框发生了变化
  8. 只用新的DOM 中的input元素，替换掉老的DOM中的input元素

注：DoucumentFragment(文档碎片)：还在内存里，还没有挂载到页面

缺陷:
性能的提升并不明显
```

**第三种渲染**
```html
  1. state 数据
  2. JSX 模板
  3. 数据 + 模板 结合 ， 生成真实的DOM，来显示
<div id='abc'> <span> hello world </span> </div>
**********************
  4. 生成虚拟DOM（虚拟DOM就是一个JS对象，用它来描述真实DOM）(损耗了性能)
['div',{id:'abc},['span',{},'hello world']]
  5. state 发生变化
  6. 数据+ 模板生成新的虚拟DOM (极大的提升了性能)
['div',{id:'abc},['span',{},'bye bye']]
  7. 比较原始虚拟DOM 和新的虚拟DOM的区别，找到区别是span中内容 (极大的提升了性能)
  8. 直接操作DOM ， 改变span中的内容
```
>损耗比较：JS创建一个JS对象，远比JS创建一个DOM元素损耗要小，因为JS创建DOM的时候需要调用web application级别的一个api

>引入虚拟DOM能提高性能原理：减少了真实DOM 的创建和JS DOM的对比，而是去创建JS对象和对比JS对象
  
实际上：

```html
  1. state 数据
  2. JSX 模板
  3. 数据 + 模板 , 生成虚拟DOM（虚拟DOM就是一个JS对象，用它来描述真实DOM）(损耗了性能)
  ['div',{id:'abc},['span',{},'hello world']]
  4. 用虚拟DOM的结构生成真实的DOM ， 来显示
<div id='abc'> <span> hello world </span> </div>
  5. state 发生变化
  6. 数据+ 模板 生成新的虚拟DOM  (极大的提升了性能)
['div',{id:'abc},['span',{},'bye bye']]
  7. 比较原始虚拟DOM 和新的虚拟DOM的区别，找到区别是span中内容 (极大的提升了性能)
  8. 直接操作DOM ， 改变span中的内容

优点：
1.性能提升了
2. 它使得跨端应用得以实现。React Native
```     
>render函数中：JSX →  createElement →  虚拟 DOM（JS 对象）→ 真实的 DOM


## 虚拟DOM的diff算法

![](https://upload-images.jianshu.io/upload_images/9249356-38ddf24638c2d696.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- setState是个异步函数，是为了提高react底层性能
>React中如果在短时间内(例如一个函数体里)连续执行了三次setState操作，React会把三次setState合并成一次setState，只进行一次虚拟DOM的diff比对，最后只更新一次DOM。


![](https://upload-images.jianshu.io/upload_images/9249356-2e9591154b9c1aa6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 同层比对
>* React的diff算法核心：同级比较，一比较一层，有差异整体替换。diff算从虚拟DOM树的根节点进行比较，如果根节点就存在差异，就不会再比较下层节点，则会把原虚拟DOM该层节点下的DOM全部删除，用新的虚拟DOM重新生成一遍页面上绑定的虚拟DOM，再用页面绑定的虚拟DOM重新生成页面上的真实DOM。
>* diff算法，同层比对，算法简单，则比对速度很快。所以虽然会浪费DOM渲染的性能，但是它可以大大减少了两个虚拟DOM比对上花费的性能消耗。

![](https://upload-images.jianshu.io/upload_images/9249356-c7d0e0660802b74c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- key值的作用
>* 例子：一个虚拟DOM上的数组结构做循环，渲染到了页面上。在没有key值时，数据发生变化后，diff算法没法确定新虚拟DOM和原虚拟DOM元素间的关系，好比新的a变了，对应老的a到底是数组中的哪个元素呢？diff算法只能写双循环遍历确定，这样就会造成很大的性能开销。而假如，在对虚拟DOM数组做循环时给每个最外层父节点设置key值取名字后，新a变化后立马就能抓到对应老a来对比，好的，你变化，那么把a这个节点树整颗替换即可，再例如数组push了新元素z，diff算法一看key，原来没它，就生成新DOM树即可。
>* 实例：循环是用index做key值。例如`['a','b', 'c']`，循环拿index做key值，当我们删除a时，新数组对应的就是 `['b':0, 'c': 1]`，好的diff算法一上来看到key值，怎么“全变了”，好吧，没办法，只能去重新这棵节点数！而当我们用稳定的唯一值做key值时，删除a元素后，diff算法比较后只会把dom树上的a节点删除，节省了渲染的性能。
