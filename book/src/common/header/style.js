import styled from 'styled-components';
import logoPic from '../../statics/nav-logo.png'

export const HeaderWrapper = styled.div`
    z-index: 1;
    position: relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0; 
`

export const Logo = styled.div`
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

export const SearchWarpper = styled.div`
  position: relative;  
  float: left;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused {
      background: #777;
      color: #fff;
    }
    &.zoom:hover{
      cursor:pointer;
    }  
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
    margin-top: 12px;
    padding: 0 38px 0 20px;
    box-sizing: border-box;
    font-size: 14px;
    margin-left: 20px;
    color: #666;
    &::placeholder {
      color: #999;
    }
    &.focused {
      width: 260px;
      .iconfont
    }
    &.slide-enter {
      transition: all .33s ease-out;
    }
    &.slide-enter-active {
      width: 260px;
    }
    &.slide-exit {
      transition: all .33s ease-out;
    }
    &.slide-exit-active {
      width: 180px;
    }
`

export const SearchInfo = styled.div`
  position: absolute;
  top: 58px;
  left: 0;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  background: #fff;
  z-index : 99;
 
`

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all .4s ease-in;
    transform: rotate(0deg);
    transform-origin: center center; 
  }
`

export const SearchInfoList = styled.div`
  overflow: hidden;
`

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
  margin-right: 10px;
  margin-bottom: 10px;
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
    cursor:pointer;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
    cursor:pointer;
  }
`