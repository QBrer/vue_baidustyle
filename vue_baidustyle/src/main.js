import Vue from 'vue'
import App from './App.vue'
// import BaiduMap from 'vue-baidu-map'
import BaiduMap from '@/components/vue-baidu-map/components'

Vue.config.productionTip = false
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'xfvo4MjWC2PlBasfoccreOYz382MamBu'
})
new Vue({
  render: h => h(App),
}).$mount('#app')
