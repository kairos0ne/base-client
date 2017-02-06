<template>
<div>
<!-- Start Main Container -->
  <div class="row">
    <div class="col-lg-2
                col-md-2
              ">
        <div class="box sidebar">
          <listclient></listclient>
        </div>
    </div>
    <div class="col-lg-2
                col-md-2
                col-sm-12
                col-xs-12
              ">
        <div class="box">
          <projectpanels></projectpanels>
        </div>
    </div>
    <div class="col-lg-8
                col-md-8
                col-sm-12
                col-xs-12
              ">    
        <div class="box">
          <showclient></showclient>
        </div>
    </div>
</div>
</template>
<style lang="sass?indentedSyntax">
    .box
     padding: 0px 10px 0px 10px

    .sidebar
      height: 100%
      border-right: 1px

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
          client: {},
          projects: {},
          briefs: {},
        };
      },
      components: {
        listclient,
        showclient,
        projectpanels,
        // Brief Components

      },
      mounted() {
        this.setInitialState();
        this.getAndSetAllClients();
        this.getAndSetAllProjects();
        this.getAndSetAllBriefs();
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
            this.$store.dispatch('setAllProjects', briefs);
          }, (briefs) => {
            console.log(errors);
          });
        },
      },
    };
</script>