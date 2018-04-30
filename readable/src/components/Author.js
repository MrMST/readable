import React, { Component } from 'react'

class Author extends Component {

  render() {
    const { author } = this.props.post
    return(
    <div className="Author">
      Author: { author }
    </div>
    )
  }
}

export default Author