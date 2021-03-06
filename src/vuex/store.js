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
    localStorage.setItem('currentClient', JSON.stringify(client));
  },
  [types.SET_PROJECT_REST](state, project) {
    state.projectREST = project;
    localStorage.setItem('currentProject', JSON.stringify(project));
  },
  [types.SET_EPIC_REST](state, epic) {
    state.epicREST = epic;
    localStorage.setItem('currentEpic', JSON.stringify(epic));
  },
  [types.SET_INITIAL_CLIENT](state, request) {
    state.initialClient = request;
    localStorage.setItem('firstClient', JSON.stringify(request));
  },
  [types.SET_ALL_CLIENTS](state, clients) {
    state.allClients = clients;
    localStorage.setItem('allClients', JSON.stringify(clients));
  },
  [types.SET_ALL_PROJECTS](state, projects) {
    state.allProjects = projects;
    localStorage.setItem('allProjects', JSON.stringify(projects));
  },
  [types.SET_ALL_BRIEFS](state, briefs) {
    state.allBriefs = briefs;
    localStorage.setItem('allBriefs', JSON.stringify(briefs));
  },
  [types.SET_LOGGED_IN_USER](state, user) {
    state.loggedInUser = user;
    sessionStorage.setItem('currentUser', JSON.stringify(user));
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
