import { createStore, applyMiddleware, compose } from 'redux' //引入方法
import reducer from './reducer'
import thunk from 'redux-thunk';  //引入中间件

//使用redux-thunk 的同时 使用devtools
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);

const store = createStore(reducer, enhancer);


export default store