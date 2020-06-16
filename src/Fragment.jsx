import React from 'react'

class Item extends React.Component {
  render(){
    return (
      <Fragment>
        <li>li标签内容</li>
        <li>li标签内容</li>
      </Fragment>
    );
  }
} 

export default class Fragment extends React.Component{
  render(){
    return(
      <ul>
        <Item/>
      </ul>
    )
  }
}