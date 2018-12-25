import React from 'react'
import { withPostContainer, withAuthContainer } from '../../hoc/unstated'
import { compose } from 'recompose'

const Post = React.memo(
  ({
    post,
    authContainer: {
      state: { user },
    },
    postContainer,
  }) => {
    console.log('POST render')
    const deletePost = async () => {
      await postContainer.deletePost(user.uid, post.id)
      console.log('deleted')
    }

    return (
      <div style={{ display: 'flex' }}>
        <p>Post title: {post.title}</p>
        <button onClick={deletePost}>Delete</button>
      </div>
    )
  }
)

export default compose(
  withPostContainer,
  withAuthContainer
)(Post)
