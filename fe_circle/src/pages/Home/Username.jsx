import React, { Component, Fragment } from 'react'
// import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'

@inject('UserStore')
@observer
class Username extends Component {

  render() {
    const { UserStore } = this.props
    const { username } = UserStore

    return (
      <Fragment>
        <p>{username}</p>
      </Fragment>
    )
  }
}

export default Username
