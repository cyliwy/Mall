import Vue from 'vue'
import App from './App.vue'
import router from "./router/index";
import store from "./store";

import toast from './components/common/Toast/index'
//安装自定义toast插件
Vue.use(toast);

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
