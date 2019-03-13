import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store'
import { actionCreators as loginActionCreators } from '../../page/login/store'
import { CSSTransition } from "react-transition-group"
import { Link } from 'react-router-dom'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchWarpper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button,
} from './style'



class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  getListArea() {
    const { focused, list, handleChangePage, totalPage, currentPage, handleMouseEnter, handleMouseLeave, mouseEnter } = this.props
    let JsList = list.toJS() || []  // list 是immutable数据类型，需要转换成普通的数组
    let pageList = []

    if (JsList.length) { //在循环前先判断，否则list为空，就没有key值
      let nextPageNum = (JsList.length - ((currentPage - 1) * 10)) > 10 ? 0 : (JsList.length - (currentPage * 10)) % 10
      for (let i = (currentPage - 1) * 10; i < currentPage * 10 + nextPageNum; i++) {
        pageList.push(<SearchInfoItem key={JsList[i]}> {JsList[i]} </SearchInfoItem>)
      }
    }

    if (focused || mouseEnter) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handleChangePage(currentPage, totalPage, this.spinIcon)}>
              <i ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe851;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  render() {
    const { focused, handleBlur, handleFocus, list, isLogined, handleLogout } = this.props
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo />
        </Link>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载</NavItem>
          {isLogined ?
            <Fragment>
              <NavItem className='right' onClick={handleLogout}>退出</NavItem>
              <NavItem className='right'>欢迎你，二狗子   </NavItem>
            </Fragment> :
            <Link to='/login'><NavItem className='right'>登录</NavItem> </Link>
          }

          <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWarpper>
            <CSSTransition in={focused} timeout={330}
              classNames="slide"
            >
              <NavSearch
                className={focused ? "focused" : ""}
                onFocus={() => handleFocus(list)}
                onBlur={handleBlur}
              >
              </NavSearch>
            </CSSTransition>
            <i className={focused ? "iconfont focused zoom" : "iconfont zoom"}>
              &#xe62d;
            </i>
            {this.getListArea(focused)}
          </SearchWarpper>
        </Nav>
        <Addition>
          <Button className="writting">
            <i className="iconfont">&#xe96c; </i>
            写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    //这种写法不太统一，state.是JS对象获取，
    //state.header.是按immutable对象获取
    // focused: state.header.get('focused') 
    focused: state.get('header').get('focused'),
    //与上面效果一样
    // focused : state.getIn(['header','focused'])
    list: state.getIn(['header', 'list']),
    currentPage: state.getIn(['header', 'currentPage']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseEnter: state.getIn(['header', 'mouseEnter']),
    isLogined: state.getIn(['login', 'isLogined'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFocus(list) {
      // 注意：这里的list是immutable-array，没有length的
      if (list.size === 0) {
        dispatch(actionCreators.getList())   //只在list为空时获取异步数据
      }
      dispatch(actionCreators.searchFocus()) //搜索框变化动画
    },
    handleBlur() {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreators.MouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.MouseLeave())
    },
    handleChangePage(currentPage, totalPage, spin) { //换一页
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      spin.style.transform = `rotate(${originAngle + 360}deg)`
      if (currentPage < totalPage) {
        setTimeout(() => {
          dispatch(actionCreators.PageChange(currentPage + 1))
        }, 600);
      } else {
        setTimeout(() => {
          dispatch(actionCreators.PageChange(1))
        }, 600);
      }

    },
    handleLogout() {
      dispatch(loginActionCreators.logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header); //将Header和store建立连接