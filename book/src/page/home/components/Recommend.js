import React, { PureComponent } from 'react';
import { RecommendWrapper, RecommendItem } from '../styled'
import { connect } from 'react-redux'

class Recommend extends PureComponent {

  render() {
    const { list } = this.props
    return (
      <RecommendWrapper>
        {
          list.map((item) => {
            return (
              <RecommendItem key={item.get('id')} cover={item.get('cover')}> </RecommendItem>
            )
          })
        }
      </RecommendWrapper>
    );
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'recommendList'])
})


export default connect(mapState, null)(Recommend);