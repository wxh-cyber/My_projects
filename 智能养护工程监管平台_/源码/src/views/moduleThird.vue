<script setup>
import {ref,reactive} from 'vue'
import GaugeChart from './charts/gaugeChart.vue'
import TaperChart from './charts/taperChart.vue'
import RoseChart from './charts/roseChart.vue'
import LineChart3 from './charts/lineChart3.vue'
</script>

<template>
<div style="flex:0 1 30%">
    <dv-border-box11 class="box4" title="满意度统计" style="width:100%;height:140px" :title-width="400" :animate="false">
       <div class="gaugechart">
        <GaugeChart :value='88' :title="'非常满意'"/>
        <GaugeChart :value='11' :title="'满意'" />
        <GaugeChart :value='1' :title="'不满意'" />
       </div>    
    </dv-border-box11>
    <TaperChart />
    <RoseChart />
    <LineChart3 />
</div>
</template>

<style scoped>

</style>
