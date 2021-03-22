<template>
  <div>
    <Row :gutter="8">
      <Col :xxl="{ span: 4 }" :xl="{ span: 6 }" :lg="{ span: 8 }" :md="{ span: 12 }">
        <div class="title selected">
          <i></i>
          修改密码
        </div>
        <div class="title">
          <i></i>
          预警通知
        </div>
      </Col>
      <Col :xxl="{ span: 20 }" :xl="{ span: 18 }" :lg="{ span: 16 }" :md="{ span: 12 }">
        <router-view />
      </Col>
    </Row>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { Row, Col } from 'ant-design-vue';
  export default defineComponent({
    name: 'CommonSetting',
    components: {
      Row,
      Col,
    },
  });
</script>

<style lang="less" scoped>
  .title {
    padding: 4px 54px;
    cursor: pointer;

    &.selected {
      .title-bg();
    }
  }
</style>
