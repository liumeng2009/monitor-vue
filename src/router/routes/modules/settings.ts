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
      path: 'common',
      name: 'Common',
      component: () => import('@/views/settings/CommonSetting.vue'),
      redirect: '/settings/common/warning',
      meta: {
        title: '基本配置',
        icon: 'SettingOutlined',
      },
      children: [
        {
          path: 'changepw',
          name: 'ChangePw',
          component: () => import('@/views/settings/ChangePassword.vue'),
          meta: {
            title: '修改密码',
            icon: 'LockOutlined',
          },
        },
        {
          path: 'warning',
          name: 'Warning',
          component: () => import('@/views/settings/WarningSetting.vue'),
          meta: {
            title: '预警设置',
            icon: 'WarningOutlined',
          },
        },
      ],
    },
    {
      path: 'map',
      name: 'Map',
      component: () => import('@/views/settings/MapSetting.vue'),
      meta: {
        title: '地图配置',
        icon: 'EnvironmentOutlined',
      },
    },
  ],
};

export default settings;
