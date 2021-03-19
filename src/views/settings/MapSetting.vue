<template>
  <div class="about">
    <Row :gutter="8">
      <Col :span="4">
        <List :bordered="true" :data-source="alertList">
          <template #renderItem="{ item }">
            <ListItem>
              <AlertOutlined
                draggable="true"
                @dragstart="dragStart"
                style="font-size: 20px; background: red"
              />
              {{ item.name }}
            </ListItem>
          </template>
        </List>
      </Col>
      <Col :span="20">
        <div class="map-wrapper" ref="wrapperRef" :style="{ width: wrapperWidth + 'px' }">
          <img
            :src="MapPng"
            alt="map"
            ref="imageRef"
            :style="{ border: imgBorder }"
            @drop="drop"
            @dragover="dragOver"
            @dragenter="dragEnter"
            @dragleave="dragLeave"
          />
        </div>
      </Col>
    </Row>
  </div>
</template>

<script lang="ts">
  import { defineComponent, nextTick, ref } from 'vue';
  import { Row, Col, List } from 'ant-design-vue';
  import { AlertOutlined } from '@ant-design/icons-vue';

  const MapPng = require('@/assets/images/map.png');

  interface AlertProp {
    status: Number;
    name: String;
  }

  const alertList: AlertProp[] = [
    { name: 'DJ001', status: 0 },
    { name: 'DJ002', status: 0 },
    { name: 'DJ003', status: 0 },
    { name: 'DJ004', status: 0 },
    { name: 'DJ005', status: 0 },
    { name: 'DJ006', status: 0 },
    { name: 'DJ007', status: 0 },
    { name: 'DJ008', status: 0 },
  ];

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
      const wrapperRef = ref<HTMLImageElement | null>(null);

      const imgBorder = ref<String>('');
      const wrapperWidth = ref<Number>(0);

      const mouseInIconX = ref(0);
      const mouseInIconY = ref(0);

      nextTick(() => {
        imageRef?.value?.addEventListener('load', function (e: Event): any {
          const path = e.composedPath();
          const imgLoadedWidth = (path[0] as HTMLImageElement).naturalWidth;
          wrapperWidth.value = imgLoadedWidth;
          console.log(path);
          console.log(e);
        });
      });

      console.log(imageRef);
      const drop = (e: DragEvent) => {
        console.log(e);
        console.log(e?.dataTransfer?.types);
        const data = e?.dataTransfer?.getData('application/x-moz-node');
        console.log(data);
        imgBorder.value = '';
        const newNode = document.createElement('span');
        newNode.className = 'anticon anticon-alert';
        newNode.style.position = 'absolute';
        newNode.style.fontSize = '20px';
        newNode.style.background = 'red';
        const x = e.offsetX;
        const y = e.offsetY;
        console.log(x, y);
        newNode.style.top = y - mouseInIconY.value + 'px';
        newNode.style.left = x - mouseInIconX.value + 'px';
        // newNode.appendChild(data);
        newNode.innerHTML = data ? data : '';
        wrapperRef.value?.appendChild(newNode);
      };

      const dragOver = (e: DragEvent) => {
        e.preventDefault();
        const data = e?.dataTransfer?.getData('text/html');
        console.log(data);
        imgBorder.value = 'yellow 1px solid';
      };
      const dragLeave = (e: DragEvent) => {
        e.preventDefault();
        imgBorder.value = '';
      };
      const dragStart = (e: DragEvent) => {
        console.log(e);
        mouseInIconX.value = e.offsetX;
        mouseInIconY.value = e.offsetY;
        e?.dataTransfer?.setData(
          'application/x-moz-node',
          e.target ? (e.target as HTMLElement).innerHTML : ''
        );
      };

      return {
        alertList,
        imgBorder,
        imageRef,
        wrapperRef,
        MapPng,
        drop,
        dragOver,
        dragLeave,
        dragStart,
        wrapperWidth,
      };
    },
  });
</script>

<style lang="less" scoped>
  .map-wrapper {
    position: relative;
    width: 100%;
    height: 100%;

    img {
      height: 100%;
      border: #ccc 1px solid;
    }
  }
</style>
