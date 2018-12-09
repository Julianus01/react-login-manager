import React from 'react'
import { withAuth } from '../hoc/unstated'
import { Redirect } from 'react-router-dom'
import NoNavRoute from './NoNavRoute'

const HomeIfAuthed = ({ auth, ...rest }) => {
  if (auth.state.user) return <Redirect to='/home' />

  return <NoNavRoute {...rest} />
}

export default withAuth(HomeIfAuthed)
