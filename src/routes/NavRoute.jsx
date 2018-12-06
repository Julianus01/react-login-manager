import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import Navbar from '../components/Navbar'

const NavRoute = ({ hideNav, ...rest }) => (
  <React.Fragment>
    {hideNav ? null : <Navbar />}
    <Route {...rest} />
  </React.Fragment>
)

NavRoute.propTypes = {
  hideNav: PropTypes.bool,
  component: PropTypes.func.isRequired,
}

export default NavRoute
