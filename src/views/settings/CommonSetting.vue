<template>
  <div>
    <Row :gutter="8">
      <Col :xxl="{ span: 4 }" :xl="{ span: 6 }" :lg="{ span: 8 }" :md="{ span: 12 }">
        <div
          :class="{ title: true, selected: path === '/settings/common/warning' }"
          @click="go('/settings/common/warning')"
        >
          <div class="title-wrapper">
            <i></i>
            预警通知
          </div>
        </div>
        <div
          :class="{ title: true, selected: path === '/settings/common/changepw' }"
          @click="go('/settings/common/changepw')"
        >
          <div class="title-wrapper">
            <i></i>
            修改密码
          </div>
        </div>
      </Col>
      <Col
        :xxl="{ span: 20 }"
        :xl="{ span: 18 }"
        :lg="{ span: 16 }"
        :md="{ span: 12 }"
        style="padding: 48px"
      >
        <router-view />
      </Col>
    </Row>
  </div>
</template>

<script lang="ts">
  import { defineComponent, unref } from 'vue';
  import { Row, Col } from 'ant-design-vue';
  import { useRouter } from 'vue-router';
  import { useGo } from '@/hooks/web/usePage';
  export default defineComponent({
    name: 'CommonSetting',
    components: {
      Row,
      Col,
    },
    setup() {
      const { currentRoute } = useRouter();
      const go = useGo();
      const path = unref(currentRoute).path;

      return {
        path,
        go,
      };
    },
  });
</script>

<style lang="less" scoped>
  .title {
    padding: 1px 54px;
    margin-bottom: 16px;
    cursor: pointer;

    .title-wrapper {
      height: 35px;
      line-height: 35px;
    }

    &.selected {
      .title-bg();
    }
  }
</style>
