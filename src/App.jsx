import React from 'react'
import Routes from './routes'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'unstated'

const App = () => (
  <Provider>
    <Router>
     <Routes />
    </Router>
  </Provider>
)

export default App
