import React from 'react'
import { withPostContainer, withAuthContainer } from '../../hoc/unstated'
import { compose, mapProps } from 'recompose'
import { Card, Icon, Modal } from 'antd'
import styled from 'styled-components'

const { confirm } = Modal
const confirmationModalOptions = {
  title: 'Are you sure delete this post?',
  maskClosable: true,
  maskStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  okText: 'delete',
  okType: 'default',
  autoFocusButton: null,
}

const Post = React.memo(({ post, user, deletePost, isFetching }) => {
  // console.log('POST render')

  const showDeleteConfirmationModal = (uid, postId) => async () => {
    confirm({
      ...confirmationModalOptions,
      cancelText: 'cancel',
      onOk: async () => {
        await deletePost(uid, postId)
      },
    })
  }

  return (
    <SCard loading={isFetching} actions={[<Actions deleteAction={showDeleteConfirmationModal(user.uid, post._id)} />]}>
      <Card.Meta title={post.title} description={post.description} />
    </SCard>
  )
})

const Actions = ({ deleteAction }) => (
  <Icon type='delete' onClick={deleteAction} />
)

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
    isFetching: postContainer.isFetching,
  }))
)(Post)
