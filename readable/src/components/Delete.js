import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Delete extends Component {

  render() {
    const { onDeleteClick, id } = this.props.post
    return(
    	<div
    		onClick={() => onDeleteClick(id)}
      	className="Delete">
      	Delete
    	</div>
    )
  }
}

export default Delete