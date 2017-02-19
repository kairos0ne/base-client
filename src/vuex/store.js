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
  errors: {},
  tokenHeader: {},
  loggedInUser: {},
  onboarding: {
    client: {},
    project: {},
    brief: {},
    showclient: true,
    showproject: false,
    showbrief: false,
  },
  allClients: {},
  allProjects: {},
  allBriefs: {},
  clientREST: {},
  projectREST: {},
  briefREST: {},
  featureREST: {},
  epicREST: {},
  scenarioRest: {},
  initialClient: {},
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
  [types.SET_CLIENT_REST](state, client) {
    state.clientREST = client;
  },
  [types.SET_PROJECT_REST](state, project) {
    state.projectREST = project;
  },
  [types.SET_INITIAL_CLIENT](state, request) {
    state.initialClient = request;
  },
  [types.SET_ALL_CLIENTS](state, clients) {
    state.allClients = clients;
  },
  [types.SET_ALL_PROJECTS](state, projects) {
    state.allProjects = projects;
  },
  [types.SET_ALL_BRIEFS](state, briefs) {
    state.allBriefs = briefs;
  },
  [types.SET_LOGGED_IN_USER](state, user) {
    state.loggedInUser = user;
  },
  [types.SET_AUTH_TOKEN](state, token) {
    state.tokenHeader = token;
  },
  [types.SET_ERRORS](state, error) {
    state.errors = error;
  },

};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
