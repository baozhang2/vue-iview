import Vue from 'vue'
import { $get, $post } from './http'
import store from './store/store'
import App from './App.vue'
import router from './routes/router'
import Headers from 'components/Header'

import iView from 'iview';
import 'iview/dist/styles/iview.css';

// echarts
import echarts from 'utils/js/echarts'

// resetcss
import '@/utils/styl/reset.styl'
import '@/fonts/iconfont.css'

Vue.use(iView);
Vue.config.productionTip = false
Vue.prototype.$get = $get
Vue.prototype.$post = $post
Vue.prototype.$echarts = echarts
Vue.component('headers', Headers);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
