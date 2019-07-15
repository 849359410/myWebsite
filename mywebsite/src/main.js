import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import animate from 'animate.css';
import App from './App';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(animate);

new Vue({
  render: h => h(App),
}).$mount('#app');
