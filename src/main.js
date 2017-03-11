/* eslint-disable no-unused-vars*/
/* eslint-disable no-undef*/
import Vue from 'vue';
import KeenUI from 'keen-ui';
import App from './App';
import store from './vuex/store';
import welcome from './components/views/welcome-view';
import foundation from './components/views/foundation-view';
import dashboard from './components/views/dashboard-view';
import introduction from './components/views/introduction-view';
import authentication from './components/views/register-view';
import pricing from './components/views/pricing-view';
import clientkey from './components/views/client-key';

const VueRouter = require('vue-router');

Vue.use(VueRouter);

Vue.use(KeenUI);

const Vuex = require('vuex');

const Dropzone = require('dropzone');

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
  { path: '/register', component: authentication },
  { path: '/pricing', component: pricing },
  { path: '/clientkey', component: clientkey },
  // { path: '/error/:errorId', name: 'error', component: error },
];

const router = new VueRouter({
  routes, // short for routes: routes
});

const bus = new Vue();
Vue.prototype.$bus = bus;

/* eslint-disable no-new */
const vm = new Vue({
  router,
  store,
  components: {
    welcome,
    dashboard,
    foundation,
    introduction,
    authentication,
    pricing,
  },
  el: '#app',
  render: h => h(App),
});

