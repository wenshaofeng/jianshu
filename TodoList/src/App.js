import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: ['learn basketball', 'learn football', 'learn skill', '篮球'],
      inputVa: ''
    }
  }
  //监听输入框改变
  handleInputChange(e) {
    this.setState({
      inputVa: e.target.value
    })
    // this.state.inputVa = e.target.value //不能直接改变state的值
  }
  
  // 处理点击添加
  handleBtnClick() {
    // React 提供了一个方法去改变state 
    this.setState({
      list: [...this.state.list, this.state.inputVa],
      inputVa: ''
    })

    // this.state.list.push('hello world')  无法改变state中的数据
  }

  //处理点击删除
  handleDelete(index){
    let list = [...this.state.list]
    list.splice(index,1)
    this.setState({list})
  }
  render() {
    //JSX语法
    return (
      <div>
        <div>
          <input value={this.state.inputVa} onChange={this.handleInputChange.bind(this)} />
          {/* 第一个this指向App组件,如果不使用bind，handleBtnClick函数中的this会指向button */}
          <button onClick={this.handleBtnClick.bind(this)}> 添加 </button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li key={index} onClick={this.handleDelete.bind(this,index)}>
                {item}
              </li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
