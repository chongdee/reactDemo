import React from "react";

export default class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10
    };
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleCount = ()=>{
    this.setState({
      count: this.state.count+=1
    })
  }

handleChange =()=>{
  this.props.handleChanges('我是儿子的数据')
}

  render() {
    const { count } = this.state;
    return (
      <div>
        生命周期：{count}--{this.props.title}
        <button onClick={this.handleCount}>修改</button>
        <button onClick={this.handleChange}>修改title</button>
      </div>
    );
  }
}
