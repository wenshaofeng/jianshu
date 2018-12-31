import React, { PureComponent } from 'react';
import Hswiper from './components/Hswiper'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import DownloadApp from './components/Download'
import { actionCreators } from './store/index'
import { connect } from 'react-redux'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './styled'
import { Icon } from 'antd'

class Home extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }
    handleScrollTop() {
        var timer = setInterval(() => {
            if (document.documentElement.scrollTop) {
                document.documentElement.scrollTop -= Math.ceil(document.documentElement.scrollTop * 0.1)
            } else {
                clearInterval(timer)
            }
        }, 20)
    }

    render() {
        const { showScroll } = this.props
        return (
            <HomeWrapper>
                <HomeLeft>
                    <Hswiper />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <DownloadApp />
                    <Writer />
                </HomeRight>
                {showScroll ? <BackTop onClick={this.handleScrollTop}>
                    <Icon type="up" />
                </BackTop> : null}
            </HomeWrapper>
        );
    }

    componentDidMount() {
        this.props.fetchHomeData()
        this.bindEvents()
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

const mapStateToProps = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatchToProps = (dispatch) => ({
    fetchHomeData() {
        dispatch(actionCreators.fetchHomeData())
    },
    changeScrollTopShow() {
        if (document.documentElement.scrollTop > 200) {
            dispatch(actionCreators.toggleTopShow(true))
        } else {
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);