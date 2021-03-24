<template>
  <Form>
    <FormItem label="通知方式" :labelCol="{ span: 4 }" labelAlign="right">
      <CheckboxGroup v-model:value="currentNoticeType">
        <Checkbox v-for="(notice, index) in noticeTypes" :key="index" :value="notice.value">
          {{ notice.label }}
        </Checkbox>
      </CheckboxGroup>
    </FormItem>
    <FormItem label="预警类型" :labelCol="{ span: 4 }" labelAlign="right">
      <CheckboxGroup v-model:value="currentWarningType">
        <Checkbox v-for="(warning, index) in warningTypes" :key="index" :value="warning.value">
          {{ warning.label }}
        </Checkbox>
      </CheckboxGroup>
    </FormItem>
    <FormItem label="手机号" :labelCol="{ span: 4 }" labelAlign="right">
      <Input />
    </FormItem>
    <FormItem label="邮箱" :labelCol="{ span: 4 }" labelAlign="right">
      <Input />
    </FormItem>
  </Form>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Form, Input, Checkbox } from 'ant-design-vue';
  import { UIConfig } from '@/types/config';
  export default defineComponent({
    name: 'WarningSetting',
    components: {
      Form,
      FormItem: Form.Item,
      Input,
      Checkbox,
      CheckboxGroup: Checkbox.Group,
    },
    setup() {
      const noticeTypes: UIConfig[] = [
        { label: '短信', value: 'sms' },
        { label: '邮件', value: 'email' },
      ];
      const currentNoticeType = ref([]);

      const warningTypes: UIConfig[] = [
        { label: '设备异常', value: 'equip' },
        { label: '灯光异常', value: 'lamp' },
      ];
      const currentWarningType = ref([]);

      return {
        noticeTypes,
        currentNoticeType,
        warningTypes,
        currentWarningType,
      };
    },
  });
</script>
