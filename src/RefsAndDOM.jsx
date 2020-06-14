import React from 'react'

export default class RefsAndDOM extends React.Component {
  constructor(props){
    super(props)
    this.myRef = React.createRef()
  }

  componentDidMount(){
    this.myRef.current.style.color='red'
    
  }

  render(){
    return(
      <div ref={ this.myRef }>非受控组件</div>
    )
  }
}