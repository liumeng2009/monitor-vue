<template>
  <BasicMenu :items="menus" />
</template>

<script>
  import { defineComponent, unref } from 'vue';
  import { BasicMenu } from '@/components/Menu';
  import { useDesign } from '@/hooks/web/useDesign';
  import { useMenu } from './useLayoutMenu';
  export default defineComponent({
    name: 'LayoutMenu',
    components: {
      BasicMenu,
    },
    setup() {
      const { prefixCls } = useDesign('layout-menu');
      const { menuRef } = useMenu();
      console.log(useMenu());
      console.log(menuRef);
      const menus = unref(menuRef);
      console.log(menus);

      return {
        prefixCls,
        menus,
      };
    },
  });
</script>

<style></style>
