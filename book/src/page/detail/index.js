import React, { Component, Fragment } from 'react';

import { DetailWrapper, Header, Content, BackTop } from './style'
import { Icon } from 'antd'
import DetailAuthor from './components/DetailAuthor'
import DetailFooter from './components/DetailFooter'
import Ad from './components/Ad'

import { actionCreators } from './store/index'
import { connect } from 'react-redux'
import { toJS } from 'immutable'

class Detail extends Component {
    handleScrollTop() {
        var timer = setInterval(() => {
            if (document.documentElement.scrollTop) {
                document.documentElement.scrollTop -= Math.ceil(document.documentElement.scrollTop * 0.05)
            } else {
                clearInterval(timer)
            }
        }, 15)
    }

    render() {
        const { content, showScroll, match, articleList, history, articleMes } = this.props
        let id = match.params.id

        let JScontent = content.toJS(),
            JSArticle = articleList.toJS()[id]
        if (!JSArticle) {
            history.push("/");
            return <Fragment />;
        }
        let currentContent = JScontent[id],
            currentTitle = JSArticle.title
        return (
            <DetailWrapper>
                <Header>{currentTitle}</Header>
                <DetailAuthor currentData={JSArticle} content={articleMes} />
                <Content dangerouslySetInnerHTML={{ __html: currentContent }} />
                <Ad />
                {showScroll ? <BackTop onClick={this.handleScrollTop}>
                    <Icon type="up" />
                </BackTop> : null}
                <DetailFooter avator={JSArticle.avator} name={JSArticle.author} />
            </DetailWrapper>
        );
    }
    componentDidMount() { //页面加载完绑定事件
        this.props.fetchDetailData()
        this.bindEvents()
        window.scrollTo(0, 0)
    }
    componentWillUnmount() { //解绑事件
        this.unbindEvents()
    }
    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
    unbindEvents() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }
}

const mapState = (state) => ({
    showScroll: state.getIn(['detail', 'showScroll']),
    content: state.getIn(['detail', 'content']),
    articleList: state.getIn(['home', 'articleList']),
    articleMes: state.getIn(['detail', 'articleMes'])
})

const mapDispatch = (dispatch) => ({
    fetchDetailData() {
        dispatch(actionCreators.fetchDetailData())
    },
    changeScrollTopShow() {

        if (document.documentElement.scrollTop > 200) {
            dispatch(actionCreators.toggleTopShow(true))
        } else {
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
})

export default connect(mapState, mapDispatch)(Detail);