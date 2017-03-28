/**
 * Created by Live on 2017/3/28.
 */

import Vue from 'vue';
import Demo from './component/demo.vue';

const app = new Vue({
  el: '#demo',
  render: h => h(Demo)
}).$mount('#demo');
