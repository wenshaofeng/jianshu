import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable' //不可修改  生成的immutable对象 不可改变

//转化成immutable对象
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    writerList: [],
})

const InitHomeData = (state, action) => {
    return state.merge({
        topicList: action.topicList,
        articleList: action.articleList,
        recommendList: action.recommendList,
        writerList: action.writerList
    })
}

export default (state = defaultState, action) => {
    if (action.type === actionTypes.INIT_HOME_DATA) {
        return InitHomeData(state, action)
    }
    return state
}