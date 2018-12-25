import React from 'react'
import { withAuthContainer } from '../../hoc/unstated'
import Post from './Post'

const PostsList = React.memo(({ posts }) => {
  console.log('LIST render')

  return (
    <React.Fragment>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </React.Fragment>
  )
})

export default withAuthContainer(PostsList)
