import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable' //不可修改  生成的immutable对象 不可改变

//转化成immutable对象
const defaultState = fromJS({
    focused: false,
    list: [],
    currentPage: 1,
    totalPage: 1,
    mouseEnter: false
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_ON_FOCUS:
            return state.set('focused', true)
        case actionTypes.SEARCH_ON_BLUR:
            return state.set('focused', false)
        case actionTypes.INIT_LIST:
            return state.set('list', action.data).set('totalPage', action.totalPage)
        case actionTypes.ON_MOUSE_ENTER:
            return state.set('mouseEnter', true)
        case actionTypes.ON_MOUSE_LEAVE:
            return state.set('mouseEnter', false)
        case actionTypes.PAGE_CHANGE:
            return state.set('currentPage', action.currentPage)
        default: return state
    }

}