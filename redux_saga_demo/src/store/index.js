import { createStore, applyMiddleware, compose } from 'redux' //引入方法
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import todoSaga from './saga.js'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
//使用redux-thunk 的同时 使用devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(reducer, enhancer);
sagaMiddleware.run(todoSaga)


export default store