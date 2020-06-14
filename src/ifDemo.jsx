import React from 'react'

export default class IfDemo extends React.Component {

  constructor() {
    super()
    this.state = {
      isLogin:false
    }

  }

  handleShow=()=>{
    this.setState({
      isLogin:true
    })
  }

  render(){
    let showView = this.state.isLogin?
    <div>ardee</div>:
    <div>请登录</div>
    return(
      <div>
        条件渲染：{ showView }
        <button onClick={ this.handleShow }>登录</button>
      </div>
    )
  }
}