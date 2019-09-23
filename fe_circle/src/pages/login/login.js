import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

class Login extends Component {

  login() {
    localStorage.setItem('login', 1)
  }

  logout() {
    localStorage.removeItem('login')
  }

  render() {
    return (
      <Fragment>
        <p>Login</p>
        <Link to="/">goHome</Link>
        <button onClick={this.login}>登陆</button>
        <button onClick={this.logout}>退出</button>
      </Fragment>
    )
  }
}

export default Login
