import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('formatPrecio', function(precio){
  return `$${precio.toFixed(2)}`
})

new Vue({
  render: h => h(App),
}).$mount('#app')
