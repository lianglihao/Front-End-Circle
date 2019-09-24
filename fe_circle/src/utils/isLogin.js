function isLogin() {
  // 目前测试用，给localStorage设置‘logon’为字符串‘1’
  if(localStorage.getItem('login') === '1') {
    return true
  } else {
    return false
  }
}

export { isLogin }
