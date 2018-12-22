import React from 'react'
import { Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import styled from 'styled-components'

export default props => (
  <React.Fragment>
    <Navbar />
    <Boxed>
      <Route {...props} />
    </Boxed>
  </React.Fragment>
)

const Boxed = styled.section`
  max-width: 935px;
  margin: auto;
  padding-top: ${75 + 30}px;
  padding-left: 16px;
  padding-right: 16px;
`
