// Components
import React from 'react'
import LandingPage from '../components/LandingPage'
import LoginPage from '../components/LoginPage'
import HomePage from '../components/HomePage'

// Custom routes
import AuthRoute from './AuthRoute'
import NavRoute from './NavRoute'

import { Switch } from 'react-router-dom'

const Routes = () => (
  <Switch>
    <AuthRoute path='/home' exact={true} component={HomePage} />
    <NavRoute path='/' exact={true} hideNav={true} component={LandingPage} />
    <NavRoute path='/login' exact={true} hideNav={true} component={LoginPage} />
  </Switch>
)

export default Routes
