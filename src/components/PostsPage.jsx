import React from 'react'
import { withAuthContainer, withPostContainer } from '../unstated/hoc'
import { compose } from 'recompose'
import PostsList from './Posts/PostsList'
import styled from 'styled-components'
import { Button } from 'antd'
import PostCreateModal from './Posts/PostCreateModal'

class PostsPage extends React.Component {
  state = {
    isCreateModalOpen: false,
    test: false,
  }

  async componentDidMount() {
    const { postContainer } = this.props
    const { uid } = this.props.authContainer.state.user

    await postContainer.getPosts(uid)
    this.setState({ isFetching: false })
  }

  render() {
    const { postContainer } = this.props
    const { user } = this.props.authContainer.state

    // console.log('PAGE render')
    return (
      <SContainer>
        <Button
          style={{ marginBottom: 16 }}
          type='primary'
          onClick={this.showCreateModal}
        >
          New Post
        </Button>
        <PostCreateModal
          visible={this.state.isCreateModalOpen}
          closeModal={this.closeCreateModal}
        />

        <PostsList posts={postContainer.state.posts} />
        <br />
        <button onClick={this.refresh(user.uid)}>Refresh</button>
      </SContainer>
    )
  }

  // Move to modal
  // createPost = uid => async () => {
  //   const { postContainer } = this.props
  //   console.log('Creation not implemented with MongoDB')
  //   // await postContainer.addPost(uid)
  // }

  refresh = uid => async () => {
    const { postContainer } = this.props
    await postContainer.getPosts(uid)
  }

  showCreateModal = () => {
    this.setState({ isCreateModalOpen: true })
  }

  closeCreateModal = () => {
    this.setState({ isCreateModalOpen: false })
  }
}

const SContainer = styled.div`
  max-width: 600px;
  margin: auto;
`

export default compose(
  withAuthContainer,
  withPostContainer
)(PostsPage)
