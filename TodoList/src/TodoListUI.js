import React, { Component } from 'react';
import { Input, Button, List } from 'antd';

//无状态组件
const TodoListUI = (props) => {
    return (
        <div style={{ marginTop: '10px', marginLeft: '10px' }}>
            <div>
                <Input
                    onChange={props.handleInputChange}
                    value={props.inputVal}
                    placeholder='todo info'
                    style={{ width: '300px', marginRight: '10px' }} />
                <Button type='primary'
                    onClick={props.hangdleBtnClick}>提交</Button>
            </div>
            <List style={{ width: '500px', marginTop: '10px' }}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (
                    <List.Item onClick={(index) => { props.handleDeleteItem(index) }}>
                        {item}
                    </List.Item>
                )}
            />,
        </div>
    )
}

export default TodoListUI;