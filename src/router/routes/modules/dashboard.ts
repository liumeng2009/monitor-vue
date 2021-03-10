import type { AppRouteModule } from '@/router/types';
import DefaultLayout from '@/layouts/default/index.vue';

const dashboard: AppRouteModule = {
  path: '/dashboard',
  name: 'Dashboard',
  redirect: '/dashboard/workbench',
  component: DefaultLayout,
  meta: {
    icon: 'bx:bx-home',
    title: 'Dashboard',
  },
  children: [
    {
      path: 'workbench',
      name: 'Workbench',
      component: () => import('@/views/About.vue'),
      meta: {
        title: '工作台',
      },
    },
    {
      path: 'analysis',
      name: 'Analysis',
      component: () => import('@/views/About.vue'),
      meta: {
        title: '分析页',
        ignoreKeepAlive: false,
      },
    },
  ],
};

export default dashboard;
