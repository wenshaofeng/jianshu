import { takeEvery ,put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import axios from 'axios'
import { initListAction } from './actionCreators'

function* getInitList() {

    const res = yield axios.get('/api/todolist.json')
    const action = initListAction(res.data)
    yield put(action)
}

// generator 函数
function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;