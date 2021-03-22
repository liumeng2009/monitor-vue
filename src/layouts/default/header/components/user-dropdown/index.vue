<template>
  <Dropdown placement="bottomLeft">
    <!-- 
    <span :class="[prefixCls]">
      <img :class="`@{prefixCls}__header`" :src="userAvatar" alt="" />
      <span :class="`@{prefixCls}__info`">管理员</span>
      <span :class="`@{prefixCls}__arrow`"></span>
    </span> -->
    <span :class="`${prefixCls}`">
      <SettingOutlined />
      <div :class="`${prefixCls}__arrow`"></div>
    </span>
    <template #overlay>
      <Menu @click="handleMenuClick">
        <!--
        <MenuItem key="settings" text="个人设置" icon="SettingOutlined" />
        <MenuItem key="loginOut" text="退出登录" icon="PoweroffOutlined" /> -->
        <MenuItem v-for="item of asyncRoutes" :key="item.path" :item="item" />
      </Menu>
    </template>
  </Dropdown>
</template>

<script lang="ts">
  import { computed, defineComponent } from 'vue';
  import { Dropdown, Menu } from 'ant-design-vue';
  import { SettingOutlined } from '@ant-design/icons-vue';

  import { userStore } from '@/store/modules/user';
  import MenuItem from './DropMenuItem.vue';
  import { useDesign } from '@/hooks/web/useDesign';

  import { asyncRoutes } from '@/router/routes/index';
  import { useGo } from '@/hooks/web/usePage';

  type MenuEvent = 'loginOut' | 'doc';

  export default defineComponent({
    name: 'UserDropdown',
    components: {
      Dropdown,
      Menu,
      MenuItem,
      SettingOutlined,
    },
    setup() {
      const { prefixCls } = useDesign('header-user-dropdown');
      const go = useGo();
      const userAvatar = require('@/assets/images/header.jpg');
      const getUserInfo = computed(() => {
        const { realName } = userStore.getUserInfoState || {};
        return realName;
      });

      function handleMenuClick(e: { key: MenuEvent; keyPath: String[] }) {
        const { keyPath } = e;
        let fullPath = '';
        for (let i = keyPath.length - 1; i > -1; i--) {
          fullPath =
            fullPath + (i === keyPath.length - 1 || keyPath[i] === '' ? '' : '/') + keyPath[i];
        }
        console.log(fullPath);
        go(fullPath);
      }

      return {
        getUserInfo,
        userAvatar,
        prefixCls,
        handleMenuClick,
        asyncRoutes,
      };
    },
  });
</script>

<style lang="less">
  @prefix-cls: ~'@{namespace}-header-user-dropdown';

  .@{prefix-cls} {
    display: flex;
    height: 30px;
    padding: 0 0 0 10px;
    padding-right: 10px;
    margin-top: 15px;
    overflow: hidden;
    font-size: 25px;
    cursor: pointer;
    align-items: center;

    &__arrow {
      width: 0px;
      height: 0px;
      margin-left: 12px;
      margin-top: 6px;
      .down-arrow(6px, @primary-color);
    }
  }
</style>
