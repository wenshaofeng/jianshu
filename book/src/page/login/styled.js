import styled from 'styled-components'

export const LoginWrapper = styled.div`
  z-index: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 56px;
  background: #eee;
`

export const LoginBox = styled.div`
  width: 400px;
  height: 200px;
  margin: 100px auto;
  padding-top: 20px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  .login-input{
      width: 210px;
      margin: 10px 25%;
  }
  .login-button{
      width: 220px;
      margin: 5px 25%;
      border-radius: 10px;
  }
`