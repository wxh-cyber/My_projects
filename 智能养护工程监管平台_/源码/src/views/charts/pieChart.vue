<script setup>
import {ref,reactive} from 'vue'
const config = reactive({
  data: [
    {
      name: '医疗保险报销',
      value: 167
    },
    {
      name: '周口',
      value: 123
    },
    {
      name: '漯河',
      value: 98
    },
    {
      name: '郑州',
      value: 75
    },
    {
      name: '西峡',
      value: 66
    },
  ],
  colors: ['#ffdb5c', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
  unit: '万元'
})
const option = ref({
  title: {
    text: '累计热门事项',
    style:{
        fill:'#fff',
        fontSize:12
    }
  },
  xAxis: {
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    axisLabel:{
        style:{
            fill:'#fff'
        }
    },
    axisLine:{  // 坐标轴线配置
        style:{
            stroke: '#fff',
        }
    },
    axisTick:{   //坐标轴刻度线配置
        style:{
            stroke: '#fff',
        }
    }
  },
  yAxis: {
    name:'单位(万件)',
    nameTextStyle:{
        fill:'#fff'
    },
    data: 'value',
     axisLabel:{
        style:{
            fill:'#fff'
        }
    },
     axisLine:{  // 坐标轴线配置
        style:{
            stroke: '#fff',
        }
    },
  },
  series: [
    {
      data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
      type: 'bar',
      gradient: {
        color: ['#fb7293', '#e690d1']
      }
    }
  ]
})
</script>

<template>
<dv-border-box11 title="热门事项" :title-width="400" :animate="false"
 style="width:100%;height:440px;padding:50px 20px 0">
     <div class="box2-title">今日热门事项</div>
     <dv-capsule-chart :config="config" style="width:100%;height:150px" />
      <dv-charts :option="option" style="width:100%;height:240px;"/>
</dv-border-box11>
</template>

<style scoped>

</style>
