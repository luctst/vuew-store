import Vue from 'vue';
import App from './App.vue';
import { store } from "./store/store.js";
import vueResource from "vue-resource";

Vue.use(vueResource);

new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
});
