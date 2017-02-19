<template>
    <div id="dashboard">
        <div id="wrapper">
            <div class="container main-body">
                <div id="what" class="page-header col-lg-12 col-md-12 col-sm-12 ">
                    <h1>Welcome {{ user.name }}.<small> I see this is your first time on the site.  </small></h1>
                    <p>I hope the next couple of steps help you define a strategic approach to developing online tools. Before we get started there are a few details we'll need to setup. It won't take a minute, follow the steps.</p>
                </div>
                <div class="main-content">
                  <firstclient v-if="showClient"></firstclient>
                  <firstproject v-if="showProject" :onboadring="true"></firstproject>
                  <firstbrief v-if="showBrief"></firstbrief>
                </div>
            </div>  
        </div>
    </div>
</template>
<style lang="sass?indentedSyntax">
.main-content
  margin: 0px 0px 100px 0px 

.main-body
  height: 100%
</style>
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
    };
  },
  mounted() {
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
  computed: {
    user() {
      return this.$store.getters.getLoggedInUser;
    },
  },
  methods: {
    clientAdded(client) {
      // Set the show client attribute to false - hide the client details section
      this.showClient = false;
      // Set show project to true - show the project details
      this.showProject = true;
      // Set the user on the REST object
    },
    projectAdded(project) {
      // Set show project to false
      this.showProject = false;
      // Set show client to true
      this.showBrief = true;
      // Set the current client on projectRest
    },
    briefAdded(brief) {
      this.showProject = false;
      this.showBrief = false;
      this.showClient = false;
    },
  },
};

</script>
