import React from 'react'
import { withAuth, withPost } from '../../hoc/unstated'
import Post from './Post'
import { compose } from 'recompose'

const PostsList = React.memo(({ posts }) => {
  console.log('list render')

  return (
    <React.Fragment>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </React.Fragment>
  )
})

export default compose(
  withAuth,
  withPost
)(PostsList)
