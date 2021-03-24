<template>
  <Form :rules="rules" :model="formState" v-bind="layout" labelAlign="right">
    <FormItem required has-feedback label="旧密码" name="oldPassword">
      <Input v-model:value="formState.oldPassword" type="password" />
    </FormItem>
    <FormItem required has-feedback label="新密码" name="password">
      <Input v-model:value="formState.password" type="password" />
    </FormItem>
    <FormItem required has-feedback label="确认新密码" name="confirmPassword">
      <Input v-model:value="formState.confirmPassword" type="password" />
    </FormItem>
    <FormItem :wrapperCol="{ offset: 4 }">
      <Button type="primary">确定</Button>
    </FormItem>
  </Form>
</template>

<script lang="ts">
  import { defineComponent, reactive, UnwrapRef } from 'vue';
  import { RuleObject } from 'ant-design-vue/es/form/interface';
  import { Form, Input, Button } from 'ant-design-vue';

  interface FormState {
    oldPassword: string;
    password: string;
    confirmPassword: string;
  }

  export default defineComponent({
    name: 'ChangePassword',
    components: {
      Form,
      FormItem: Form.Item,
      Input,
      Button,
    },
    setup() {
      const formState: UnwrapRef<FormState> = reactive({
        password: '',
        confirmPassword: '',
        oldPassword: '',
      });

      const layout = {
        labelCol: { span: 4 },
      };

      const validateOldPassword = async (rule: RuleObject, value: string) => {
        console.log(value);
        if (value === '') {
          return Promise.reject('请输入旧密码');
        }
        return Promise.resolve();
      };

      const validatePassword = async (rule: RuleObject, value: string) => {
        if (value === '') {
          return Promise.reject('请输入新的密码');
        }
        return Promise.resolve();
      };

      const validateConfirmPassword = async (rule: RuleObject, value: string) => {
        console.log(value);
        if (value === '') {
          return Promise.reject('请确认新的密码');
        } else if (value !== formState.password) {
          return Promise.reject('您输入的两次新密码不一致');
        } else {
          return Promise.resolve();
        }
      };

      const rules = {
        password: [{ validator: validatePassword, trigger: 'change' }],
        confirmPassword: [{ validator: validateConfirmPassword, trigger: 'change' }],
        oldPassword: [{ validator: validateOldPassword, trigger: 'change' }],
      };

      return {
        formState,
        rules,
        layout,
      };
    },
  });
</script>
