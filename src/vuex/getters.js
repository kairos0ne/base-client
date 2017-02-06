// This getter is a function which just returns the count
// With ES6 you can also write it as:
// export const getCount = state => state.count

// All getters for onboarding

export const getClientFromOnboarding = state => state.onboarding.client;

export const getProjectFromOnboarding = state => state.onboarding.project;

export const getBriefFromOnboarding = state => state.onboarding.brief;

// All REST Getters

export const getClientRest = state => state.clientREST;

export const getProjectRest = state => state.projectREST;

export const getBriefRest = state => state.briefREST;

export const getFeatureRest = state => state.featureREST;

export const getAllClients = state => state.allClients;

export const getAllProjects = state => state.allProjects;

export const getAllBriefs = state => state.allBriefs;
