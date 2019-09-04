import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

// pages
import Home from './pages/home/home'
import Login from './pages/login/login'
import Notfound from './pages/notfound/404'

// utils
import { isLogin } from './utils/isLogin'

function BasicRoute() {
    return (
        <Router>
            {/* exact 完全匹配路径 */}
            <Switch>
                <Route exact path="/" render={() => 
                    (isLogin() ? <Home /> : <Redirect to="/login" />)
                } />
                <Route exact path="/login" component={ Login } />
                <Route component={ Notfound } />
            </Switch>
        </Router>
    )
}

export default BasicRoute
