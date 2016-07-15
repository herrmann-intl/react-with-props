import React from 'react'
import _ from 'lodash'

export default function(component, props){
  return class extends React.Component{
    render(){
      const normalizedProps = typeof(props) == "function" ? props(this.props) : props
      return React.createElement(component, _.merge(normalizedProps, this.props))
    }
  }
}
