import React from 'react'
import styled from 'styled-components'
import { withAuth } from '../hoc/unstated'
import { withRouter } from 'react-router-dom'

const Boxed = styled.section`
  max-width: 935px;
  margin: auto;
  padding-top: ${75 + 30}px;
`

const Home = props => {
  const { auth, history } = props

  const logout = async () => {
    await auth.logout()
    console.log(auth.state.user)
    history.push('/login')
  }

  return (
    <Boxed>
      This is the home page
      <div>{auth.state.user.email}</div>
      <button onClick={logout}>Logout</button>
    </Boxed>
  )
}

// export default testHOCC(Home)
export default withRouter(withAuth(Home))
