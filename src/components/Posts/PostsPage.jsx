import React from 'react'
import { withAuth, withPost } from '../../hoc/unstated'
import { compose } from 'recompose'
import PostsList from './PostsList'

class PostsPage extends React.Component {
  componentDidMount() {
    const { postContainer } = this.props
    const { uid } = this.props.authContainer.state.user

    postContainer.getPosts(uid)
  }

  render() {
    const { postContainer } = this.props
    const { user } = this.props.authContainer.state
    console.log('page render')

    if (!postContainer.state.posts.length) return <div>Loading...</div>

    return (
      <React.Fragment>
        This is the home page
        <div>{user.email}</div>
        <PostsList posts={postContainer.state.posts} />
        <br />
        <button
          onClick={() =>
            postContainer.addPost(user.uid, {
              title: 'new post',
            })
          }
        >
          Add to list
        </button>
      </React.Fragment>
    )
  }
}

export default compose(
  withAuth,
  withPost
)(PostsPage)
