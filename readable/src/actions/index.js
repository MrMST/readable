import { getPosts, getComments, deletePost, votePost } from '../helpers/api'

const GET_POSTS = 'GET_POSTS'
const DELETE_POST = 'DELETE_POST'
const DELETE_POSTS = 'DELETE_POSTS'
const DOWN_VOTE = 'DOWN_VOTE'
const UP_VOTE = 'UP_VOTE'

export const fetchPosts = () => dispatch => (
  getPosts()
    .then(posts => {
      posts.map(post => {
        getComments(post.id)
          .then(comments => {
            dispatch({
              type: GET_POSTS,
              post,
              comments
            })
          })
      })
    })
  )

  export const delPostAction = (id) => dispatch => (
    deletePost(id)
      .then(() => {
        dispatch({
          type: DELETE_POST,
          id
        })
      })
  )

  export const decVoteAction = (id) => dispatch => (
    votePost(id, "downVote")
      .then(() => {
        dispatch({
          type: DOWN_VOTE,
          id
        })
      })
  )

  export const incVoteAction = (id) => dispatch => (
    votePost(id, "upVote")
      .then(() => {
        dispatch({
          type: UP_VOTE,
          id
        })
      })
  )

  export const deletePosts = () => ({
    type: DELETE_POSTS
  })
