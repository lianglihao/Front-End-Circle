import { AsyncLoader } from 'react-utils-components'

export const baseRoutes = [
  {
    path: '/',
    exact: true,
    redirect: '/app/management'
  },
  {
    path: '/app',
    exact: false,
    component: AsyncLoader(() => import('@pages/App'))
  },
  {
    path: '/monitor',
    exact: false,
    component: AsyncLoader(() => import('@pages/Monitor'))
  }
]

export const appRoutes = [
  {
    path: '/app/management',
    exact: true,
    redirect: '/app/management/monitorlist'
  },
  {
    path: '/app/management/monitorlist',
    exact: true,
    component: AsyncLoader(() => import('@pages/Management/Monitormanage/List'))
  },
  {
    path: '/app/management/monitordetail',
    exact: true,
    component: AsyncLoader(() => import('@pages/Management/Monitormanage/Detail'))
  },
  {
    path: '/app/management/reportlist',
    exact: true,
    component: AsyncLoader(() => import('@pages/Management/Reportmanage/List'))
  },
  {
    path: '/app/management/reportdetail',
    exact: true,
    component: AsyncLoader(() => import('@pages/Management/Reportmanage/Detail'))
  },
  {
    path: '/app/monitor',
    exact: true,
    redirect: '/app/monitor/jvm'
  },
  {
    path: '/app/monitor/jvm',
    exact: true,
    component: AsyncLoader(() => import('@pages/Monitor/Jvm'))
  },
  {
    path: '/app/monitor/thread',
    exact: true,
    component: AsyncLoader(() => import('@pages/Monitor/Thread'))
  },
  {
    path: '/app/monitor/trace',
    exact: true,
    component: AsyncLoader(() => import('@pages/Monitor/Trace'))
  },
  {
    path: '/app/monitor/performance',
    exact: true,
    component: AsyncLoader(() => import('@pages/Monitor/Performance'))
  },
  {
    path: '/app/monitor/performance/detail',
    exact: true,
    component: AsyncLoader(() => import('@pages/Monitor/PerformanceDetail'))
  }
]

export const monitorRoutes = [
  {
    path: '/monitor',
    exact: true,
    redirect: '/monitor/jvm'
  },
  {
    path: '/monitor/jvm',
    exact: true,
    component: AsyncLoader(() => import('@pages/Monitor/Jvm'))
  },
  {
    path: '/monitor/thread',
    exact: true,
    component: AsyncLoader(() => import('@pages/Monitor/Thread'))
  },
  {
    path: '/monitor/performance',
    exact: true,
    component: AsyncLoader(() => import('@pages/Monitor/Performance'))
  },
  {
    path: '/monitor/performance/detail',
    exact: true,
    component: AsyncLoader(() => import('@pages/Monitor/PerformanceDetail'))
  }
]
