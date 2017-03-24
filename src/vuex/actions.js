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
export const setClientRest = ({ commit }, item) => {
  commit('SET_CLIENT_REST', item);
};

export const setProjectRest = ({ commit }, project) => {
  commit('SET_PROJECT_REST', project);
};

export const setEpicRest = ({ commit }, epic) => {
  commit('SET_EPIC_REST', epic);
};

export const setInitialClient = ({ commit }, request) => {
  commit('SET_INITIAL_CLIENT', request);
};

export const setAllClients = ({ commit }, clients) => {
  commit('SET_ALL_CLIENTS', clients);
};

export const setAllProjects = ({ commit }, projects) => {
  commit('SET_ALL_PROJECTS', projects);
};

export const setAllBriefs = ({ commit }, briefs) => {
  commit('SET_ALL_BRIEFS', briefs);
};

export const setUser = ({ commit }, user) => {
  commit('SET_LOGGED_IN_USER', user);
};

export const setAuthToken = ({ commit }, token) => {
  commit('SET_AUTH_TOKEN', token);
};
