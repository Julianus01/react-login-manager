import React from 'react'
import NavRoute from './NavRoute'
import { withAuthContainer } from '../unstated/hoc'
import { Redirect } from 'react-router-dom'

export default withAuthContainer(({ authContainer, ...rest }) => {
  if (!authContainer.state.user) return <Redirect to='/' />

  return <NavRoute {...rest} />
})
