import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux'; //react-redux核心组件
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header/index' //头部header组件
import Home from './page/home' 
import Detail from './page/detail' 
import store from './store/index'
import { GlobalStyle } from './style'
import { GlobalIconStyle } from './statics/iconfont/iconfont'

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <GlobalIconStyle />
        <Provider store={store}>
          <Header />
          <BrowserRouter>
            <Fragment>
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail' exact component={Detail}></Route>
            </Fragment>
          </BrowserRouter>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
