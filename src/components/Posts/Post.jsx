import React from 'react'

const Post = React.memo(({ post }) => {
  console.log('post render')

  return <div>Post title: {post.title}</div>
})

export default Post
