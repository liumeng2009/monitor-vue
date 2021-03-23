<template>
  <Form>
    <FormItem label="手机号" :labelCol="{ span: 4 }" labelAlign="right">
      <Input />
    </FormItem>
    <FormItem label="邮箱" labelCol="3" labelAlign="right">
      <Input />
    </FormItem>
  </Form>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { Form, Input } from 'ant-design-vue';
  export default defineComponent({
    name: 'WarningSetting',
    components: {
      Form,
      FormItem: Form.Item,
      Input,
    },
  });
</script>
