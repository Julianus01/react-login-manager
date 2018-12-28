import React from 'react'
import { withAuthContainer } from '../../hoc/unstated'
import Post from './Post'
import styled from 'styled-components'

const PostsList = React.memo(({ posts }) => {
  // console.log('LIST render')

  return (
    <ListContainer>
      {posts.map(post => (
        <Post key={post._id} post={post} />
      ))}
    </ListContainer>
  )
})
const ListContainer = styled.div`
  width: 100%;
  margin: 0 -16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default withAuthContainer(PostsList)
