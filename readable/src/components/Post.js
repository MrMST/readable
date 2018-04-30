import React, { Component } from 'react'
import { connect } from 'react-redux'
import { delPostAction, incVoteAction, decVoteAction} from '../actions'
import Title from './Title'
import Author from './Author'
import Count from './Count'
import Edit from './Edit'
import Delete from './Delete'



class Post extends Component {
  state = {
    score: 0
  }

  onDeleteClick = (id) => {
    this.props.deletePost(id)
  }

  onClickUpVote = (id) => {
    this.props.upVote(id)
    this.setState({
      score: this.state.score + 1
    })
  }

  onClickDownVote = (id) => {
    this.props.downVote(id)
    this.setState({
      score: this.state.score - 1
    })
  }

  componentDidMount() {
    const { voteScore } = this.props.post
    this.setState({
      score: voteScore
    })
  }

  render() {

    const { id, title, author, body } = this.props.post
    const { score } = this.state
    const posts = this.props.posts
    const index = posts.findIndex(post => id === post.id)
    const count = posts[index].comments ? posts[index].comments.length : '0'

console.log(this.props.post)

    return(
      <div className="Post">
        {/* <Vote
          id={id}
          score={score}
          onClickDownVote={this.onClickDownVote}
          onClickUpVote={this.onClickUpVote} />
           */}
        <div className="Title-PostInfo-Container">
          <div className="Title-PostInfo">
            <Title
              post={this.props.post} />
            <div className="PostInfo">
              <Author post={this.props.post} />
              {/*
              <Count count={count} />
              <Edit id={id} />
              <Delete id={id} onDeleteClick={this.onDeleteClick}/> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ posts }) => {
  return {
    posts: posts.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(delPostAction(id)),
    upVote: (id) => dispatch(incVoteAction(id)),
    downVote: (id) => dispatch(decVoteAction(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)