import React from 'react'
import { routes } from './routes'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import NavRoute from './routes/NavRoute'
import { Provider } from 'unstated'
import AuthContainer from './containers/AuthContainer'

const App = () => (
  <Provider inject={[AuthContainer]}>
    <Router>
      <Switch>
        {routes.map(route => (
          <NavRoute key={route.path} {...route} />
        ))}
      </Switch>
    </Router>
  </Provider>
)

export default App
