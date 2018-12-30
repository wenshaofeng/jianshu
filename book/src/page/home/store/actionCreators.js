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