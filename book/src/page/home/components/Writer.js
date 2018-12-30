import React, { Component } from 'react';
import { WriterWrapper, WriterItem } from '../styled'
import { Icon } from "antd";
import { connect } from 'react-redux'

class Writer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const { list } = this.props
    return (
      <WriterWrapper>
        <div className='title'>
          <span>推荐作者</span>
          <span className="right">换一批</span>
          <Icon type="sync" className="right icon" />
        </div>
        <div>
          {
            list.map((item) => {
              return (
                <WriterItem key={item.get('id')}>
                  <img src={item.get('avatar')} alt={item.get('nickname')} />
                  <div className="info">
                    <span>{item.get('nickname')}</span>
                    <span className="desc">
                      {item.get('desc')}
                    </span>
                  </div>
                  <span className="right">
                    <Icon type="plus" />
                    关注
                  </span>
                </WriterItem>
              )
            })
          }
        </div>
        <div className="viewAll">
          <span>查看全部 </span>
          <Icon type="right" />
        </div>
      </WriterWrapper >);
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'writerList'])
})

export default connect(mapState, null)(Writer);