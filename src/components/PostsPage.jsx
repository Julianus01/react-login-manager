import React from 'react'
import { withAuthContainer, withPostContainer } from '../unstated/hoc'
import { compose } from 'recompose'
import PostsList from './Posts/PostsList'
import styled from 'styled-components'

class PostsPage extends React.Component {
  async componentDidMount() {
    const { postContainer } = this.props
    const { uid } = this.props.authContainer.state.user

    await postContainer.getPosts(uid)
    this.setState({ isFetching: false })
  }

  render() {
    const { postContainer } = this.props
    const { user } = this.props.authContainer.state

    // if (postContainer.state.isFetching) return <SContainer>Loading...</SContainer>
    // if (postContainer.state.isFetching)
    //   return (
    //     <React.Fragment>
    //       {Array.from({ length: 5 }, (item, index) => (
    //         <Card loading={true} key={index} />
    //       ))}
    //     </React.Fragment>
    //   )

    // console.log('PAGE render')
    return (
      <SContainer>
        This is the home page
        <div>{user.email}</div>
        <PostsList posts={postContainer.state.posts} />
        <br />
        <button onClick={this.createPost(user.uid)}>Add to list</button>
        <button onClick={this.refresh(user.uid)}>Refresh</button>
      </SContainer>
    )
  }

  createPost = uid => async () => {
    const { postContainer } = this.props
    console.log('Creation not implemented with MongoDB')
    // await postContainer.addPost(uid)
  }

  refresh = uid => async () => {
    const { postContainer } = this.props
    await postContainer.getPosts(uid)
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
