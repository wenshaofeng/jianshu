import React from 'react'
import Loadable from 'react-loadable';
import Loading from './my-loading-component';

const DetailLoadableComponent = Loadable({// 异步加载组件 详情页
  loader: () => import(/* webpackChunkName: "detailPage" */'../page/detail/index'),
  loading: Loading,
});

const LoginLoadableComponent = Loadable({// 异步加载组件 登录页
  loader: () => import(/* webpackChunkName: "LoginPage" */'../page/login/index'),
  loading: Loading,
})

export const LoadableDetail = (props) => {
  return <DetailLoadableComponent />;
}

export const LoadableLogin = (props) => {
  return <LoginLoadableComponent />;
}

