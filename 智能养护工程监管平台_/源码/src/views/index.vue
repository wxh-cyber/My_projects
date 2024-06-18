<script setup>
import {ref,reactive} from 'vue'
import ModeuleHeader from './moduleHeader.vue'
import ModeuleFirst from './moduleFirst.vue'
import ModeuleSecound from './moduleSecound.vue'
import ModeuleThird from './moduleThird.vue'
</script>

<template>
  <dv-full-screen-container>
    <!-- 头部 -->
    <ModeuleHeader />
    <div class="main">
      <ModeuleFirst />
      <ModeuleSecound />
      <ModeuleThird />

    </div>
  </dv-full-screen-container>
</template>

<style scoped>

</style>
