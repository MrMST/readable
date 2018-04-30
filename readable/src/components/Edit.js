import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Edit extends Component {

  render() {
    const { id } = this.props.post
    return(
      <div className="Edit">
      <Link to={`/edit/${id}`}>Edit</Link>
      </div>
    )
  }
}

export default Edit