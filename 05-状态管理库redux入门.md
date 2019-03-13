![](https://upload-images.jianshu.io/upload_images/9249356-cfa04372c58ea0d7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](http://www.devio.org/io/githubapp/redux-flow.png)

>Redux设计和使用的三项原则

![](https://upload-images.jianshu.io/upload_images/9249356-b47fdd2e77aae93e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
>**纯函数**：纯函数指的是，给定固定的输入，就一定会有固定的输出，而且不会有任何副作用

所以reducer里不能有异步的操作，也不能有与时间相关的操作
### 核心API
> `createStore`  创建一个Store
   `store.dispatch`  派发action，action会传递给store
   `store.getState` 获取到store里的数据内容
   `store.subscribe`  定位store的改变

- Action： 普通对象，用于描述事件行为，改变State
- Store 
- Reducers： 纯函数，用于对State的业务处理(不能更改State)
- State： React中的状态，是只读对象，不可直接修改

>在使用redux-devtools的时候，注意版本问题，否则会报未知的bug

### 一：创建store，并将reducer引入，加入createStore函数中
```
import { createStore } from 'redux'
import reducer from './reducer'
//创建Store的时候，需要把reducer同时创建
const store = createStore(
    reducer,
    //为了在浏览器端用redux-devtools调试
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    
export default store
```
### 二: 初步使用redux
    1. 监听改变,定义action 并dispatch 
```
handleInputChange(e) { //一：监听改变,定义action 并dispatch 
    const action = {
        type: CHANG_INPUT_VALUE,
        value: e.target.value
    }
    store.dispatch(action)
}
```
    2. 根据action.type更改store的值(state,action传至reducer)
```
export default (state = defaultState, action) => { //二：根据action.type更改store的值
    if (action.type === CHANG_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputVal = action.value
        return newState
    }

    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputVal)
        newState.inputVal = ''
        return newState
    }
    if (action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }

    return state
}
```
    3.store 变化以后，触发事件
```
constructor(props) {
        super(props);
        this.state = store.getState();
        ...
        store.subscribe(this.handleStoreChange) //三：store 变化以后，触发事件
    }

``` 
    4. 事件中处理数据改变
```
handleStoreChange(e) {
        this.setState(store.getState()) //四：事件中处理数据更新
    }
```   

**注意**：reducer 可以接受state ， 但是绝不能更改state

### 三：ActionTypes的拆分
![](https://upload-images.jianshu.io/upload_images/9249356-b63933d1877ca2d7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**为了能快速定位到bug**
```
//为了能快速定位到bug
export const CHANG_INPUT_VALUE = 'chang-input-value'
export const ADD_TODO_ITEM = 'add-todo-item'
export const DELETE_TODO_ITEM = 'delete-todo-item'
```
### 四：使用actionCreator统一创建action
**抽离出action的创建，方便管理,提高代码的可维护性**
```
import { CHANG_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes'
//抽离出action的创建，方便管理,提高代码的可维护性
export const getInputChangeAction = (value) => ({
    type : CHANG_INPUT_VALUE,
    value 
})

export const addTodoItem = () => ({
    type : ADD_TODO_ITEM,
})

export const deleteTodoItem = (index) => ({
    type : DELETE_TODO_ITEM,
    index
})

```