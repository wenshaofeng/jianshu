import * as actionTypes from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'

const initList = (data) => ({
    type: actionTypes.INIT_LIST,
    data: fromJS(data), //把data改成immutable数据类型  
    totalPage: Math.ceil(data.length / 10) //一共多少页 
})

export const searchFocus = () => ({
    type: actionTypes.SEARCH_ON_FOCUS
})

export const searchBlur = () => ({
    type: actionTypes.SEARCH_ON_BLUR
})

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json')
            .then((res) => {
                const data = res.data
                const action = initList(data.data)
                dispatch(action)
            }).catch(() => {
                console.log('error');
            })
    }
}

export const MouseEnter = () =>({
    type : actionTypes.ON_MOUSE_ENTER 
})

export const MouseLeave = () =>({
    type : actionTypes.ON_MOUSE_LEAVE
})

export const PageChange = (currentPage)=> ({
    type : actionTypes.PAGE_CHANGE,
    currentPage
})