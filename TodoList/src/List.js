import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        const {deleteItem ,index} = this.props //解构赋值
        deleteItem(index)
    }
    render() {
        const {content} = this.props
        return (
            <div onClick={this.handleClick}
            dangerouslySetInnerHTML={{__html:content}}
            >
                
            </div>

        );
    }
}

export default TodoItem;