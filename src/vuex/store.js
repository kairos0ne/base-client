import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './mutation-types';
import * as actions from './actions';
import * as getters from './getters';
// Make vue aware of Vuex
Vue.use(Vuex);

// Combine the initial state and the mutations to create a Vuex store.
// This store can be linked to our app.

const state = {
  onboarding: {
    client: {},
    project: {},
    brief: {},
    showclient: true,
    showproject: false,
    showbrief: false,
  },
  dashboardState: {
    focusClient: {
      focus: false,
      show: false,
      update: false,
      put: false,
    },
    focusProject: {
      focus: false,
      show: false,
      update: false,
      put: false,
    },
    focusBrief: {
      focus: false,
      show: false,
      update: false,
      put: false,
    },
    focusFeature: {
      focus: false,
      show: false,
      update: false,
      put: false,
    },
    focusScenario: {
      focus: false,
      show: false,
      update: false,
      put: false,
    },
  },
  clientREST: {},
  projectREST: {},
  briefREST: {},
  featureREST: {},
  epicREST: {},
  scenarioRest: {},
};

const mutations = {
  [types.SET_FIRST_CLIENT](state, client) {
        // Mutate the state
    state.onboarding.client = client;
  },
  [types.SET_FIRST_PROJECT](state, project) {
        // Mutate the state
    state.onboarding.project = project;
  },
  [types.SET_FIRST_BRIEF](state, brief) {
        // Mutate the state
    state.onboarding.brief = brief;
  },
  [types.SET_CLIENT_REST](state, request) {
    state.clientREST = request;
  },
  [types.SET_PROJECT_REST](state, request) {
    state.projectREST = request;
  },
  [types.SET_BRIEF_REST](state, request) {
    state.briefREST = request;
  },
  [types.SET_FEATURE_REST](state, request) {
    state.featureREST = request;
  },
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
