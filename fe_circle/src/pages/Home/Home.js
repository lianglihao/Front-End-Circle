import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {

  componentDidMount() {
    // document.title = '首页'
  }

  componentWillUnmount() {
    // this.destroy()
  }

  render() {
    return (
      <Fragment>
        <p>home</p>
        <Link to="/login">goLogin</Link>
      </Fragment>
    )
  }
}

export default Home
