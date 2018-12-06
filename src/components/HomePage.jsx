import React from 'react'
import styled from 'styled-components'

const Boxed = styled.section`
  max-width: 935px;
  margin: auto;
  padding-top: ${75 + 30}px;
`

const Home = () => <Boxed>This is the home page</Boxed>

export default Home
