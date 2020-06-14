import React from 'react'

export default class extends React.Component {
  constructor(){
    super()
    this.state = {
      value:''
    }
    this.username = React.createRef()
  }

  handleChange=(e)=>{
    this.setState({value:e.target.value})
  }

  handleSubmit=()=>{
    console.log(this.state.value);
    
  }


  handleClick=()=>{
    console.log(this.username.current.value);
    
  }

  render(){
    return (
      <div>
          {/* 受控组件 */}
          <div>
            <input type="text" value={ this.state.value } onChange={ this.handleChange }/>
            <button onClick={ this.handleSubmit }>提交</button>
          </div>

          {/* 非受控组件 */}
          <div>
            <input type="text" ref={this.username} />
            <button onClick={this.handleClick}>提交</button>
          </div>
      </div>
    );
  }
}