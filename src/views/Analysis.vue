<template>
  <div class="home-container">
    <div class="side-wrapper left">
      <i class="arrow"></i>
      <div class="panel">
        <div class="cus-title">
          <div class="title-wrapper"><i></i> 总体态势 </div>
        </div>
        <div class="content">
          <div class="content-wrapper">
            <div class="status-container">
              <div class="status">
                <div class="status-wrapper">
                  <img :src="require('@/assets/images/analysis/1.png')" alt="" />
                  <span class="title">总监测数</span>
                  <span class="value">40</span>
                </div>
              </div>
              <div class="status">
                <div class="status-wrapper">
                  <img :src="require('@/assets/images/analysis/2.png')" alt="" />
                  <span class="title">危险</span>
                  <span class="value">40</span>
                </div>
              </div>
              <div class="divider"></div>
              <div class="status">
                <div class="status-wrapper">
                  <img :src="require('@/assets/images/analysis/3.png')" alt="" />
                  <span class="title">开关数</span>
                  <span class="value">40</span>
                </div>
              </div>
              <div class="status">
                <div class="status-wrapper">
                  <img :src="require('@/assets/images/analysis/4.png')" alt="" />
                  <span class="title">关灯数</span>
                  <span class="value">40</span>
                </div>
              </div>
              <div class="divider"></div>
              <div class="status">
                <div class="status-wrapper">
                  <img :src="require('@/assets/images/analysis/5.png')" alt="" />
                  <span class="title">可疑</span>
                  <span class="value">40</span>
                </div>
              </div>
              <div class="status">
                <div class="status-wrapper">
                  <img :src="require('@/assets/images/analysis/6.png')" alt="" />
                  <span class="title">安全</span>
                  <span class="value">40</span>
                </div>
              </div>
              <div class="divider"></div>
              <div class="status">
                <div class="status-wrapper">
                  <img :src="require('@/assets/images/analysis/7.png')" alt="" />
                  <span class="title">采集端异常</span>
                  <span class="value">40</span>
                </div>
              </div>
              <div class="status">
                <div class="status-wrapper">
                  <img :src="require('@/assets/images/analysis/8.png')" alt="" />
                  <span class="title">处理端异常</span>
                  <span class="value">40</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="panel">
        <div class="cus-title">
          <div class="title-wrapper"><i></i>设备异常记录</div>
        </div>
        <div class="content">
          <div class="table-header">
            <table>
              <tr>
                <td>时间</td>
                <td>设备名称</td>
                <td>对应灯具</td>
                <td>异常状态</td>
                <td>操作</td>
              </tr>
            </table>
          </div>
          <div class="table-scroll">
            <div class="table-body" :style="{ height: tableContainerHeight + 'px' }">
              <Table
                class="exception-table"
                :showHeader="false"
                :columns="equipExcetionColumns"
                :data-source="equipmentExceptionRecords.concat(equipmentExceptionRecords)"
                :pagination="false"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="center-wrapper">
      <div class="center">
        <div class="panel">
          <div class="cus-title">
            <div class="title-wrapper"><i></i>检测结果</div>
          </div>
          <div class="content">
            <div class="monit-result">
              <div class="monit">
                <div class="monit-bottom-border"></div>
                <div class="monit-wrapper">
                  <img :src="require('@/assets/images/analysis/r1.png')" alt="" />
                  <span class="name">Freq</span>
                  <i class="divider"></i>
                  <span class="value">13.1KHz</span>
                </div>
              </div>
              <div class="monit">
                <div class="monit-bottom-border"></div>
                <div class="monit-wrapper">
                  <img :src="require('@/assets/images/analysis/r2.png')" alt="" />
                  <span class="name">Min</span>
                  <i class="divider"></i>
                  <span class="value">345mv</span>
                </div>
              </div>
              <div class="monit">
                <div class="monit-bottom-border"></div>
                <div class="monit-wrapper">
                  <img :src="require('@/assets/images/analysis/r3.png')" alt="" />
                  <span class="name">Max</span>
                  <i class="divider"></i>
                  <span class="value">545mv</span>
                </div>
              </div>
              <div class="monit">
                <div class="monit-bottom-border"></div>
                <div class="monit-wrapper">
                  <img :src="require('@/assets/images/analysis/r4.png')" alt="" />
                  <span class="name">Pk-Pk</span>
                  <i class="divider"></i>
                  <span class="value">350mv</span>
                </div>
              </div>
              <div class="monit">
                <div class="monit-bottom-border"></div>
                <div class="monit-wrapper">
                  <img :src="require('@/assets/images/analysis/r5.png')" alt="" />
                  <span class="name">Mean</span>
                  <i class="divider"></i>
                  <span class="value">150mv</span>
                </div>
              </div>
              <div class="monit">
                <div class="monit-bottom-border"></div>
                <div class="monit-wrapper">
                  <img :src="require('@/assets/images/analysis/r6.png')" alt="" />
                  <span class="name">RMS</span>
                  <i class="divider"></i>
                  <span class="value">545KHz</span>
                </div>
              </div>
              <div class="monit">
                <div class="monit-bottom-border"></div>
                <div style="width: 200px; height: 100px">123</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="side-wrapper right">
      <i class="arrow"></i>
      <div class="panel">
        <div class="cus-title">
          <div class="title-wrapper"><i></i> 灯具监测详情 </div>
        </div>
        <div class="content">
          <div class="content-wrapper">123 </div>
        </div>
      </div>
      <div class="panel">
        <div class="cus-title">
          <div class="title-wrapper"><i></i>预警记录</div>
        </div>
        <div class="content">
          <div class="table-header">
            <table>
              <tr>
                <td>时间</td>
                <td>设备名称</td>
                <td>对应灯具</td>
                <td>异常状态</td>
                <td>操作</td>
              </tr>
            </table>
          </div>
          <div class="table-scroll">
            <div class="table-body" :style="{ height: tableContainerHeight + 'px' }">
              <Table
                class="exception-table"
                :showHeader="false"
                :columns="equipExcetionColumns"
                :data-source="equipmentExceptionRecords.concat(equipmentExceptionRecords)"
                :pagination="false"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Table } from 'ant-design-vue';
  import { EquipExceptionRecord } from '@/types/config';

  const equipmentExceptionRecords: EquipExceptionRecord[] = [
    {
      key: 0,
      time: '09:32:21',
      name: '采集端',
      lampName: 'DJ001',
      exceptionStatus: 1,
      actionStatus: 0,
    },
    {
      key: 1,
      time: '09:32:21',
      name: '采集端',
      lampName: 'DJ001',
      exceptionStatus: 1,
      actionStatus: 0,
    },
    {
      key: 2,
      time: '09:32:21',
      name: '采集端',
      lampName: 'DJ001',
      exceptionStatus: 1,
      actionStatus: 0,
    },
    {
      key: 3,
      time: '09:32:21',
      name: '采集端',
      lampName: 'DJ001',
      exceptionStatus: 1,
      actionStatus: 0,
    },
    {
      key: 4,
      time: '09:32:21',
      name: '采集端',
      lampName: 'DJ001',
      exceptionStatus: 1,
      actionStatus: 0,
    },
    {
      key: 5,
      time: '09:32:21',
      name: '采集端',
      lampName: 'DJ001',
      exceptionStatus: 1,
      actionStatus: 0,
    },
  ];

  const equipExcetionColumns = [
    {
      title: '时间',
      dataIndex: 'time',
      key: 'time',
      width: 70,
    },
    {
      title: '设备名称',
      dataIndex: 'name',
      key: 'name',
      width: 70,
    },
    {
      title: '对应灯具',
      dataIndex: 'lampName',
      key: 'lampName',
      width: 70,
    },
    {
      title: '异常状态',
      dataIndex: 'exceptionStatus',
      key: 'exceptionStatus',
      width: 70,
    },
    {
      title: '操作',
      dataIndex: 'actionStatus',
      key: 'actionStatus',
      width: 50,
    },
  ];

  export default defineComponent({
    name: 'Home',
    components: {
      Table,
    },
    setup() {
      const tableContainerHeight = ref(0);

      const calWrapperHeight = (): void => {
        const windowHeight = window.document.documentElement.clientHeight;
        const headerHeight = 102;
        const contentPadding = 32;
        const siderPadding = 16;
        const topAreaHeight = 394;
        const titleHeight = 37;
        const borderHeight = 4;
        const tableHeaderHeight = 50;
        const contentPadding2 = 24;
        tableContainerHeight.value =
          windowHeight -
          headerHeight -
          contentPadding -
          topAreaHeight -
          titleHeight -
          siderPadding -
          borderHeight -
          tableHeaderHeight -
          contentPadding2;
      };

      calWrapperHeight();

      return {
        tableContainerHeight,
        equipExcetionColumns,
        equipmentExceptionRecords,
      };
    },
  });
</script>

<style lang="less" scoped>
  @import url('./analysis.less');
</style>
