import type { AppRouteModule } from '@/router/types';

const analysis: AppRouteModule = {
  path: '/analysis',
  name: 'Analysis',
  component: () => import('@/views/Analysis.vue'),
  meta: {
    icon: 'FundOutlined',
    title: '分析页',
  },
};

export default analysis;
