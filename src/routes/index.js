// Components
import React from 'react'
import LandingPage from '../components/LandingPage'
import LoginPage from '../components/LoginPage'
import PostsPage from '../components/Posts'

// Custom routes
import AuthRoute from './AuthRoute'
import RedirectAuthed from './RedirectAuthed'
import NotFound from './NotFound'

import { Switch } from 'react-router-dom'

const Routes = () => (
  <Switch>
    <RedirectAuthed path='/' exact={true} component={LandingPage} />
    <RedirectAuthed path='/login' exact={true} component={LoginPage} />
    <AuthRoute path='/posts' exact={true} component={PostsPage} />
    <NotFound path='*' exact={true} component={NotFound} />
  </Switch>
)

export default Routes
