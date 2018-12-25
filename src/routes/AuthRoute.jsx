import React from 'react'
import NavRoute from './NavRoute'
import { withAuthContainer } from '../hoc/unstated'
import { Redirect } from 'react-router-dom'

export default withAuthContainer(({ authContainer, ...rest }) => {
  if (!authContainer.state.user) return <Redirect to='/' />

  return <NavRoute {...rest} />
})
