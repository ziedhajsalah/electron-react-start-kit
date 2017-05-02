/* eslint flowtype-errors/show-errors: 0 */
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route } from 'react-router'
import App from './containers/App'
import HomePage from './containers/HomePage'
import Header from './components/Header'
import Signup from './components/SignUp'
import Signin from './components/Signin'
import Feature from './components/Feature'

export default () => (
  <Router>
    <App>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/signup' component={Signup} />
        <Route path='/signin' component={Signin} />
        <Route path='/feature' component={Feature} />
      </Switch>
    </App>
  </Router>
)
