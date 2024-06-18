<script setup>
import {ref,reactive} from 'vue'
const option = ref({
 color:['#37a2da','#ffdb5c','#fb7293','#8378ea','#e690d1','#9fe6b8'],
  legend: {
    data: ['社会保障局', '住房公积金', '市民中心','人力资源','卫计委','综合执法局'],
    orient:'vertical',
    top:60,
    textStyle:{
        fill:'#fff',
        fontSize:8
    }
  },
  xAxis: {
    data: ['失业金申报', '社会保障卡领取', '企业社保开户登记', '居民医疗保险报销', '灵活就业人员参保', '稳刚刚补贴申请'],
    axisLabel:{
        style:{
            fill:'#fff',
            fontSize:8
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
    data: 'value',
    min:50,
    max: 350,
    axisLabel:{
        style:{
            fill:'#fff',
            fontSize:8
        }
    },
    axisLine:{  // 坐标轴线配置
        style:{
            stroke: '#fff',
        }
    },
    splitLine:{
        show:false
    }
  },
  series: [
    {
      name: '社会保障局',
      data: [120, 230, 190, 200, 300, 200],
      type: 'line',
    //   stack: 'a',
      fill: {
        show: true
      }
    },
    {
      name: '住房公积金',
      data: [100, 230, 122, 222, 312, 20,],
      type: 'line',
    //   stack: 'a',
      smooth: true
    },
    {
      name: '市民中心',
      data: [107, 90, 89, 55, 209, 109],
      type: 'line',
    //   stack: 'a',
    },
    {
      name: '人力资源',
      data: [207, 190, 66, 155, 109, 99],
      type: 'line',
    //   stack: 'a',
    },
    {
      name: '卫计委',
      data: [99, 290, 77, 105, 210, 106],
      type: 'line',
    //   stack: 'a',
    },
    {
      name: '综合执法局',
      data: [209, 209, 89, 90, 301, 119],
      type: 'line',
    //   stack: 'a',
    }
  ]
})
</script>

<template>
 <dv-border-box11 title="业务统计" :title-width="400" :animate="false"
 style="widt:100%;height:400px;padding:0 10px">
    <dv-charts :option="option" style="width:100%;height:400px;"/>
 </dv-border-box11>
</template>

<style scoped>

</style>
