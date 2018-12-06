import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'

const Boxed = styled.section`
  max-width: 935px;
  margin: auto;
  padding-top: ${75 + 30}px;
`

const Home = () => (
  <React.Fragment>
    <Boxed>This is the home page</Boxed>
  </React.Fragment>
)

export default Home
