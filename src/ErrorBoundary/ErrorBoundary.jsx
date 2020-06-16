import React from "react";

export default class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  // 生命周期捕获错误信息
  componentDidCatch(error, errorInfo){
    this.setState({
      hasError:true,
      error,
      errorInfo
    })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>{this.props.render(this.state.error, this.state.errorInfo)}</div>
      );
    }
    return this.props.children
  }
}
