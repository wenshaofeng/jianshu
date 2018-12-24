import React, { Component ,Fragment} from 'react';
import { Provider } from 'react-redux'; //react-redux核心组件
import Header from './common/header/index'
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
          <Header></Header>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
