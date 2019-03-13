import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Redirect } from 'react-router-dom'
import { LoginWrapper, LoginBox } from './styled'
import { Input, Button } from 'antd'

class Login extends PureComponent {
    render() {
        const { isLogined, userInputValue, passwordInputValue, handleUserInputValue, handlePasswordInputValue, login } = this.props
        if (!isLogined) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="账号" value={userInputValue} className='login-input' onChange={handleUserInputValue} />
                        <Input placeholder="密码" value={passwordInputValue} className='login-input' type='password' onChange={handlePasswordInputValue} />
                        <Button type="primary" block className='login-button' onClick={() => { login(userInputValue, passwordInputValue) }}> 登录 </Button>
                    </LoginBox>
                </LoginWrapper>
            );
        } else {
            return <Redirect to='/' />
        }
    }
   
}



const mapState = (state) => ({
    isLogined: state.getIn(['login', 'isLogined']),
    userInputValue: state.getIn(['login', 'userInputValue']),
    passwordInputValue: state.getIn(['login', 'passwordInputValue'])
})

const mapDispatch = (dispatch) => ({

    handleUserInputValue (event)  {    
        dispatch(actionCreators.changeUserInput(event.target.value))
        console.log(event.target.value); 
    },

    handlePasswordInputValue (event) {
        dispatch(actionCreators.changePwInput(event.target.value))
        console.log(event.target.value);  
    
    },

    login(user, pw) {
        dispatch(actionCreators.login(user,pw))
    }
})

export default connect(mapState, mapDispatch)(Login)