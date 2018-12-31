import React, { PureComponent } from 'react';
import { TopicWrapper, TopicItem, CollectionMore } from '../styled'
import { connect } from 'react-redux'
import { Icon } from 'antd'
class Topic extends PureComponent {
    render() {
        const { list } = this.props
        return (
            <TopicWrapper>
                {
                    list.map((item) => {
                        return (
                            <TopicItem key={item.get('id')}>
                                <img
                                    className="topic-pic"
                                    src={item.get('imgUrl')}
                                    alt={item.get('id')}
                                />
                                {item.get('title')}
                            </TopicItem>
                        )
                    })
                }
                <CollectionMore>
                    <a target="_blank">
                        更多热门专题
                 <Icon type="right" className="icon-right" />
                    </a>
                </CollectionMore>
            </TopicWrapper>
        );
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'topicList'])
})


export default connect(mapState, null)(Topic);