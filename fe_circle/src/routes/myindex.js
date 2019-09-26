// import Home from '../pages/Home/Home'
// import loadable from '../utils/loadable'
import loadable from '@loadable/component'

// const Home = loadable(() => import('../pages/Home/Home'))

export const BasicsRouter = [
  {
    path: '/',
    exact: true,
    component: loadable(() => import('../pages/Home/Home'))
  }
  // {
  //   path: '/login',
  //   exact: true,
  //   component: () => import('../pages/Login/Login')
  // }
]

export const UnimpRouter = [
  {
    path: '/login',
    exact: true,
    component: loadable(() => import('../pages/Login/Login'))
  },
  {
    path: '',
    exact: false,
    component: loadable(() => import('../pages/Notfound/404'))
  }
]
