import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux'; //react-redux核心组件
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header/index' //头部header组件
import Home from './page/home'
import Detail from './page/detail'
import store from './store/index'
import { GlobalStyle } from './style'
import { GlobalIconStyle } from './statics/iconfont/iconfont'

import "antd/dist/antd.css"

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <GlobalIconStyle />
        <Provider store={store}>
          <BrowserRouter>
            <Fragment>
              <Header />
              <Route path='/' exact component={Home} />>
              <Route path='/detail/:id' exact component={Detail} />>
            </Fragment>
          </BrowserRouter>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
