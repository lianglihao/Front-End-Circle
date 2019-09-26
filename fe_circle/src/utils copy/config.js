const HOST = {
  dev: 'http://120.55.69.240:8654',
  fat: 'https://fat-apm-server.hellobike.cn',
  uat: 'https://uat-apm-server.hellobike.cn',
  pt: 'https://pt-apm-server.hellobike.cn',
  pro: 'https://apm-server.hellobike.cn'
}

export const API =
  /* eslint-disable-next-line */
  process.env.NODE_ENV !== 'development' ? `${HOST[APP_ENV]}` : '/api'
export const REQUEST_TIMEOUT = 15000
export const NOTIFICATION_DURATION = 4
export const HTTP_STATUS_DESC = {
  401: '登录状态过期, 需要重新登录',
  403: '没有相关权限',
  404: '请求地址错误或后端接口未部署',
  500: '后端服务有未处理的错误',
  502: '后端接口无响应',
  504: '请求超时, 可能是网络问题, 请稍后重试'
}

export const NAV_LINK = {
  '管理中心': '/#/app/management/monitorlist',
  '应用列表': '/#/app/management/monitorlist',
  '报告管理': '/#/app/management/reportlist',
  '监控中心': '/#/app/monitor/performance',
  '性能监控': '/#/app/monitor/performance'
}
