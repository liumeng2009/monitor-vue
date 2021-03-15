import type { AppRouteModule } from '@/router/types';

const settings: AppRouteModule = {
  path: '/settings',
  name: 'Settings',
  redirect: '/settings/map',
  component: () => import('@/views/settings/index.vue'),
  meta: {
    icon: 'SettingOutlined',
    title: '设置',
  },
  children: [
    {
      path: 'map',
      name: 'Map',
      component: () => import('@/views/settings/MapSetting.vue'),
      meta: {
        title: '地图配置',
        icon: 'SettingOutlined',
      },
    },
    {
      path: 'common',
      name: 'Common',
      component: () => import('@/views/settings/CommonSetting.vue'),
      meta: {
        title: '基本配置',
        icon: 'SettingOutlined',
      },
    },
  ],
};

export default settings;
