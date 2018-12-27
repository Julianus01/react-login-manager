import React from 'react'
import { withPostContainer, withAuthContainer } from '../../hoc/unstated'
import { compose, mapProps } from 'recompose'

const Post = React.memo(({ post, user, deletePost }) => {
  console.log('POST render')

  const handleDeletePost = async () => {
    await deletePost(user.uid, post._id)
    console.log('deleted')
  }

  return (
    <div style={{ display: 'flex' }}>
      <p>Post title: {post.title}</p>
      <button onClick={handleDeletePost}>Delete</button>
    </div>
  )
})

export default compose(
  withPostContainer,
  withAuthContainer,
  mapProps(({ post, authContainer, postContainer }) => ({
    post: post,
    user: authContainer.state.user,
    deletePost: postContainer.deletePost,
  }))
)(Post)
