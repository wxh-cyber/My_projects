<script setup>
import {ref} from 'vue'
const option = ref(
    {
  series: [
    {
      type: 'pie',
      data: [
        { name: '社会保障局', value: 58.12 },
        { name: '市民中心', value: 32.07 },
        { name: '卫计委', value: 21.93 },
        { name: '人力资源', value: 16.55 },
        { name: '住房公积金', value: 9.39 },
      ],
      insideLabel: {
        show: true
      },
      roseType: true
    }
  ]
}
)
</script>

<template>
    <dv-border-box11 title="部门业务统计" :title-width="400" :animate="false" style="width:100%;height:230px">
        <dv-charts :option="option" style="width:100%;height:280px;padding:20px 0;"/>
    </dv-border-box11>
</template>

<style scoped>

</style>