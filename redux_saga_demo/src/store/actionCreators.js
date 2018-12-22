
import { CHANG_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION,GET_INIT_LIST } from './actionTypes'
//抽离出action的创建，方便管理,提高代码的可维护性
export const getInputChangeAction = (value) => ({
    type: CHANG_INPUT_VALUE,
    value
})

export const addTodoItem = () => ({
    type: ADD_TODO_ITEM,
})

export const deleteTodoItem = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

//使用了redux-thunk以后，可以返回函数
export const getInitList = () => ({
        type: GET_INIT_LIST
})
