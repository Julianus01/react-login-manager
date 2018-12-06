import React from 'react'
import LandingPage from '../components/LandingPage'
import LoginPage from '../components/LoginPage'
import HomePage from '../components/HomePage'

export const routes = [
  {
    path: '/',
    exact: true,
    hideNav: true,
    component: LandingPage,
  },
  {
    path: '/login',
    exact: true,
    hideNav: true,
    component: LoginPage,
  },
  {
    path: '/home',
    exact: true,
    component: HomePage,
  },
  {
    path: '*',
    hideNav: true,
    component: () => <div>Not found, sorry</div>,
  },
]
