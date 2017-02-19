<template>
<div>
<!-- Start Main Container -->
  <div id="main-container" class="row">
    <div class="col-lg-2
                col-md-2
              ">
        <div id="sidebar" class="box sidebar">
          <listclient></listclient>
          
        </div>
    </div>
    <div class="col-lg-2
                col-md-2
                col-sm-12
                col-xs-12
              ">
        <div id="middle-bar" class="box">
          <projectpanels></projectpanels>
        </div>
    </div>
    <div class="col-lg-8
                col-md-8
                col-sm-12
                col-xs-12
              ">    
        <div id="main-content" class="box">
          <showclient v-show="showClient"></showclient>
          <showproject v-show="showProject"></showproject>
        </div>
    </div>
    <div class="fixed-bottom">f</div>
</div>
</template>
<style lang="sass?indentedSyntax">

#main-container
  height: 100%

#sidebar     
  border-right: 1px solid #999999

#middle-bar
  border-right: 1px solid #999999

#main-content

.fixed-bottom
  position: absolute
  right: 0
  bottom: 0
  left: 0
  
</style>
<script>
/* eslint-disable no-unused-vars*/
/* eslint-disable no-undef*/
/* eslint-disable prefer-template*/

    // Brief - resources/assets/js/components/brief
    // import showbrief from '../brief/show-brief';
    // Client - resources/assets/js/components/client
    import showclient from '../client/show-client';
    import listclient from '../client/list-clients';
    // Project - recourses/js/components/project
    import showproject from '../project/show-project';
    // import listproject from '../project/list-project';
    import projectpanels from '../project/project-panels';
    import * as getters from './../../vuex/getters';
    import * as actions from './../../vuex/actions';

    export default {
      name: 'dashboard',
      data() {
        return {
          // User and Role Based Date
          // Vuex Requests Build
          showClient: true,
          showProject: false,
          client: {},
          projects: {},
          briefs: {},
        };
      },
      components: {
        listclient,
        showclient,
        showproject,
        projectpanels,
        // Brief Components

      },
      mounted() {
        this.setInitialState();
        this.getAndSetAllClients();
        this.getAndSetAllProjects();
        this.getAndSetAllBriefs();
        this.$bus.$on('setViewProject', this.setProjectShow);
        this.$bus.$on('setViewClient', this.setClientShow);
      },
      beforeDestroy() {

      },
      methods: {
        setInitialState() {
          this.$http.get('http://localhost:3000/clients/1').then((item) => {
            this.client = item.data;
            this.$store.dispatch('setClientRest', item.data);
          }, (item) => {
            // errors
            console.log(errors);
          });
        },
        getAndSetAllClients() {
          this.$http.get('http://localhost:3000/clients').then((clients) => {
            this.$store.dispatch('setAllClients', clients);
          }, (clients) => {
            console.log(errors);
          });
        },
        getAndSetAllProjects() {
          this.$http.get('http://localhost:3000/projects').then((projects) => {
            this.$store.dispatch('setAllProjects', projects);
          }, (projects) => {
            console.log(errors);
          });
        },
        getAndSetAllBriefs() {
          this.$http.get('http://localhost:3000/briefs').then((briefs) => {
            this.$store.dispatch('setAllBriefs', briefs);
          }, (briefs) => {
            console.log(errors);
          });
        },
        setProjectShow() {
          this.showClient = false;
          this.showProject = true;
        },
        setClientShow() {
          this.showClient = true;
          this.showProject = false;
        },
      },
    };
</script>