import React from "react";

export default class Child1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  componentDidMount(){
    this.setState({
      value:this.props.money
    })
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.money}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
