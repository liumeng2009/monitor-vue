<template>
  <div ref="chartRef" style="height: 100%"></div>
</template>
<script lang="ts">
  import { defineComponent, ref, nextTick } from 'vue';
  import * as echarts from 'echarts/core';
  import { BarChart, BarSeriesOption } from 'echarts/charts';
  import { GridComponent } from 'echarts/components';
  import { CanvasRenderer } from 'echarts/renderers';

  type ECOption = echarts.ComposeOption<BarSeriesOption>;
  echarts.use([BarChart, CanvasRenderer, GridComponent]);

  let data = [];
  let data2 = [];
  for (let i = 0; i < 100; i++) {
    const num = Math.random() * 100;
    data.push(num);
    data2.push(0 - num);
  }
  const pieOption: ECOption = {
    grid: {
      show: true,
      top: 20,
      bottom: 10,
      left: 50,
      right: 50,
      borderWidth: 0,
      backgroundColor: 'rgba(51, 236, 255, 0.2)',
    },
    xAxis: {
      type: 'category',
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      name: '幅度(Db)',
      type: 'value',
      nameLocation: 'end',
      nameTextStyle: { color: '#00c96d' },
      nameGap: 0,
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      formatter: function (v: number) {
        return Math.abs(v);
      },
    },
    series: [
      {
        type: 'bar',
        stack: 'num',
        data: data,
        barWidth: 1,
        itemStyle: {
          color: '#39BCFF',
        },
      },
      {
        type: 'bar',
        stack: 'num',
        data: data2,
        barWidth: 1,
        itemStyle: {
          color: '#39BCFF',
        },
      },
    ],
  };
  export default defineComponent({
    name: 'Line',
    setup() {
      const chartRef = ref<HTMLImageElement | null>(null);
      nextTick(() => {
        if (chartRef.value) {
          const myChart = echarts.init(chartRef.value);
          console.log(pieOption);
          myChart.setOption(pieOption);
        }
      });

      return {
        chartRef,
      };
    },
  });
</script>
