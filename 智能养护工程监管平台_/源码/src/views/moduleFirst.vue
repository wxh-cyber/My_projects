<script setup>
import {ref,reactive} from 'vue'
import LineChart from './charts/lineChart.vue'
import PieChart from './charts/pieChart.vue'
</script>

<template>
<div style="flex:0 1 30%">
    <LineChart />
    <PieChart />
</div>
</template>

<style scoped>

</style>
