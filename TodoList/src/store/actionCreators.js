import axios from 'axios'
import { CHANG_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes'
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
export const getTodoList = () => {
    return (dispatch) => {
        axios.get('/api/todolist.json')
            .then((res) => {
                const data = res.data
                const action = initListAction(data)
                dispatch(action)
            }).catch(() => {
                console.log('err');
            })
    }
}
