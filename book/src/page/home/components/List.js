import React, { Component, Fragment } from 'react';
import { ListItem, ListInfo } from '../styled'
import { connect } from 'react-redux'
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const { list } = this.props
    return (
      <Fragment>
        {
          list.map((item) => {
            return (
              <ListItem key={item.get('id')}>
                <img className='pic' src={item.get('cover')} alt="" />
                <ListInfo>
                  <h3 className='title'>
                    {item.get('title')}
                  </h3>
                  <p className='desc'>
                    {item.get('desc')}
                  </p>
                </ListInfo>
              </ListItem>
            )
          })
        }
      </Fragment>

    );
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'articleList'])
})

export default connect(mapState, null)(List);