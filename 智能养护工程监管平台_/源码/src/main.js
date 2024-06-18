import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router/index.js' //./同级 ../ 上一级  @/ 根目录  src
import '@/assets/css/common.css'
import '@/assets/css/index.css'
import '@/assets/font/iconfont.css'
import DataVVue3 from '@kjgl77/datav-vue3'


createApp(App).use(DataVVue3).mount('#app')
