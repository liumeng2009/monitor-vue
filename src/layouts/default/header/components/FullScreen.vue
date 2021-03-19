<template>
  <span @click="toggleFullscreen">
    <FullscreenOutlined v-if="!isFullscreen" />
    <FullscreenExitOutlined v-else />
  </span>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { useFullscreen } from '@/hooks/web/useFullScreen';
  import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons-vue';
  export default defineComponent({
    name: 'FullScreen',
    components: { FullscreenExitOutlined, FullscreenOutlined },

    setup() {
      const { toggleFullscreen, isFullscreenRef } = useFullscreen();

      return {
        isFullscreen: isFullscreenRef,
        toggleFullscreen,
      };
    },
  });
</script>
