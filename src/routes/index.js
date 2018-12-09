// Components
import React from 'react'
import LandingPage from '../components/LandingPage'
import LoginPage from '../components/LoginPage'
import HomePage from '../components/HomePage'

// Custom routes
import AuthRoute from './AuthRoute'
import HomeIfAuthed from './HomeIfAuthed'

import { Switch } from 'react-router-dom'

const Routes = () => (
  <Switch>
    <HomeIfAuthed path='/' exact={true} component={LandingPage} />
    <HomeIfAuthed path='/login' exact={true} component={LoginPage} />

    <AuthRoute path='/home' exact={true} component={HomePage} />
  </Switch>
)

export default Routes
