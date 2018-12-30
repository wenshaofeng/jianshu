import React, { Component } from 'react';
import Hswiper from './components/Hswiper'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import DownloadApp from './components/Download'
import { actionCreators } from './store/index'
import { connect } from 'react-redux'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './styled'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
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
            </HomeWrapper>
        );
    }

    componentDidMount() {
        this.props.fetchHomeData()
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    fetchHomeData() {
        dispatch(actionCreators.fetchHomeData())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);