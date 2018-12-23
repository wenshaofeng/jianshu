import React, { Component } from 'react';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button
} from './style'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
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
                    <NavSearch></NavSearch>
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

export default Header;