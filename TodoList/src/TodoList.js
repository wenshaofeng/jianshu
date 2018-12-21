import React, { Component } from 'react';
import TodoListUI from './TodoListUI'
import store from './store/index.js'
// import { CHANG_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionTypes'
import { getInputChangeAction, addTodoItem, deleteTodoItem } from './store/actionCreators'
import 'antd/dist/antd.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this)
        this.hangdleBtnClick = this.hangdleBtnClick.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleDeleteItem = this.handleDeleteItem.bind(this)
        store.subscribe(this.handleStoreChange) //三：store 变化以后，触发事件
    }
    handleStoreChange(e) {
        this.setState(store.getState()) //四：事件中处理数据更新
    }
    //处理输入框改变
    handleInputChange(e) { //一：监听改变,定义action 并dispatch 
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }
    //处理点击提交
    hangdleBtnClick(e) {
        const action = addTodoItem()
        store.dispatch(action)
    }
    //处理点击删除
    handleDeleteItem(index, e) {
        const action = deleteTodoItem(index)
        store.dispatch(action)
    }
    render() {
        return (
            <TodoListUI
                inputVal={this.state.inputVal}
                handleInputChange={this.handleInputChange}
                hangdleBtnClick={this.hangdleBtnClick}
                list={this.state.list}
                handleDeleteItem={this.handleDeleteItem}
            />
        );
    }
}

export default TodoList;