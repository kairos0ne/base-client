// An action will receive the store as the first argument.
// Since we are only interested in the commit (and optionally the state)
// we can pull those two parameters using the ES6 destructuring feature
export const setClientInOnboarding = ({ commit }, client) => {
  if (client.id > 0) {
    commit('SET_FIRST_CLIENT', client);
  }
};

export const setProjectInOnboarding = ({ commit }, project) => {
  if (project.id > 0) {
    commit('SET_FIRST_PROJECT', project);
  }
};
export const setBriefInOnboarding = ({ commit }, brief) => {
  if (brief.id > 0) {
    commit('SET_FIRST_BRIEF', brief);
  }
};
export const setClientRest = ({ commit }, request) => {
  commit('SET_CLIENT_REST', request);
};
export const setProjectRest = ({ commit }, request) => {
  commit('SET_PROJECT_REST', request);
};
export const setBriefRest = ({ commit }, request) => {
  commit('SET_BRIEF_REST', request);
};
export const setFeatureRest = ({ commit }, request) => {
  commit('SET_FEATURE_REST', request);
};
export const setScenarioRest = ({ commit }, request) => {
  commit('SET_SCENARIO_REST', request);
};
export const setCurrentClient = ({ commit }, client) => {
  commit('SET_CLIENT', client);
};
export const setDashboardClient = ({ commit }) => {
  commit('SET_DASHBOARD_CLIENT');
};

