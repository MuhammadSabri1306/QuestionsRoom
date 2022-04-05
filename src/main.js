import Vue from "vue";
import App from "./App.vue";

import { Tooltip } from 'bootstrap/dist/js/bootstrap.js';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');

const tooltipTriggerList = [].slice.call(document.querySelectorAll("[data-bs-toggle='tooltip']"));
tooltipTriggerList.forEach(triggerElm => new Tooltip(triggerElm));
