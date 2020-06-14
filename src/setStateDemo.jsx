import React from "react";

export default class SetStateDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState(
      {
        count: (this.state.count += 1),
      },
      () => {
        console.log(this.state.count);
      }
    );
  };

  render() {
    return (
      <div>
        setState是同步还是异步问题?(两者都是)
        <p>{this.state.count}</p>
        <button onClick={this.increment}>增加</button>
      </div>
    );
  }
}
