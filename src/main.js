import Vue from 'vue'
import App from './App.vue'
import Mint from 'mint-ui' //引入mint-ui 框架
import 'mint-ui/lib/style.css' // 引入mint-ui css样式
import VueRouter from 'vue-router' //引入路由
import router from './router.js' //引入路由文件
import VueResource from 'vue-resource' //引入resource

Vue.use(Mint)
Vue.use(VueRouter)
Vue.use(VueResource)
// 创建和挂载根实例
const app = new Vue({
	router:router,
	render:h=>h(App)
}).$mount('#app')
