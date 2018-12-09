import React from 'react'
import styled from 'styled-components'
import { withAuth } from '../hoc/unstated'

const Boxed = styled.section`
  max-width: 935px;
  margin: auto;
  padding-top: ${75 + 30}px;
`

const Home = props => {
  return <Boxed>This is the home page
    <div>{props.auth.state.user.email}</div>
  </Boxed>
}

// export default testHOCC(Home)
export default withAuth(Home)
