import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        const { deleteItem, index } = this.props //解构赋值
        deleteItem(index)
    }
    render() {
        const { content ,test } = this.props
        return (
            <div onClick={this.handleClick}>
           {test}- {content}
            </div>

        );
    }
}

//类型检测
TodoItem.propTypes = {
    content: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    deleteItem: PropTypes.func,
    index: PropTypes.oneOfType([PropTypes.string,PropTypes.bool,PropTypes.number]),
    // 你可以使用 `isRequired' 链接上述任何一个，以确保在没有提供 prop 的情况下显示警告。
    test: PropTypes.string.isRequired
}

//设置默认值
TodoItem.defaultProps = {
    test: '科比布莱恩特'
}



export default TodoItem;