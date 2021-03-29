<template>
  <div ref="pieRef" style="height: 100%"></div>
</template>
<script lang="ts">
  import { defineComponent, ref, nextTick } from 'vue';
  import * as echarts from 'echarts/core';
  import { BarChart, BarSeriesOption, GaugeChart, GaugeSeriesOption } from 'echarts/charts';
  import {
    TitleComponent,
    TitleComponentOption,
    PolarComponent,
    PolarComponentOption,
  } from 'echarts/components';
  import { CanvasRenderer } from 'echarts/renderers';

  type ECOption = echarts.ComposeOption<
    BarSeriesOption | TitleComponentOption | PolarComponentOption | GaugeSeriesOption
  >;
  echarts.use([TitleComponent, PolarComponent, BarChart, CanvasRenderer, GaugeChart]);

  const pieOption: ECOption = {
    title: [
      {
        show: true,
        text: '可疑信号',
        left: '46.5%',
        top: '80%',
        textAlign: 'center',
        textVerticalAlign: 'middle',
        textStyle: {
          fontWeight: 'normal',
          fontSize: 12,
          lineHeight: 20,
          color: '#ffffff',
        },
        backgroundColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
          { offset: 0, color: '#019690' },
          { offset: 0.3, color: 'transparent' },
          { offset: 0.7, color: 'transparent' },
          { offset: 1, color: '#019690' },
        ]),
        padding: [8, 8, 4, 8],
        borderColor: '#33FF9B',
        borderType: 'solid',
        borderWidth: 1,
        borderRadius: 10,
      },
      {
        text: '80%',
        left: '49.5%',
        top: '40%',
        textAlign: 'center',
        textStyle: {
          fontSize: 20,
          color: '#33FF9B',
          fontWeight: 'normal',
          lineHeight: 30,
        },
      },
    ],
    polar: {
      radius: ['60%', '80%'],
      center: ['50%', '55%'],
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
          color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [
            { offset: 0, color: '#019690' },
            { offset: 1, color: '#33FF9B' },
          ]),
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
      {
        type: 'gauge',
        radius: '135%',
        startAngle: 215,
        endAngle: -35,
        // splitNumber: 10,
        center: ['50%', '55%'],
        min: 0,
        max: 100,
        pointer: {
          show: false,
        },
        title: {
          show: false,
        },
        detail: {
          show: false,
        },
        data: [
          {
            value: 100,
            name: '',
          },
        ],
        axisLine: {
          lineStyle: {
            width: 20,
            color: [
              [0, '#5fa7ca'],
              [1, '#5fa7ca'],
            ],
            opacity: 0,
          },
        },
        axisTick: {
          length: 8,
          lineStyle: {
            // 此处修改圆环tick的颜色
            color: 'rgba(21, 152, 255, 0.3)',
            width: 1,
          },
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
      },
    ],
  };
  export default defineComponent({
    name: 'Pie',
    setup() {
      const pieRef = ref<HTMLImageElement | null>(null);
      nextTick(() => {
        if (pieRef.value) {
          const myChart = echarts.init(pieRef.value);
          console.log(pieOption);
          myChart.setOption(pieOption);
        }
      });

      return {
        pieRef,
      };
    },
  });
</script>
