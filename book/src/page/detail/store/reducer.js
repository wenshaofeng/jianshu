import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable' //不可修改  生成的immutable对象 不可改变

//转化成immutable对象
const defaultState = fromJS({
    content: [],
    showScroll: false,
    articleMes: "2018.10.07 00:12* 字数 1201 阅读 1155 评论 7 喜欢 23",
})




export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.GET_DETAIL_DATA:
            return state.set('content', action.content)
        case actionTypes.TOGGLE_TOP_SHOW:
            return state.set('showScroll', action.show)
        default: return state
    }
}