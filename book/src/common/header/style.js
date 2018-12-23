import styled from 'styled-components';
import logoPic from '../../statics/nav-logo.png'

export const HeaderWrapper = styled.div`
    z-index: 1;
    position: relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0; 
`

export const Logo = styled.a.attrs({
    href: '/'
})`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${logoPic});
    background-size: contain;
`

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
    padding-right: 70px;
    box-sizing: border-box;
`

// &.left 如果<NavItem/>组件上有left类名，就向左浮动
export const NavItem = styled.div`
line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }

  &.active {
    color: #ea6f5a;
  }
`

// &::placeholder 表示当前组件下的 placeholder
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
  })`
    
    height: 36px;
    width: 180px
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    margin-top: 9px;
    padding: 0 38px 0 20px;
    box-sizing: border-box;
    font-size: 14px;
    margin-left: 20px;
    color: #666;
    &::placeholder {
      color: #999;
    }
`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 58px;
`

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`