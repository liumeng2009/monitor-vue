<template>
  <div :class="[prefixCls]">
    <img src="require('@/assets/images/logo.png')" alt="logo" />
    <div :class="`${prefixCls}__title`" v-show="showTitle">
      {{ title }}
    </div>
  </div>
</template>

<script lang="ts">
  import { useDesign } from '@/hooks/web/useDesign';
  import { useGlobSetting } from '@/hooks/setting';
  import { useGo } from '@/hooks/web/usePage';
  import { propTypes } from '@/utils/propTypes';
  import { defineComponent } from 'vue';
  import { PageEnum } from '@/enums/pageEnum';
  export default defineComponent({
    name: 'AppLogo',
    props: {
      showTitle: propTypes.bool.def(true),
    },
    setup() {
      const { prefixCls } = useDesign('app-logo');
      const { go } = useGo();
      const { title } = useGlobSetting();

      function handleGoHome(): void {
        go(PageEnum.BASE_HOME);
      }

      return {
        handleGoHome,
        title,
        prefixCls,
      };
    },
  });
</script>

<style></style>
