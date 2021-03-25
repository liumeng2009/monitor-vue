<template>
  <div>
    <Row :gutter="8">
      <Col :xxl="{ span: 4 }" :xl="{ span: 6 }" :lg="{ span: 8 }" :md="{ span: 12 }">
        <div class="title">
          <i></i>
          待配置列表
        </div>
      </Col>
      <Col :xxl="{ span: 20 }" :xl="{ span: 18 }" :lg="{ span: 16 }" :md="{ span: 12 }">
        <Button type="primary" style="float: right">添加背景图</Button>
      </Col>
      <Col :xxl="{ span: 4 }" :xl="{ span: 6 }" :lg="{ span: 8 }" :md="{ span: 12 }">
        <List
          :bordered="false"
          :data-source="lampList"
          :split="true"
          :style="{ height: wh + 'px', overflowY: 'auto' }"
        >
          <template #renderItem="{ item }">
            <ListItem>
              <div
                class="item-selector"
                :draggable="item.status === 0"
                @dragstart="dragStart($event, item)"
              >
                <AlertOutlined style="font-size: 20px" />
                <span>{{ item.name }}</span>
              </div>
              <template #actions>
                <Tag v-if="item.status === 0" color="#00c96d">待放置</Tag>
                <Tag v-if="item.status === 1" color="yellow">放置中</Tag>
                <Popconfirm
                  v-if="item.status === 2"
                  title="确定要取消放置该灯吗?"
                  ok-text="确定"
                  cancel-text="取消"
                  @confirm="deleteLamp(item)"
                >
                  <Tag color="red" style="cursor: pointer"> 删除 </Tag>
                </Popconfirm>
              </template>
            </ListItem>
          </template>
        </List>
      </Col>
      <Col :xxl="{ span: 20 }" :xl="{ span: 18 }" :lg="{ span: 16 }" :md="{ span: 12 }">
        <div class="map-container" :style="{ height: wh + 'px' }">
          <div class="map-wrapper" ref="wrapperRef" :style="{ width: wrapperWidth + 'px' }">
            <img
              :src="MapPng"
              alt="map"
              ref="imageRef"
              :style="{ width: wrapperWidth + 'px', border: imgBorder }"
              @drop="drop"
              @dragover="dragOver"
              @dragenter="dragEnter"
              @dragleave="dragLeave"
            />
          </div>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, nextTick, ref } from 'vue';
  import { Row, Col, List, Tag, Popconfirm, Button } from 'ant-design-vue';
  import { AlertOutlined } from '@ant-design/icons-vue';

  const MapPng = require('@/assets/images/map.png');

  interface Lamp {
    status: number;
    name: string;
  }

  const lamp: Lamp[] = [
    { name: 'DJ001', status: 0 },
    { name: 'DJ002', status: 0 },
    { name: 'DJ003', status: 0 },
    { name: 'DJ004', status: 0 },
    { name: 'DJ005', status: 0 },
    { name: 'DJ006', status: 0 },
    { name: 'DJ007', status: 0 },
    { name: 'DJ008', status: 0 },
    { name: 'DJ009', status: 0 },
    { name: 'DJ010', status: 0 },
    { name: 'DJ011', status: 0 },
    { name: 'DJ012', status: 0 },
    { name: 'DJ013', status: 0 },
    { name: 'DJ014', status: 0 },
    { name: 'DJ015', status: 0 },
    { name: 'DJ016', status: 0 },
  ];

  export default defineComponent({
    name: 'MapSetting',
    components: {
      Row,
      Col,
      List,
      ListItem: List.Item,
      AlertOutlined,
      Tag,
      Popconfirm,
      Button,
    },
    props: {
      wrapperHeight: {
        type: Number,
        default: 0,
      },
    },
    setup(props) {
      const wh = computed(() => {
        return props.wrapperHeight - 16 - 48;
      });

      const imageRef = ref<HTMLImageElement | null>(null);
      const wrapperRef = ref<HTMLImageElement | null>(null);
      // 操作的数据源
      const lampList = ref<Lamp[]>(lamp);

      const imgBorder = ref<String>('');
      const wrapperWidth = ref<Number>(0);

      // 鼠标在拖拽开始时，在被拖拽区域的什么位置
      const mouseInIconX = ref(0);
      const mouseInIconY = ref(0);

      nextTick(() => {
        imageRef?.value?.addEventListener('load', function (e: Event): any {
          const path = e.composedPath();
          const imgLoadedWidth = (path[0] as HTMLImageElement).naturalWidth;
          wrapperWidth.value = imgLoadedWidth;
        });
      });

      const drop = (e: DragEvent) => {
        imgBorder.value = '';

        const nodeData = e?.dataTransfer?.getData('application/x-moz-node');
        const lampData = e?.dataTransfer?.getData('text/plain');

        const newNode = document.createElement('span');
        newNode.className = 'anticon anticon-alert';
        newNode.style.position = 'absolute';
        newNode.style.fontSize = '20px';
        newNode.dataset.lamp = lampData;
        const x = e.offsetX;
        const y = e.offsetY;
        newNode.style.top = y - mouseInIconY.value + 1 + 8 + 'px';
        newNode.style.left = x - mouseInIconX.value + 1 + 16 + 'px';
        newNode.innerHTML = nodeData ? nodeData : '';

        wrapperRef.value?.appendChild(newNode);

        const lamp = lampList.value.filter((ele) => ele.name === lampData);
        if (lamp[0]) {
          lamp[0].status = 2;
        }
      };

      const dragOver = (e: DragEvent) => {
        e.preventDefault();
        const data = e?.dataTransfer?.getData('text/html');
        console.log(data);
        imgBorder.value = '#00c96d 2px dashed';
      };
      const dragLeave = (e: DragEvent) => {
        e.preventDefault();
        imgBorder.value = '';
      };
      const dragStart = (e: DragEvent, item: Lamp) => {
        item.status = 1;
        mouseInIconX.value = e.offsetX;
        mouseInIconY.value = e.offsetY;
        e?.dataTransfer?.setData(
          'application/x-moz-node',
          e.target ? (e.target as HTMLElement).children[0].innerHTML : ''
        );
        e?.dataTransfer?.setData('text/plain', item.name);
      };

      const deleteLamp = (item: Lamp) => {
        console.log(wrapperRef.value);
        Array.from(wrapperRef.value?.children ? wrapperRef.value.children : []).forEach(
          (ele: Element) => {
            const name = (ele as HTMLElement).dataset;
            if (name.lamp === item.name) {
              wrapperRef.value?.removeChild(ele);
              item.status = 0;
            }
          }
        );
      };

      return {
        wh,
        lampList,
        imgBorder,
        imageRef,
        wrapperRef,
        MapPng,
        drop,
        dragOver,
        dragLeave,
        dragStart,
        wrapperWidth,
        deleteLamp,
      };
    },
  });
</script>

<style lang="less" scoped>
  .title {
    .title-bg();
  }

  .item-selector {
    padding: 8px 16px;
    border: transparent 1px solid;
    border-radius: 5px;
    cursor: move;

    &:hover {
      border: @primary-color 1px solid;
      background: lighten(@primary-color, 59%);
    }

    & > span:nth-of-type(2) {
      margin-left: 8px;

      &:hover {
        color: @primary-color;
      }
    }
  }
  .map-container {
    overflow: auto;
    .map-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      margin: auto;
      background: #eee;

      img {
        border: #eee 2px dashed;
      }
    }
  }
</style>
