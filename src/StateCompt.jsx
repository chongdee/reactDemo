import React from "react";

export default class StateCompt extends React.Component {
  /*
  组件中的状态：state
  以前我们操作页面的元素变化，都是修改DOM，操作DOM
  但是有了React框架，我们不再推荐操作DOM，页面元素的改变使用state进行处理
 */
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
    };
  }

  increment() {
    this.setState({
      count:this.state.count+=1
    })
  }

  decrement(){
    this.setState({
      count: this.state.count-=1
    })
  }

  render() {
    return (
      <div>
        <h3>组件state</h3>
        <p>{this.state.count}</p>
        <button onClick={this.increment.bind(this)}>增加</button>
        <button onClick={this.decrement.bind(this)}>减少</button>
      </div>
    );
  }
}
