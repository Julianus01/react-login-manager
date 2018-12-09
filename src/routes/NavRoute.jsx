import React from 'react'
import { Route } from 'react-router-dom'
import Navbar from '../components/Navbar'

const NavRoute = props => (
  <React.Fragment>
    <Navbar />
    <Route {...props} />
  </React.Fragment>
)

export default NavRoute
