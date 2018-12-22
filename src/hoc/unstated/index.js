import React from 'react'
import { Subscribe } from 'unstated'
import AuthContainer from '../../containers/AuthContainer'
import PostContainer from '../../containers/PostContainer'

export const withAuth = Component => props => (
  <Subscribe to={[AuthContainer]}>
    {authContainer => <Component authContainer={authContainer} {...props} />}
  </Subscribe>
)

export const withPost = Component => props => (
  <Subscribe to={[PostContainer]}>
    {postContainer => <Component postContainer={postContainer} {...props} />}
  </Subscribe>
)
