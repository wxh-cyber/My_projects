<script setup>
import {ref} from 'vue'
const option= ref({
  color:['#ffdb5c','#fb7293','#9fe6b8','#8378ea'],
  xAxis: {
    data: ['社会保险', '卫计委', '住房公积金', '建设规划', ],
    axisLabel:{
        style:{
            fill:'#fff'
        }
    },
    axisLine:{
        style:{
            stroke:'#fff'
        }
    }
  },
  yAxis: {
    data: 'value',
    axisLabel:{
        style:{
            fill:'#fff'
        }
    },
    axisLine:{
        style:{
            stroke:'#fff'
        }
    }
  },
  series: [
    {
      data: [1400, 2230, 1900, 2100,],
      type: 'bar',
      barWidth:'40%',  //设置柱宽宽度
      label:{//显示柱状图具体的数据
        show:true,
        position:'top',
        style:{
            fill:'#fff'
        }
      },
    independentColor:true, //设置为true时，可以配置每一个柱的颜色
    }
  ]
})
</script>

<template>
<dv-border-box11 title="业务统计" :title-width="400" :animate="false" style="width:100%;height:200px">
     <dv-charts :option="option" style="width:100%;height:230px;padding:0 20px;"/>
</dv-border-box11>
</template>

<style scoped>

</style>
