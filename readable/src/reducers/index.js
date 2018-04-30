import {combineReducers} from 'redux';

const posts = (state = { posts: [] }, action) => {
    switch(action.type) {
      case 'GET_POSTS':
        action.post.comments = action.comments
        return {
          posts: [...state.posts, action.post]
        }
        case 'DELETE_POSTS':
        return {
          posts: []
      }
      default:
        return state
    }
  }

  export default combineReducers({
    posts
  })
