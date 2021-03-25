<template>
  <div ref="pieRef"></div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  const pieOption = {
    title: [
      {
        text: '疑似可疑信号',
        left: '49.5%',
        top: '65%',
        textAlign: 'center',
        textStyle: {
          fontWeight: 'normal',
          fontSize: '14',
          color: '#ffffff',
          textAlign: 'Center',
        },
      },
      {
        text: '80%',
        left: '49.5%',
        top: '45%',
        textAlign: 'center',
        textStyle: {
          fontSize: 30,
          color: '#fff',
          fontWeight: 'normal',
          lineHeight: 30,
        },
      },
    ],
    polar: {
      radius: ['50%', '70%'],
      center: ['50%', '45%'],
    },
    // 极坐标系：角度轴
    angleAxis: {
      max: (100 * 360) / 250,
      show: false,
      type: 'value',
      startAngle: 215,
    },
    // 极坐标系：径向轴
    radiusAxis: {
      type: 'category',
      show: true,
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    series: [
      {
        type: 'bar',
        data: [
          {
            value: 80,
          },
        ],
        itemStyle: {
          color: function () {
            let obj = {
              type: 'linear',
              x: 0, //右
              y: 1, //下
              x2: 1, //左
              y2: 0, //上
              colorStops: [
                {
                  offset: 0,
                  color: '#3BDE86',
                },
                {
                  offset: 1,
                  color: '#3BDE86',
                },
              ],
            };
            return obj;
          },
        },
        barGap: '-100%',
        coordinateSystem: 'polar',
        roundCap: true,
        cursor: 'auto',
        z: 2,
      },
      {
        type: 'bar',
        data: [
          {
            value: 100,
          },
        ],
        itemStyle: {
          color: '#013f72',
        },
        barGap: '-100%',
        coordinateSystem: 'polar',
        roundCap: true,
        cursor: 'auto',
        emphasis: {
          itemStyle: {
            color: '#013f72',
          },
        },
        z: 1,
      },
    ],
  };
  export default defineComponent({
    name: 'Pie',
    setup() {
      const pieRef = ref(null);

      return {
        pieRef,
      };
    },
  });
</script>
