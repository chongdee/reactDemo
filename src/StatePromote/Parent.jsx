import React from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

export default class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      money: 2,
    };
  }

  handleChange = (e) => {
    this.setState({
      money: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <div>
          父组件：
          <input
            type="text"
            value={this.state.money}
            onChange={this.handleChange}
          />
        </div>
        <div>
          人民币:
          <Child1 money={this.state.money} />
        </div>
        <div>
          美元:
          <Child2 money={this.state.money} />
        </div>
      </div>
    );
  }
}
