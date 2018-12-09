import React from 'react'
import NavRoute from './NavRoute'
import { withAuth } from '../hoc/unstated'
import { Redirect } from 'react-router-dom'

const AuthRoute = props => {
  if (!props.auth.state.user) return <Redirect to='/login' />

  return <NavRoute {...props} />
}

export default withAuth(AuthRoute)
