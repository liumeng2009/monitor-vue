<template>
  <Header :class="`${prefixCls}`">
    <img :src="logo" alt="logo" :class="`${prefixCls}-logo`" />
    <div :class="`${prefixCls}-action`">
      <UserDropDown />
      <!--
      <FullScreen :class="`${prefixCls}-action__item fullscreen-item`" /> -->
    </div>
  </Header>
</template>

<script>
  import { defineComponent } from 'vue';
  import { Layout } from 'ant-design-vue';
  import { useDesign } from '@/hooks/web/useDesign';

  import { UserDropDown } from './components';

  const logo = require('@/assets/images/layout/title.png');

  export default defineComponent({
    name: 'LayoutHeader',
    components: {
      Header: Layout.Header,
      UserDropDown,
    },
    setup() {
      const { prefixCls } = useDesign('layout-header');

      return {
        prefixCls,
        logo,
      };
    },
  });
</script>

<style lang="less">
  @import './index.less';
</style>
