import React from 'react'
import { routes } from './routes'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import NavRoute from './routes/NavRoute'

const App = () => (
  <Router>
    <Switch>
      {routes.map(route => (
        <NavRoute key={route.path} {...route} />
      ))}
    </Switch>
  </Router>
)

export default App
