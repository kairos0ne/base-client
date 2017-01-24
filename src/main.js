/* eslint-disable no-unused-vars*/
import Vue from 'vue';
import App from './App';
import store from './vuex/store';
import welcome from './components/views/welcome-view';
import foundation from './components/views/foundation-view';
import dashboard from './components/views/dashboard-view';
import introduction from './components/views/introduction-view';

const VueRouter = require('vue-router');

Vue.use(VueRouter);

const Vuex = require('vuex');

Vue.use(Vuex);

const VueResource = require('vue-resource');

Vue.use(VueResource);

require('flexboxgrid');

require('bootstrap');

const routes = [
  { path: '/', component: welcome },
  { path: '/dashboard', component: dashboard },
  { path: '/foundation', component: foundation },
  { path: '/introduction', component: introduction },
];

const router = new VueRouter({
  routes, // short for routes: routes
});

/* eslint-disable no-new */
new Vue({
  router,
  store,
  components: {
    welcome,
    dashboard,
    foundation,
    introduction,
  },
  el: '#app',
  render: h => h(App),
});

const eventHub = new Vue();

