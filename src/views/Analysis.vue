<template>
  <div class="home-container">
    <div class="side-wrapper left">
      <i class="arrow"></i>
      <div class="panel">
        <div class="title">
          <div class="title-wrapper"><i></i> 总体态势 </div>
        </div>
        <div class="content">
          <div class="content-wrapper">
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
          </div>
        </div>
      </div>
      <div class="panel">
        <div class="title">
          <div class="title-wrapper"><i></i>设备异常记录</div>
        </div>
        <div class="content">123</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Home',
  });
</script>

<style lang="less" scoped>
  @import url('./analysis.less');
</style>
