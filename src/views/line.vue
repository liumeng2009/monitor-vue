<template>
  <div ref="chartRef" style="height: 100%"></div>
</template>
<script lang="ts">
  import { defineComponent, ref, nextTick, PropType } from 'vue';
  import * as echarts from 'echarts/core';
  import { BarChart, BarSeriesOption } from 'echarts/charts';
  import { GridComponent } from 'echarts/components';
  import { CanvasRenderer } from 'echarts/renderers';

  type ECOption = echarts.ComposeOption<BarSeriesOption>;
  echarts.use([BarChart, CanvasRenderer, GridComponent]);

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
      maxInterval: 1,
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
        barWidth: 1,
        itemStyle: {
          color: '#39BCFF',
        },
      },
      {
        type: 'bar',
        stack: 'num',
        barWidth: 1,
        itemStyle: {
          color: '#39BCFF',
        },
      },
    ],
  };
  export default defineComponent({
    name: 'Line',
    props: {
      dataSource: {
        type: Array as PropType<number[]>,
        default: () => [],
      },
    },
    setup(props) {
      const chartRef = ref<HTMLImageElement | null>(null);
      nextTick(() => {
        if (chartRef.value) {
          const myChart = echarts.init(chartRef.value);
          const arr = pieOption.series as Array<BarSeriesOption>;
          arr[0].data = props.dataSource;
          const data2: number[] = [];
          props.dataSource.forEach((ele) => {
            data2.push(0 - ele);
          });
          arr[1].data = data2;
          setTimeout(() => {
            console.log(pieOption, props.dataSource);
            myChart.setOption(pieOption);
          }, 3000);
        }
      });

      return {
        chartRef,
      };
    },
  });
</script>
