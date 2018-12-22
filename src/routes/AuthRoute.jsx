import React from 'react'
import NavRoute from './NavRoute'
import { withAuth } from '../hoc/unstated'
import { Redirect } from 'react-router-dom'

export default withAuth(({ authContainer, ...rest }) => {
  if (!authContainer.state.user) return <Redirect to='/' />

  return <NavRoute {...rest} />
})
