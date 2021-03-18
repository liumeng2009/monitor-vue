<template>
  <div class="about">
    <Row :gutter="8">
      <Col :span="4">
        <List :bordered="true">
          <ListItem><AlertOutlined draggable="true" style="font-size: 20px" /></ListItem>
          <ListItem><AlertOutlined draggable="true" style="font-size: 20px" /></ListItem>
          <ListItem><AlertOutlined draggable="true" style="font-size: 20px" /></ListItem>
        </List>
      </Col>
      <Col :span="20">
        <div class="map-wrapper" @drop="drop" @dragover="allowDrop">
          <img :src="MapPng" alt="map" ref="imageRef" />
        </div>
      </Col>
    </Row>
  </div>
</template>

<script lang="ts">
  import { defineComponent, nextTick, ref } from 'vue';
  import { Row, Col, List } from 'ant-design-vue';
  import { AlertOutlined } from '@ant-design/icons-vue';
  import { DropEvent } from 'node_modules/ant-design-vue/lib/tree/Tree';

  const MapPng = require('@/assets/images/map.png');

  export default defineComponent({
    name: 'MapSetting',
    components: {
      Row,
      Col,
      List,
      ListItem: List.Item,
      AlertOutlined,
    },
    setup() {
      const imageRef = ref<HTMLImageElement | null>(null);

      nextTick(() => {
        imageRef?.value?.addEventListener('load', function (e: Event): any {
          const path = e.composedPath();
          console.log(path);
          console.log(e);
        });
      });

      console.log(imageRef);
      const drop = (e: DropEvent) => {
        console.log(e);
      };

      const allowDrop = (e: DragEvent) => {
        e.preventDefault();
        // console.log(e);
      };
      return {
        imageRef,
        MapPng,
        drop,
        allowDrop,
      };
    },
  });
</script>

<style lang="less" scoped>
  .map-wrapper {
    width: 100%;
    height: 100%;
    border: blue 1px solid;

    img {
      height: 100%;
    }
  }
</style>
