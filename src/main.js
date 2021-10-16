import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue } from "bootstrap-vue";
import VueApexCharts from "vue-apexcharts";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(VueApexCharts);

Vue.component("ApexChart", VueApexCharts);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
