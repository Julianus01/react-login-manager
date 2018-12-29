import React from 'react'
import { withAuthContainer } from '../../unstated/hoc'
import Post from './Post'
import styled from 'styled-components'
import { Card } from 'antd'

const PostsList = React.memo(({ posts }) => {
  // console.log('LIST render')

  if (!posts.length)
    return (
      <ListContainer>
        {Array.from({ length: 5 }, (item, index) => (
          <LoadingCard loading={true} key={index} />
        ))}
      </ListContainer>
    )

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
  margin: -16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LoadingCard = styled(Card)`
  margin: 16px 0;
  width: 100%;
`

export default withAuthContainer(PostsList)
