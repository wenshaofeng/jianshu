import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable' //不可修改  生成的immutable对象 不可改变

//转化成immutable对象

const defaultState = fromJS({
    userInputValue: "",
    passwordInputValue: "",
    isLogined: false
})


export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_LOGINED:
            return state.set('isLogined', action.value)
        case actionTypes.LOGINOUT:
            return state.set('isLogined', action.value)
        case actionTypes.USERINPUT:
            return state.set('userInputValue', action.value)
        case actionTypes.PWINPUT:
            return state.set('passwordInputValue', action.value)
        default:
            return state
    }
}