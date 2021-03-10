<template>
  <MenuItem>
    <!-- <MenuItem :class="getLevelClass"> -->
    <MenuItemContent v-bind="$props" :item="item" />
  </MenuItem>
</template>
<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import { Menu } from 'ant-design-vue';
  import { useDesign } from '@/hooks/web/useDesign';
  import { Menu as MenuType } from '@/router/types';

  import MenuItemContent from './MenuItemContent.vue';
  export default defineComponent({
    name: 'BasicMenuItem',
    components: { MenuItem: Menu.Item, MenuItemContent },
    props: {
      item: {
        type: Object as PropType<MenuType>,
        default: {},
      },
    },
    setup() // props
    {
      const { prefixCls } = useDesign('basic-menu-item');
      return {
        prefixCls,
      };
    },
  });
</script>
