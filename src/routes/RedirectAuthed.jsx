import React from 'react'
import { withAuthContainer } from '../unstated/hoc'
import { Redirect } from 'react-router-dom'
import NoNavRoute from './NoNavRoute'

export default withAuthContainer(({ authContainer, ...rest }) => {
  if (authContainer.state.user)
    return <Redirect to='/posts' />
    
  return <NoNavRoute {...rest} />
})
