import React, { Component } from 'react';
import Header from './common/header/index'
import { GlobalStyle } from './style'
import { GlobalIconStyle } from './statics/iconfont/iconfont'

class App extends Component {
    render() {
      return (
        <div >
          <GlobalStyle />
          <GlobalIconStyle />
          <Header></Header>
        </div>
      );
    }
  }

export default App;
