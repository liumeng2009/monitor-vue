<template>
  <Sider ref="sideRef" breakpoint="lg" collapsible>
    <LayoutMenu />
  </Sider>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';

  import { Layout } from 'ant-design-vue';
  import LayoutMenu from '../menu/index.vue';

  import { useDesign } from '@/hooks/web/useDesign';
  export default defineComponent({
    name: 'LayoutSideBar',
    components: { Sider: Layout.Sider, LayoutMenu },
    setup() {
      const sideRef = ref<ElRef>(null);

      const { prefixCls } = useDesign('layout-sideBar');

      return {
        prefixCls,
        sideRef,
      };
    },
  });
</script>
