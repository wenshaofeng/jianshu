import { createStore } from 'redux'
import reducer from './reducer'
//创建Store的时候，需要把reducer同时创建
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    
export default store