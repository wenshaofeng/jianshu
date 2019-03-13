import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


class Write extends PureComponent {
  render() {
    if(this.props.isLogined) {
      return <div>写文章</div>
    } else {
      return <Redirect to='/login'></Redirect>
    }
  }
}

const mapState = (state) => ({
  isLogined: state.getIn(['login', 'isLogined'])
})


export default connect(mapState, null)(Write)