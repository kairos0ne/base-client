<template>
    <div id="wrapper">
        <!-- Start Main Container -->
        <div class="container-fluid">
        <listclient></listclient>
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
    // Project - recourses/js/components/project
    import showproject from '../project/show-project';
    // import listproject from '../project/list-project';
    import projectpanels from '../project/project-panels';

    export default {
      name: 'dashboard',
      data() {
        return {
          // User and Role Based Date
          // Vuex Requests Build
          showClient: true,
          clientREST: {
            clients: [],
          },
          projectREST: {
            projects: [],
          },
          briefREST: {
            briefs: [],
          },
        };
      },
      components: {
        listclient,
        // Brief Components

      },
      mounted() {
      },
      beforeDestroy() {
      },
      methods: {
        setInitialState() {
          // Set the first client as the client that shows first
        },
        setSelectedClient(client) {
          // Set the show states for the view
        },
        setSelectedProject(project) {
          // Set the show states for the view
        },
        setSelectedBrief(brief) {
        // Set the show states for the view
        },
        setClientRest() {
        },
        setProjectRest() {
        },
        setBriefRest() {
        },
      },
    };
</script>