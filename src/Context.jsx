import React from 'react'
import PropTypes from 'prop-types'
const Topic = (props) =>{
  return(
    <div>
      {/* <Comment color={ props.color }/> */}
      <Comment/>
    </div>
  )
}
const Comment = (props,context) => {
  return (
    <div>
      {context.color}
    </div>
  )
};
export default class MyContext extends React.Component {
  getChildContext(){
    return{
      color:'red'
    }
  }
  render(){
    return(
      <div>
        {/* <Topic color='red'/> */}
        <Topic/>
      </div>
    )
  }
}
Comment.contextTypes = {
  color:PropTypes.string
}
MyContext.childContextTypes = {
  color: PropTypes.string,
};