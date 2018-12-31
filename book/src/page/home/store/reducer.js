import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable' //不可修改  生成的immutable对象 不可改变

//转化成immutable对象
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    writerList: [],
    articlePage: 1,
    showScroll: false
})

const InitHomeData = (state, action) => {
    return state.merge({
        topicList: action.topicList,
        articleList: action.articleList,
        recommendList: action.recommendList,
        writerList: action.writerList
    })
}

const AddArticle = (state, action) => {
    return state.merge({
        articleList: state.get('articleList').concat(action.list),
        articlePage: action.nextPage
    })
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.INIT_HOME_DATA:
            return InitHomeData(state, action)
        case actionTypes.ADD_ARTICLE:
            return AddArticle(state, action)
        case actionTypes.TOGGLE_TOP_SHOW:
            return state.set('showScroll', action.show)
        default: return state
    }
}