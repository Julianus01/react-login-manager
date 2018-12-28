import React from 'react'
import { withPostContainer, withAuthContainer } from '../../hoc/unstated'
import { compose, mapProps } from 'recompose'
import { Card, Icon } from 'antd'
import styled from 'styled-components'

const Post = React.memo(({ post, user, deletePost }) => {
  // console.log('POST render')

  const handleDeletePost = async () => {
    await deletePost(user.uid, post._id)
    console.log('deleted')
  }

  return (
    <SCard
      actions={[
        <Icon type='delete' />,
      ]}
    >
      <Card.Meta
        title='Card title'
        description='This is the description'
      />
    </SCard>
  )
})

const SCard = styled(Card)`
  margin: 16px 0;
  width: 100%;
`

export default compose(
  withPostContainer,
  withAuthContainer,
  mapProps(({ post, authContainer, postContainer }) => ({
    post: post,
    user: authContainer.state.user,
    deletePost: postContainer.deletePost,
  }))
)(Post)


