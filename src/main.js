import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import app from './test/index.vue'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
    render: h => h(app)
}).$mount('#app')
