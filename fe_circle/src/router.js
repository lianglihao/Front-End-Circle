import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import PrivateRoute from './routes/privateRoute';
// import loadable from './utils/loadable'
// import loadable from '@loadable/component'

// const Login = loadable(() => import('../pages/Login/Login'))
// const Notfound = loadable(() => import('../pages/Notfound/404'))

// pages
// import Home from './pages/Home/Home'
// import Login from './pages/Login/Login'
// import Notfound from './pages/Notfound/404'

// utils
// import { isLogin } from './utils/isLogin'

import { BasicsRouter, UnimpRouter } from './routes/myindex'

function BasicRoute() {

  return (
    <Router>
      {/* exact 完全匹配路径 */}
      <Switch>
        {/* <Route exact
          path="/"
          render={() =>
            (isLogin() ? <Home /> : <Redirect to="/login" />)
          }
        /> */}
        {BasicsRouter.map(item => (
          <PrivateRoute
            component={item.component}
            exact={item.exact}
            key={item.path}
            path={item.path}
          />
        ))}
        {/* <PrivateRoute
          component={Home}
          exact
          path="/"
        /> */}
        {UnimpRouter.map(item => (
          <Route
            component={item.component}
            exact={item.exact}
            key={item.path}
            path={item.path}
          />
        ))}
        {/* <Route component={loadable(() => import('./pages/Login/Login'))}
          exact
          path="/login"
        />
        <Route component={loadable(() => import('./pages/Notfound/404'))}
          path=""
        /> */}
      </Switch>
    </Router>
  )
}

export default BasicRoute
