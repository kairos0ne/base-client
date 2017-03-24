<template>
<div>
<!-- Start Main Container -->
  <div>
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
        <showclient v-if="showClient"></showclient>
        <showproject v-if="showProject"></showproject>
        <editproject v-if="editProject"></editproject>
        <editclient v-if="editClient"></editclient>
        <showepic v-if="showEpic"></showepic>
      </div>
    </div>
</div>
</template>
<script>
/* eslint-disable no-unused-vars*/
/* eslint-disable no-undef*/
/* eslint-disable prefer-template*/

    // Brief - resources/assets/js/components/brief
    // import showbrief from '../brief/show-brief';
    // Client - resources/assets/js/components/client
    import showclient from '../client/show-client';
    import listclient from '../client/list-clients';
    import editclient from '../client/edit-client';
    import showproject from '../project/show-project';
    import editproject from '../project/edit-project';
    import projectpanels from '../project/project-panels';
    import showepic from '../epic/show-epic';
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
          editProject: false,
          editClient: false,
          showEpic: false,
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
        editproject,
        editclient,
        showepic,
        // Brief Components

      },
      mounted() {
        this.setInitialState();
        this.getAndSetAllClients();
        this.getAndSetAllProjects();
        this.getAndSetAllBriefs();
        this.$bus.$on('setViewProject', this.setProjectShow);
        this.$bus.$on('setViewClient', this.setClientShow);
        this.$bus.$on('setViewEpic', this.setEpicShow);
        this.$bus.$on('setEditClient', this.setClientEdit);
        this.$bus.$on('setEditProject', this.setProjectEdit);
        this.$bus.$on('fetchData', this.resetData);
      },
      computed: {
        token() {
          return sessionStorage.getItem('Authorisation');
        },
      },
      beforeDestroy() {
        this.$bus.$off('setViewProject');
        this.$bus.$off('setViewClient');
        this.$bus.$off('setEditProject');
        this.$bus.$off('fetchData');
      },
      methods: {
        setInitialState() {
          this.$http.get('http://localhost:3000/clients/1', { headers: { Authorization: this.token } }).then((item) => {
            this.client = item.data;
            this.$store.dispatch('setClientRest', item.data);
          }, (item) => {
            // errors
          });
        },
        getAndSetAllClients() {
          this.$http.get('http://localhost:3000/clients', { headers: { Authorization: this.token } }).then((clients) => {
            this.$store.dispatch('setAllClients', clients.data);
          }, (clients) => {
          });
        },
        getAndSetAllProjects() {
          this.$http.get('http://localhost:3000/projects', { headers: { Authorization: this.token } }).then((projects) => {
            this.$store.dispatch('setAllProjects', projects.data);
          }, (projects) => {
          });
        },
        getAndSetAllBriefs() {
          this.$http.get('http://localhost:3000/briefs', { headers: { Authorization: this.token } }).then((briefs) => {
            this.$store.dispatch('setAllBriefs', briefs.data);
          }, (briefs) => {
          });
        },
        setProjectShow() {
          this.showProject = true;
          this.showClient = false;
          this.editProject = false;
          this.editClient = false;
          this.showEpic = false;
        },
        setProjectEdit() {
          this.editProject = true;
          this.showClient = false;
          this.showProject = false;
          this.editClient = false;
          this.showEpic = false;
        },
        setClientShow() {
          this.showClient = true;
          this.showProject = false;
          this.editProject = false;
          this.editClient = false;
          this.showEpic = false;
        },
        setClientEdit() {
          this.editClient = true;
          this.showClient = false;
          this.showProject = false;
          this.editProject = false;
          this.showEpic = false;
        },
        setEpicShow() {
          this.showEpic = true;
          this.editClient = false;
          this.showClient = false;
          this.showProject = false;
          this.editProject = false;
        },
        resetData() {
          this.getAndSetAllClients();
          this.getAndSetAllProjects();
          this.getAndSetAllBriefs();
        },
      },
    };
</script>
<style lang="sass?indentedSyntax">

#sidebar     
  border-right: 1px solid #999999
  min-height: 100vh

#middle-bar
  border-right: 1px solid #999999
  min-height: 100vh

  
</style>