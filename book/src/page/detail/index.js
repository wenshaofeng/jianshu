import React, { PureComponent } from 'react';
import { DetailWrapper, Header, Content } from './style'
import { actionCreators } from './store/index'
import { connect } from 'react-redux'


class Detail extends PureComponent {
    render() {
        const { title, content } = this.props
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                <Content dangerouslySetInnerHTML={{ __html: this.props.content }} />
            </DetailWrapper>
        );
    }
    componentDidMount() {
        this.props.fetchDetailData()
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
})

const mapDispatch = (dispatch) => ({
    fetchDetailData() {
        dispatch(actionCreators.fetchDetailData())
    }
})

export default connect(mapState, mapDispatch)(Detail);