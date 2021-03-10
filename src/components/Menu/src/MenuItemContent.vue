<template>
  <span :class="`${prefixCls}-wrapper`">
    <!-- <Icon v-if="getIcon" :icon="getIcon" :size="18" :class="`${prefixCls}-wrapper__icon`" /> -->
    {{ item.meta && item.meta.icon }}
    {{ item.name }}
  </span>
</template>
<script lang="ts">
  import { computed, defineComponent } from 'vue';
  import type { PropType } from 'vue';
  import type { Menu } from '@/router/types';
  import { useDesign } from '@/hooks/web/useDesign';

  export default defineComponent({
    name: 'MenuItemContent',
    props: {
      item: {
        type: Object as PropType<Menu>,
        default: null,
      },
    },
    setup(props) {
      const { prefixCls } = useDesign('basic-menu-item-content');
      const getIcon = computed(() => props.item?.icon);
      console.log(props.item);
      return {
        prefixCls,
        getIcon,
      };
    },
  });
</script>
