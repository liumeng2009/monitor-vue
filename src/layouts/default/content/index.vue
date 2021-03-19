<template>
  <div :class="`${prefixCls}`">
    <router-view>
      <template #default="{ Component, route }">
        <keep-alive v-if="route.meta.ignoreKeepAlive">
          <component :is="Component" v-bind="getKey(Component, route)" />
        </keep-alive>
        <component v-else :is="Component" v-bind="getKey(Component, route)" />
      </template>
    </router-view>
  </div>
</template>

<script lang="ts">
  import { useDesign } from '@/hooks/web/useDesign';
  import { defineComponent } from 'vue';
  import { getKey } from './useCache';

  export default defineComponent({
    name: 'PageLayout',
    setup() {
      const { prefixCls } = useDesign('layout-content');
      return {
        prefixCls,
        getKey,
      };
    },
  });
</script>
<style lang="less">
  @import url('./index.less');
</style>
