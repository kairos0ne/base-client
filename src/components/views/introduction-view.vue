<template>
    <div id="dashboard">
        <div id="wrapper">
            <div class="container">
                <div id="what" class="page-header col-lg-12 col-md-12 col-sm-12 ">
                    <h1>Welcome {{ user.name }}.<small> I see this is your first time on the site.  </small></h1>
                    <p>I hope the next couple of steps help you define a strategic approach to developing online tools. Before we get started there are a few details we'll need to setup. It won't take a minute, follow the steps.</p>
                </div>
            </div>
            <firstclient v-if="showClient"></firstclient>
            <firstproject v-if="showProject" :onboadring="true"></firstproject>
            <firstbrief v-if="showBrief"></firstbrief>
        </div>
    </div>
</template>
<script>
/* eslint-disable no-unused-vars*/
/* eslint-disable no-undef*/
/* eslint-disable prefer-template*/

import firstclient from './../client/first-client';
import firstbrief from './../brief/first-brief';
import firstproject from './../project/first-project';

export default {
  name: 'Getting-Started',
  data() {
    return {
      showClient: true,
      showProject: false,
      showBrief: false,
      user: {},
      clientRest: {
        user: {},
        currentClient: {},
        clientProjects: [],
      },
      projectRest: {
        parentClient: {},
        currentProject: {},
        projectBriefs: [],
      },
      briefRest: {
        parentProject: {},
        currentBrief: {},
        briefFeatures: [],
      },
    };
  },
  mounted() {
    this.getUser();
    this.$bus.$on('setClientOnboarding', this.clientAdded);
    this.$bus.$on('setProjectOnboarding', this.projectAdded);
    this.$bus.$on('setBriefOnboarding', this.briefAdded);
  },
  beforeDestroy() {
    this.$bus.$off('setClientOnboarding', this.clientAdded);
    this.$bus.$off('setProjectOnboarding', this.briefAdded);
    this.$bus.$off('setBriefOnboarding', this.briefAdded);
  },
  components: {
    firstclient,
    firstbrief,
    firstproject,
  },
  methods: {
    getUser() {
      this.$http.get('http://localhost:3000/users/1').then((userdetails) => {
        this.user = userdetails.data;
      }, (userdetails) => {
        // Errors
      });
    },
    clientAdded(client) {
      // The mutator is not storing the payload... debug
      // Set the show client attribute to false - hide the client details section
      this.showClient = false;
      // Set show project to true - show the project details
      this.showProject = true;
      // Set the user on the REST object
      this.clientRest.user = this.user;
      // Set the client on client REST
      this.clientRest.currentClient = client;
      // Dispatch a commit using an action to the REST Vuex State clientREST
      const request = this.clientRest;
      console.log(request);
      this.$store.dispatch('setClientRest', request);
    },
    projectAdded(project) {
      // Set show project to false
      this.showProject = false;
      // Set show client to true
      this.showBrief = true;
      // Set the current client on projectRest
      this.projectRest.parentClient = this.clientRest.currentClient;
      this.projectRest.currentProject = project;
      const request = this.projectRest;
      this.$store.dispatch('setProjectRest', request);
    },
    briefAdded(brief) {
      this.showProject = false;
      this.showBrief = false;
      this.showClient = false;
    },
  },
};

</script>
