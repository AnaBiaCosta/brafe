import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './pages/App'
import UserProfile from './pages/UserProfile'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/profile" component={UserProfile} />
    </Switch>
  </BrowserRouter>, 
  document.getElementById('root')
)
