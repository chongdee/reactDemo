import React from "react";

export default class Child2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  componentDidMount(){
    this.setState({
      value: this.props.money * 7
    })
  }

  handleChange = (e) => {
    this.setState({
      value:e.target.value
    })
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.money*7}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
