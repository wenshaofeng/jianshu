import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from "react-transition-group"
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    SearchWarpper,
    Addition,
    Button
} from './style'

class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWarpper>
                        <CSSTransition in={this.props.focused} timeout={330}
                            classNames="slide"
                        >
                            <NavSearch
                                className={this.props.focused ? "focused" : ""}
                                onFocus={this.props.handleFocus}
                                onBlur={this.props.handleBlur}
                            >
                            </NavSearch>
                        </CSSTransition>
                        <i className={this.props.focused ? "iconfont focused zoom" : "iconfont zoom"}>
                            &#xe62d;
                        </i>
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
      focused : state.focused
    }
}

const mapDispatchToProps = (dispatch)=> {
    return{
        handleFocus() {
            const action = {
                type:'search-on-focus',               
            }
            dispatch(action)
        },
        handleBlur() {
            const action = {
                type:'search-on-blur',               
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header); //将Header和store建立连接