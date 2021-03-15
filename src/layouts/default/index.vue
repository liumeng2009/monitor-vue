<template>
  <Layout>
    <LayoutHeader />
    <Layout>
      <!-- <LayoutSider /> -->
      <LayoutContent />
    </Layout>
    <Footer>尾部区域</Footer>
  </Layout>
</template>

<script>
  import { defineComponent } from 'vue';
  import { Layout } from 'ant-design-vue';
  import LayoutHeader from './header/index.vue';
  import LayoutContent from './content/index.vue';

  export default defineComponent({
    name: 'DefaultLayout',
    components: {
      Layout,
      LayoutHeader,
      LayoutContent,
      Footer: Layout.Footer,
    },
    setup() {
      console.log('---layout index created---');
    },
  });
</script>
