import { createStore, compose, applyMiddleware } from 'redux' //引入方法
import thunk from 'redux-thunk' //引入中间件
import reducer from './reducer'

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk)
)


const store = createStore(reducer, enhancer)
export default store
