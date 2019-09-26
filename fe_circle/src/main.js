import '@utils/polyfill'
import React from 'react'
import { render } from 'react-dom'
import ssoAuth from '@hb/sso-auth'
import Root from './Root'
import '@styles/index.scss'

const init = async() => {
  await ssoAuth.signIn()

  render(<Root />, document.getElementById('root'))
}

init()
