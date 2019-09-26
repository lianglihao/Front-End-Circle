import React from 'react';
import Loadable from 'react-loadable';
import { Spin } from 'antd'

const loadingComponent = ({error, pastDelay}) => {
  if (error) {
    return <div>Error!</div> // 加载错误提示
  } else if (pastDelay) {
    return <div>loading<Spin size="large" /></div>
  } else {
    return null // 加载时间短于pastDelay（默认200ms）则不显示Loading动画,防止闪烁
  }
}
// 通用的过场组件
// const loadingComponent = () => {
//   return (
//     <div>loading<Spin size="large" /></div>
//   )
// }

// 过场组件默认采用通用的，若传入了loading，则采用传入的过场组件
export default (loader, loading = loadingComponent) => {
  return Loadable({
    loader,
    loading,
    pastDelay: 1000
  });
}
