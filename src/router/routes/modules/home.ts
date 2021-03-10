import type { AppRouteModule } from '@/router/types';

import DefaultLayout from '@/layouts/default/index.vue';

const dashboard: AppRouteModule = {
  path: '/home',
  name: 'Home',
  component: DefaultLayout,
  redirect: '/home/welcome',
  meta: {
    icon: 'bx:bx-home',
    title: '首页',
  },
  children: [
    {
      path: 'welcome',
      name: 'Welcome',
      component: () => import('@/views/Home.vue'),
      meta: {
        title: '首页',
        affix: true,
        icon: 'bx:bx-home',
      },
    },
  ],
};

export default dashboard;
