import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Title extends Component {

  render() {
    const { id, title, category } = this.props.post
    return(
      <div className="Title">
        <Link to={`${category}/${id}`}>{title}</Link>
      </div>
    )
  }
}

export default Title