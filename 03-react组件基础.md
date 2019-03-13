## 父子组件传值
父→子
> 父组件通过属性的形式向子组件传递参数
    子组件通过props接受父组件传递过来的参数
**注**：父组件向子组件传递方法的时候，一定要绑定this
   因为子组件调用的是父组件的方法，子组件中并没有定义这个方法
   所以需要绑定this到父组件上

子→父
>子组件通过调用父组件的方法向父组件传递参数

![](https://upload-images.jianshu.io/upload_images/9249356-64ef9700655cd31c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## props，state与render函数的关系
- 当组件的state或者props发生改变时，render函数就会重新执行（自身）
- 当父组件的render函数执行时，它的子组件的render都将被重新执行