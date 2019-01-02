import * as actionTypes from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'

const getDetailData = (data) => ({
    type: actionTypes.GET_DETAIL_DATA,
    title: fromJS(data.title),
    content: fromJS(data.content)
})

export const fetchDetailData = () => {
    return (dispatch) => {
        axios.get('/api/detail.json')
            .then((res) => {
                const data = res.data.data
                console.log(data);
                const action = getDetailData(data)
                dispatch(action)
            }).catch(() => {
                console.log('error detailData');

            })
    }

}