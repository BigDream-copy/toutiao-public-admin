// 项目启动
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './styles/index.less'
Vue.config.productionTip = false

// 创建vue根实例
// 将router引入根节点
// 使用render方法 进行渲染
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
