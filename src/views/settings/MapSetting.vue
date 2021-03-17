<template>
  <div class="about">
    <Row>
      <Col :span="4">
        <List :bordered="true">
          <ListItem><AlertOutlined draggable="true" style="font-size: 20px" /></ListItem>
          <ListItem><AlertOutlined draggable="true" style="font-size: 20px" /></ListItem>
          <ListItem><AlertOutlined draggable="true" style="font-size: 20px" /></ListItem>
        </List>
      </Col>
      <Col :span="20">
        <div class="map-wrapper" @drop="drop" @dragover="allowDrop">
          <img :src="MapPng" alt="map" />
        </div>
      </Col>
    </Row>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { Row, Col, List } from 'ant-design-vue';
  import { AlertOutlined } from '@ant-design/icons-vue';
  import * as MapPng from '@/assets/images/map.png';
  import { DropEvent } from 'node_modules/ant-design-vue/lib/tree/Tree';

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
      const drop = (e: DropEvent) => {
        console.log(e);
      };

      const allowDrop = (e: DragEvent) => {
        e.preventDefault();
        // console.log(e);
      };
      return {
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
