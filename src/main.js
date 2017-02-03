/* eslint-disable no-unused-vars*/
/* eslint-disable no-undef*/
import Vue from 'vue';
import App from './App';
import store from './vuex/store';
import welcome from './components/views/welcome-view';
import foundation from './components/views/foundation-view';
import dashboard from './components/views/dashboard-view';
import introduction from './components/views/introduction-view';
import authentication from './components/views/register-view';

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
  { path: '/register', component: authentication },
];

const router = new VueRouter({
  routes, // short for routes: routes
});

const eventHub = new Vue({});

/* eslint-disable no-new */
new Vue({
  http: {
    headers: {
      Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE0ODUzNTYxNjJ9.lFT2W6XPYlZhBp_fXkghi9k9w2u-e4zvnObtCm6XIuM',
    },
  },
  router,
  store,
  components: {
    welcome,
    dashboard,
    foundation,
    introduction,
    authentication,
  },
  el: '#app',
  render: h => h(App),
});
