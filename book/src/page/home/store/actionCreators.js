import * as actionTypes from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'

const initHomeData = (data) => ({
    type: actionTypes.INIT_HOME_DATA,
    topicList: fromJS(data.topicList),
    articleList: fromJS(data.articleList),
    recommendList: fromJS(data.recommendList),
    writerList: fromJS(data.writerList)
})

const AddArticle = (data, nextPage) => ({
    type: actionTypes.ADD_ARTICLE,
    list: fromJS(data),
    nextPage
})

export const fetchHomeData = () => {
    return (dispatch) => {
        axios.get('/api/home.json')
            .then((res) => {
                const data = res.data.data
                console.log(data);
                const action = initHomeData(data)
                dispatch(action)

            }).catch(() => {
                console.log('error heihei');
            })
    }
}

export const getMoreArticle = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page)
            .then((res) => {
                const data = res.data.data
                const action = AddArticle(data, page + 1)
                dispatch(action)
            }).catch(() => {
                console.log('error');
            })
    }
}

export const toggleTopShow = (value) => ({
    type: actionTypes.TOGGLE_TOP_SHOW,
    show: value
})