<template>
  <div class="setting-container">
    <Tabs v-model:activeKey="activeKey" @change="handleTabChange">
      <TabPane
        v-for="item in menus"
        :key="'/settings/' + item.path"
        :tab="item.meta && item.meta.title"
      >
        <router-view />
      </TabPane>
    </Tabs>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
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
      const activeKey = ref<String>(path);

      asyncRoutes.forEach((ele) => {
        if (ele.name === 'Settings') {
          menus = ele.children ? ele.children : [];
        }
      });

      const handleTabChange = (e: string) => {
        go(e);
      };

      return {
        menus,
        handleTabChange,
        activeKey,
      };
    },
  });
</script>

<style lang="less" scoped>
  .setting-container {
    background: #ffffff;
    border-radius: 10px;
  }
</style>
