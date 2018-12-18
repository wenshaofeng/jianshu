import React,{Component,Fragment} from 'react';
import TodeItem from './List'
import './style.css'

class App2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: ['learn basketball', 'learn football', 'learn skill', '篮球'],
            inputVa: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)    

    }
    //监听输入框改变
    handleInputChange(e) {
        const value = e.target.value
        this.setState(()=>({  //异步设置数据
            inputVa: value
        }))
      /*   this.setState({
            inputVa: e.target.value
        }) */
    }

    // 处理点击添加
    handleBtnClick() {
        
        this.setState((preState)=>({  //异步设置数据
            list:[...preState.list,preState.inputVa],
            inputVa: ''
        }))

        /* this.setState({
            list: [...this.state.list, this.state.inputVa],
            inputVa: ''
        }) */

    }

    //处理点击删除
    handleDelete(index) {
        let list = [...this.state.list]
        list.splice(index, 1)
        this.setState({ list })
    }
    //简化render中的内容
    getTodoItem() {
        return(
            this.state.list.map((item, index) => {
                return <TodeItem
                    content={item}
                    key={index}
                    index={index}
                    deleteItem={this.handleDelete}  //父组件向子组件传递方法的时候，一定要绑定this
                                                //因为子组件调用的是父组件的方法，子组件中并没有定义这个方法
                                                //所以需要绑定this到父组件上
                />
            })
        )
    }
    //父组件通过属性的形式向子组件传递参数
    //子组件通过props接受父组件传递过来的参数
    render() {
        //JSX语法
        return (
            <Fragment>
                <div>
                    <input  value={this.state.inputVa} onChange={this.handleInputChange} />
                    <button className='red-btn' onClick={this.handleBtnClick}> 添加 </button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        );
    }
}

export default App2;
