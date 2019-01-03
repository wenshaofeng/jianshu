import React, { Component, Fragment } from 'react';
import { DetailWrapper, Header, Content, BackTop } from './style'
import { actionCreators } from './store/index'
import { connect } from 'react-redux'
import { Icon } from 'antd'
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
        const { content, showScroll, match, articleList, history } = this.props
        let id = match.params.id

        let JScontent = content.toJS(),
            JSArticle = articleList.toJS()
        if (!JSArticle[id]) {
            history.push("/");
            return <Fragment />;
        }
        let currentContent = JScontent[id],
            currentTitle = JSArticle[id].title
        return (
            <DetailWrapper>
                <Header>{currentTitle}</Header>
                <Content dangerouslySetInnerHTML={{ __html: currentContent }} />
                {showScroll ? <BackTop onClick={this.handleScrollTop}>
                    <Icon type="up" />
                </BackTop> : null}
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