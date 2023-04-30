import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
//引入路由
import router from './router'
//配置路由的地方

//使用插件
Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //注册路由
  router,
}).$mount('#app')
