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
import pricing from './components/views/pricing-view';

const VueRouter = require('vue-router');

Vue.use(VueRouter);

const Vuex = require('vuex');

Vue.use(Vuex);

const VueResource = require('vue-resource');

Vue.use(VueResource);

Vue.http.headers.common.Authorization = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE0ODYzNjk4NDJ9.cjUWYtixnsSmOSt4JsdLDy0vx5sc9hynkwxldY1H0LM';

require('flexboxgrid');

require('bootstrap');

const routes = [
  { path: '/', component: welcome },
  { path: '/dashboard', component: dashboard },
  { path: '/foundation', component: foundation },
  { path: '/introduction', component: introduction },
  { path: '/register', component: authentication },
  { path: '/pricing', component: pricing },
];

const router = new VueRouter({
  routes, // short for routes: routes
});

const bus = new Vue();
Vue.prototype.$bus = bus;

/* eslint-disable no-new */
new Vue({
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
