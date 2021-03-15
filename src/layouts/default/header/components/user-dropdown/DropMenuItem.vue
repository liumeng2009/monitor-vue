<template>
  <SubMenu v-if="item.children && item.children.length > 0" :key="item.path">
    <template #title>
      <span class="flex items-center">
        <component :is="item.meta.icon" />
        <span>{{ item.meta.title }}</span>
      </span>
    </template>
    <template v-for="(itm, idx) in item.children" :key="idx">
      <MenuItem :key="itm.path" v-if="!itm.meta.hideMenu">
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
  import { SettingOutlined, FundOutlined } from '@ant-design/icons-vue';
  // import Icon from '@/components/Icon/index';
  import { Menu as MenuType } from '@/router/types';

  export default defineComponent({
    name: 'DropdownMenuItem',
    components: {
      MenuItem: Menu.Item,
      SubMenu: Menu.SubMenu,
      SettingOutlined,
      FundOutlined,
    },
    props: {
      item: {
        type: Object as PropType<MenuType>,
        default: () => {},
      },
    },
  });
</script>

<style lang="less"></style>
