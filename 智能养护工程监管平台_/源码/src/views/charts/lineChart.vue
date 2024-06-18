<script setup>
import {ref,reactive} from 'vue'

const completion = ref([
    {name:'今日受理',value:'1669',icon:'icon-tubiao'},
    {name:'今日办理',value:'3333',icon:'icon-tubiao'},
    {name:'办结率',value:'98%',icon:'icon-a-tubiao2'},
    {name:'累计受理',value:'22222',icon:'icon-tubiao'},
    {name:'累计办结',value:'2222',icon:'icon-tubiao'},
    {name:'办结率',value:'77%',icon:'icon-a-tubiao2'},
])
const option = ref(
    {
  title: {//图表的标题
    text: '统计大厅办件量',
    style:{
        fill:'#fff',
        fontSize:12
    }
  },
  xAxis: {
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
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
    data: 'value',
    min:0,
    max:100,
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
    splitLine:{
        show:false
    }
  },
  series: [
    {
      data: [44, 59, 36, 58, 21, 44, 69],
      type: 'line',
      smooth: true
    }
  ]
}
)

</script>

<template>
<div>
    <!-- 左上 -->
    <dv-border-box11 class="box1" title="办结统计" :title-width="300"
     :animate="false">
        <div class="box1-top">
            <ul>
                <li v-for="(v,i) in completion" :key="i">
                    <i class="iconfont" :class="v.icon"></i>
                    <span class="box1-name">{{v.name}}:</span>
                    <span class="box1-value">{{v.value}}</span>
                </li>
            </ul>
        </div>
        <div class="box1-bottom">
             <dv-charts :option="option" style="width:100%;height:210px"/>
        </div>
    </dv-border-box11>
</div>
</template>

<style scoped>

</style>
