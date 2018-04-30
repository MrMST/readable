
const URL = 'http://localhost:3001'
const HEADERS = {
  headers: { 'Authorization': 'whatever-you-want' }
}

export const getPosts = () => {
  return fetch(`${URL}/posts`, HEADERS )
    .then(response => response.json())
}

export const getComments = (id) => {
  return fetch(`${URL}/posts/${id}/comments`, HEADERS)
    .then(response => response.json())
}

export const deletePost = (id) => {
  return fetch(`${URL}/posts/${id}`, { method: 'DELETE', HEADERS })
}

export const votePost = (id, option) => {
  return fetch(`${URL}/posts/${id}`, {
    method: 'POST',
    headers: { ...HEADERS, 'Content-Type': 'application/json' },
    body: JSON.stringify({ option: option })
  })
  .then(data => data.json())
}
