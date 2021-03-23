<template>
  <div class="setting-container">
    <Tabs v-model:activeKey="activeKey" @change="handleTabChange">
      <TabPane
        v-for="item in menus"
        :key="'/settings/' + item.path"
        :tab="item.meta && item.meta.title"
      >
        <div class="setting-wrapper" :style="{ height: wrapperHeight + 'px' }">
          <router-view :wrapperHeight="wrapperHeight" />
        </div>
      </TabPane>
    </Tabs>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, unref, onUnmounted } from 'vue';
  import { Tabs } from 'ant-design-vue';
  import { asyncRoutes } from '@/router/routes/index';
  import { AppRouteRecordRaw } from '@/router/types';
  import { useGo } from '@/hooks/web/usePage';
  import { useRouter } from 'vue-router';

  export default defineComponent({
    name: 'Settings',
    components: {
      Tabs,
      TabPane: Tabs.TabPane,
    },
    setup() {
      const go = useGo();
      const { currentRoute } = useRouter();

      let menus: AppRouteRecordRaw[] = [];

      const path = unref(currentRoute).path;
      let activeKey = '';
      if (path.indexOf('/settings/common') > -1) {
        activeKey = '/settings/common';
      } else if (path.indexOf('/settings/map') > -1) {
        activeKey = '/settings/map';
      }

      asyncRoutes.forEach((ele) => {
        if (ele.name === 'Settings') {
          menus = ele.children ? ele.children : [];
        }
      });

      const handleTabChange = (e: string) => {
        go(e);
      };

      const wrapperHeight = ref<Number>(0);

      const calWrapperHeight = (): void => {
        const windowHeight = window.document.documentElement.clientHeight;
        const headerHeight = 102;
        const contentPaddingHeight = 16;
        const tabHeader = 78;
        const tabContentPadding = 16;
        wrapperHeight.value =
          windowHeight - headerHeight - contentPaddingHeight * 2 - tabHeader - tabContentPadding;
      };

      calWrapperHeight();

      window.addEventListener('resize', calWrapperHeight, false);

      onUnmounted(() => {
        window.removeEventListener('resize', calWrapperHeight, false);
      });

      return {
        menus,
        handleTabChange,
        activeKey,
        wrapperHeight,
      };
    },
  });
</script>

<style lang="less" scoped>
  .setting-container {
    background: #ffffff;
    border-radius: 10px;

    .setting-wrapper {
      min-height: 600px;
      padding: 0px 48px 16px 48px;
      overflow-x: hidden;
      overflow-y: auto;
    }
  }
</style>
