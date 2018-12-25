import React from 'react'
import { Subscribe } from 'unstated'
import AuthContainer from '../../containers/AuthContainer'
import PostContainer from '../../containers/PostContainer'

export const withAuthContainer = Component => props => (
  <Subscribe to={[AuthContainer]}>
    {authContainer => <Component authContainer={authContainer} {...props} />}
  </Subscribe>
)

export const withPostContainer = Component => props => (
  <Subscribe to={[PostContainer]}>
    {postContainer => <Component postContainer={postContainer} {...props} />}
  </Subscribe>
)
