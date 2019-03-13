import axios from 'axios'

import * as actionTypes from './actionTypes'

const changeLogined = (value = true) => ({
    type: actionTypes.CHANGE_LOGINED,
    value
})

export const logout = () => ({
    type: actionTypes.LOGINOUT,
    value: false
})

export const changeUserInput = (value) => ({
    type:actionTypes.USERINPUT,
    value
})

export const changePwInput = (value) => ({
    type:actionTypes.PWINPUT,
    value
})

export const login = (username, password) => {
    return (dispatch) => {
        axios.get(`/api/login.json?username=${username}&password=${password}`)
            .then(res => {
                const data = res.data.data
                if (data) {
                    dispatch(changeLogined())
                } else {
                    alert('登录失败')
                }
            })
    }
}