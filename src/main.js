import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false

Vue.component('HeadComponent', HeadComponent)

new Vue({
  render: h => h(App),
}).$mount('#app')
