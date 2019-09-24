import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

// pages
import Home from './pages/Home/home'
import Login from './pages/Login/Login'
import Notfound from './pages/Notfound/404'

// utils
import { isLogin } from './utils/isLogin'

function BasicRoute() {
  return (
    <Router>
      {/* exact 完全匹配路径 */}
      <Switch>
        <Route exact
          path="/"
          render={() =>
            (isLogin() ? <Home /> : <Redirect to="/login" />)
          }
        />
        <Route component={Login}
          exact
          path="/login"
        />
        <Route component={Notfound} />
      </Switch>
    </Router>
  )
}

export default BasicRoute
