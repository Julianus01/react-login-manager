import React from 'react'
import { Subscribe } from 'unstated'
import AuthContainer from '../../containers/AuthContainer'

export const withAuth = Component => props => (
  <Subscribe to={[AuthContainer]}>
    {auth => <Component auth={auth} {...props} />}
  </Subscribe>
)
