// This getter is a function which just returns the count
// With ES6 you can also write it as:
// export const getCount = state => state.count

// All getters for onboarding

export function getClientFromOnboarding(state) {
  return state.onboarding.client;
}
export function getProjectFromOnboarding(state) {
  return state.onboarding.project;
}
export function getBriefFromOnboarding(state) {
  return state.onboarding.brief;
}

// All getter for ClientRest State

// whole state
export function getClientRest(state) {
  return state.clientREST;
}

    // only client
export function currentClient(state) {
  return state.clientREST.currentClient;
}

    // parent User
export function parentUser(state) {
  return state.clientREST.user;
}
// All getters for Project Rest State

    // Whole state
export function getProjectRest(state) {
  return state.projectREST;
}

    // only project
export function currentProject(state) {
  return state.projectREST.currentProject;
}

    // parent Client
export function parentClient(state) {
  return state.projectREST.parentClient;
}

// All getters for Breif Rest

    // Whole state
export function getBriefRest(state) {
  return state.briefREST;
}

    // only brief
export function currentBrief(state) {
  return state.briefREST.currentBrief;
}

    // parent Project
export function parentProject(state) {
  return state.briefREST.parentProject;
}


// All getters for Features Rest

// Whole state
export function getFeatureRest(state) {
  return state.featureREST;
}

    // only feature
export function currentFeature(state) {
  return state.featureREST.currentFeature;
}

    // parent Brief
export function parentBrief(state) {
  return state.featureREST.parentBrief;
}

// All getters for Scenarios Rest

// Whole State
export function getScenarioRest(state) {
  return state.scenarioREST;
}

    // Only scenario
export function currentScenario(state) {
  return state.scenarioREST.currentScenario;
}

// Parent feature
export function parenScenario(state) {
  return state.scenarioREST.parentFeature;
}
