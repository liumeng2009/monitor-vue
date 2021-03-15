<template>
  <Menu :selectedKeys="selectedKeys" :mode="'inline'" @click="handleMenuClick">
    <template v-for="item in items" :key="item.path">
      <BasicSubMenuItem :item="item" />
    </template>
  </Menu>
</template>

<script lang="ts">
  import { defineComponent, reactive, toRefs } from 'vue';
  import type { PropType } from 'vue';
  import { Menu } from 'ant-design-vue';
  import type { Menu as MenuType } from '@/router/types';
  import BasicSubMenuItem from './BasicSubMenuItem.vue';
  import { MenuState } from './types';

  export default defineComponent({
    name: 'BasicMenu',
    components: {
      Menu,
      BasicSubMenuItem,
    },
    props: {
      items: {
        type: Array as PropType<MenuType[]>,
        default: () => [],
      },
    },
    setup() {
      const menuState = reactive<MenuState>({
        openKeys: [],
        selectedKeys: [],
      });

      function handleMenuClick({ key }: { key: string; keyPath: string[] }) {
        console.log(key);
        menuState.selectedKeys = [key];
      }

      return {
        handleMenuClick,
        ...toRefs(menuState),
      };
    },
  });
</script>

<style></style>
