import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import 'material-icons/iconfont/material-icons.css';



Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
