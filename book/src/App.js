import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux'; //react-redux核心组件
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './common/header/index' //头部header组件
import Home from './page/home'
import { LoadableDetail } from './loading/loadable' // 详情页
import { LoadableLogin } from './loading/loadable' // 登录页
import Writer from './page/write' // 写文章页

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
              <Route path='/' exact component={Home} />
              <Route path='/detail/:id' exact component={LoadableDetail} />
              <Route path='/login' exact component={LoadableLogin} />
              <Route path='/write' exact component={Writer} />
            </Fragment>
          </BrowserRouter>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
