import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {

    componentDidMount() {
        console.log('生命周期：组件挂载后立即调用')
        // window.location.href = '/login'
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
