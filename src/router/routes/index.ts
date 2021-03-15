import type { AppRouteRecordRaw, AppRouteModule } from '@/router/types';
const LAYOUT = () => import('@/layouts/default/index.vue');

const files = require.context('./modules', true, /\.ts$/, 'sync');

const routeModuleList: AppRouteModule[] = [];

files.keys().forEach((key) => {
  routeModuleList.push(files(key).default || files(key));
});

export const asyncRoutes = [...routeModuleList];

export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: '/analysis',
  component: LAYOUT,
  meta: {
    title: 'Root',
  },
  children: [...asyncRoutes],
};

/*
export const LoginRoute: AppRouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/user/login/index.vue'),
  meta: {
    title: '登录',
  },
}; */

// 404 on a page
export const PAGE_NOT_FOUND_ROUTE: AppRouteRecordRaw = {
  path: '/:path(.*)*',
  name: 'ErrorPage',
  component: LAYOUT,
  meta: {
    title: '页面未找到',
  },
  children: [
    {
      path: '/:path(.*)*',
      name: 'ErrorPage',
      component: () => import('@/views/404.vue'),
      meta: {
        title: '页面未找到',
      },
    },
  ],
};

// 基础路由 不用权限
export const basicRoutes = [RootRoute, PAGE_NOT_FOUND_ROUTE];
