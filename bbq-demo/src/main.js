import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import DatePicker  from 'ant-design-vue/lib/date-picker';
import Input  from 'ant-design-vue/lib/input';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false
Vue.component(DatePicker.name, DatePicker);
Vue.component(Input.name, Input);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
