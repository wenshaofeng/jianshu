import React, { PureComponent, Fragment } from 'react';
import { ListItem, ListInfo, LoadMore } from '../styled'
import { connect } from 'react-redux'
import { actionCreators } from '../store/index'
import { Link } from 'react-router-dom'
class List extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const { list, getMoreArticle, page } = this.props
    return (
      <Fragment>
        {
          list.map((item, index) => {
            return (
              <Link key={index} to={`/detail`}>
                <ListItem key={index}>
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
              </Link>
            )
          })
        }
        <LoadMore onClick={() => getMoreArticle(page)}>
          阅读更多
        </LoadMore>
      </Fragment>

    );
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
})

const mapDispatch = (dispatch) => ({
  getMoreArticle(page) {
    dispatch(actionCreators.getMoreArticle(page))
  }

})

export default connect(mapState, mapDispatch)(List);