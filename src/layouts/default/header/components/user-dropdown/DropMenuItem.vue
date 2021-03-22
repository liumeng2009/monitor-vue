<template>
  <SubMenu v-if="item.children && item.children.length > 0" :key="item.path">
    <template #title>
      <span class="flex items-center">
        <component :is="item.meta.icon" />
        <span>{{ item.meta.title }}</span>
      </span>
    </template>
    <template v-for="(itm, idx) in item.children" :key="idx">
      <SubMenu v-if="itm.children && itm.children.length > 0" :key="itm.path">
        <template #title>
          <span class="flex items-center">
            <component :is="itm.meta.icon" />
            <span>{{ itm.meta.title }}</span>
          </span>
        </template>
        <template v-for="(im, ix) in itm.children" :key="ix">
          <MenuItem :key="im.path" v-if="!im.meta.hideMenu">
            <span class="flex items-center">
              <component :is="im.meta.icon" />
              <span>{{ im.meta.title }}</span>
            </span>
          </MenuItem>
        </template>
      </SubMenu>
      <MenuItem v-else>
        <span class="flex items-center">
          <component :is="itm.meta.icon" />
          <span>{{ itm.meta.title }}</span>
        </span>
      </MenuItem>
    </template>
  </SubMenu>
  <MenuItem v-else>
    <span class="flex items-center">
      <component :is="item.meta.icon" />
      <span>{{ item.meta.title }}</span>
    </span>
  </MenuItem>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import { Menu } from 'ant-design-vue';
  import {
    SettingOutlined,
    FundOutlined,
    EnvironmentOutlined,
    LockOutlined,
    WarningOutlined,
  } from '@ant-design/icons-vue';
  import { Menu as MenuType } from '@/router/types';

  export default defineComponent({
    name: 'DropdownMenuItem',
    components: {
      MenuItem: Menu.Item,
      SubMenu: Menu.SubMenu,
      SettingOutlined,
      FundOutlined,
      EnvironmentOutlined,
      LockOutlined,
      WarningOutlined,
    },
    props: {
      item: {
        type: Object as PropType<MenuType>,
        default: () => {},
      },
    },
  });
</script>
