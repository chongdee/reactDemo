import React from 'react'
import PropTypes from 'prop-types'

export default class PropsType extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div>
        Hello { this.props.title }
      </div>
    )
  }
}

PropsType.propTypes = {
  title: PropTypes.string
};

PropsType.defaultProps = {
  title: '默认值'
}