<script setup>
import {ref} from 'vue'
const option = ref(
    {
  xAxis: {
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    axisLine:{
        style:{
            stroke:'#fff'
        }
    },
    axisLabel:{
        style:{
            fill:'#fff'
        }
    }
  },
  yAxis: {
    data: 'value',
    min:0,
    max:8,
    axisLabel:{
        style:{
            fill:'#fff'
        }
    },
    splitLine:{  //是否显示分割线
        show: false
    }
  },
  series: [
    {
      data: [4.5,7.1,4,5.8,3.9,6.6,1.9],
      type: 'line',
      lineArea: {
        show: true,
        gradient: ['rgba(55, 162, 218, 0.6)', 'rgba(55, 162, 218, 0)']
      }
    }
  ]
}
)
</script>

<template>
    <dv-border-box11 title="办结时间" :title-width="400" :animate="false" style="width:100%;height:200px">
        <dv-charts :option="option" style="width:100%;height:200px;"/>
    </dv-border-box11>
</template>

<style scoped>

</style>
