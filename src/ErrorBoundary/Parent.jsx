import React from "react";
import Errors from './Errors'
import ErrorBoundary from './ErrorBoundary'

export default class Parent extends React.Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <h3>计算：{this.state.count}</h3>
        <ErrorBoundary render={(error,errorInfo)=><p>组件发生错误</p>}>
          <Errors />
        </ErrorBoundary>

        <button onClick={this.increment}>增加</button>
        <button onClick={this.decrement}>减少</button>
      </div>
    );
  }
}
