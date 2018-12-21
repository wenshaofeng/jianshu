import { CHANG_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes'
const defaultState = {
    inputVal: 'nice',
    list: [1, 2, 3, "科比"]
}
//reducer 可以接受state ， 但是绝不能更改state
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