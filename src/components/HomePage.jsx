import React from 'react'
import styled from 'styled-components'
import { withAuth } from '../hoc/unstated'

const Boxed = styled.section`
  max-width: 935px;
  margin: auto;
  padding-top: ${75 + 30}px;
`

const Home = props => (
  <Boxed>
    This is the home page
    <h4>User: {props.auth.state.user}</h4>
    <button onClick={() => props.auth.setNewUser('text')} />
  </Boxed>
)

// export default testHOCC(Home)
export default withAuth(Home)
