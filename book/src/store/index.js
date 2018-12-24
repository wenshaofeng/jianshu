import { createStore } from 'redux' //引入方法
import reducer from './reducer'


const store = createStore(reducer)
export default store
