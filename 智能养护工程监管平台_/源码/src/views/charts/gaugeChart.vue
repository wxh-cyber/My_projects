<script setup>
import {ref,reactive} from 'vue'
const {value,title} = defineProps({
    value:{
        type:Number,
    },
    title:{
        type:String
    }
})
const option = ref({
    title:{
        text:title,
        style:{
            fill:'#fff',
            fontSize:10,
        }
    },
  series: [
    {
      type: 'gauge',
      startAngle: -Math.PI / 2,
      endAngle: Math.PI * 1.5,
      arcLineWidth: 5,
      data: [
        { name: 'itemA', value: value, gradient: ['#fb7293'] }
      ],
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
      pointer: {
        show: false
      },
      dataItemStyle: {
        lineCap: 'round'
      },
      details: {
        show: true,
        formatter: '{value}%',
        style: {
            fill: '#1ed3e5',
            fontSize: 14
        }
      }
    }
  ]
})
</script>

<template>
<!-- 满意度统计  -->
 <dv-charts :option="option" style="width:120px;height:100px;"/>
</template>

<style scoped>

</style>
