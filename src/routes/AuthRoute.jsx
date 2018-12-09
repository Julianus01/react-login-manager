import React from 'react'
import NavRoute from './NavRoute'
import { withAuth } from '../hoc/unstated'

const AuthRoute = ({ hideNav, auth, ...rest }) => {
  if (!auth.state.user) return null

  return <NavRoute hideNav={hideNav} {...rest} />
}

export default withAuth(AuthRoute)
