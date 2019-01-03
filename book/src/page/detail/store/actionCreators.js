import * as actionTypes from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'

const getDetailData = (data) => ({
    type: actionTypes.GET_DETAIL_DATA,
    content: fromJS(data)
})

export const fetchDetailData = () => {
    return (dispatch) => {
        axios.get('/api/detail.json')
            .then((res) => {
                const data = res.data.data
                const action = getDetailData(data)
                dispatch(action)
            }).catch(() => {
                console.log('error detailData');
            })
    }
}

export const toggleTopShow = (value) => ({
    type: actionTypes.TOGGLE_TOP_SHOW,
    show: value
})