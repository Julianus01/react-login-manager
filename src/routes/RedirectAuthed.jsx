import React from 'react'
import { withAuth } from '../hoc/unstated'
import { Redirect } from 'react-router-dom'
import NoNavRoute from './NoNavRoute'

export default withAuth(({ authContainer, ...rest }) => {
  if (authContainer.state.user)
    return <Redirect to='/posts' />
    
  return <NoNavRoute {...rest} />
})
