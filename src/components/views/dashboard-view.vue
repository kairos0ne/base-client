<template>
    <div id="wrapper">
        <!-- Start Main Container -->
        <div id="main_content_container" class="container-fluid">
            <colgroup>
                <div id="sidebar_container" class="col-md-2 col-sm-12 col-lg-2">
                    <!-- List Clients  -->
                    <listclient></listclient>
                    <!-- List Favorites -->
                </div>
                <div id="content_bar_container" class="col-md-3 col-sm-12 col-lg-3">
                    <!-- Main Content Bar Filter  -->
                    <projectpanels></projectpanels>
                </div>
                <div id="content_section" class="col-md-7 col-lg-7 col-sm-12">
                    <!-- Main application space -->
                    
                    <!-- Start Client Rest Components -->
                    <showclient v-show='showClient' ></showclient>
                    <!-- Start edit Client --> 
                    <editclient v-show='editClient'></editclient>
                    <!-- Start Rest Project Components -->
                    <showproject v-show='showProject' ></showproject>
                    <!-- Start edit project -->
                    <editproject v-show='editProject'></editproject>
                    <!-- Start Brief Rest Components -->
                    <showbrief v-show='showBrief'></showbrief>
                    <!-- Start edit Brief  -->
                    <editbrief v-show='editBrief'></editbrief>
                    
                </div>
            </colgroup>
        </div>
    </div>
</template>

<script>
    // Brief - resources/assets/js/components/brief
    import addbrief from '../brief/add-brief';
    import showbrief from '../brief/show-brief';
    import editbrief from '../brief/edit-brief';
    import listbrief from '../brief/list-brief';

    // Client - resources/assets/js/components/client
    import addclient from '../client/add-client';
    import showclient from '../client/show-client';
    import editclient from '../client/edit-client';
    import listclient from '../client/list-client';

    // Project - recourses/js/components/project
    import addproject from '../project/add-project';
    import showproject from '../project/show-project';
    import editproject from '../project/edit-project';
    import listproject from '../project/list-project';
    import projectpanels from '../project/project-panels';

    export default {
      data() {
        return {
          // User and Role Based Data
          user: null,
          userRole: null,
          userGroup: null,
          team: null,
          // Dashboard component show booleans
          showClient: false,
          showProject: false,
          showBrief: false,
          editProject: false,
          editBrief: false,
          editClient: false,
          listProject: false,
          listClient: false,
          listBrief: false,
          // Vuex Requests Build
          request: {
            clientREST: {
              user: {},
              currentClient: {},
              clientProjects: [],
            },
            projectREST: {
              parentClient: {},
              currentProject: {},
              projectBriefs: [],
            },
            briefREST: {
              parentProject: {},
              currentBrief: {},
              briefFeatures: [],
            },
          },
        };
      },
      components: {
        // Client Components
        addclient,
        showclient,
        editclient,
        listclient,
        // Project Components
        addproject,
        showproject,
        editproject,
        listproject,
        projectpanels,
        // Brief Components
        addbrief,
        showbrief,
        editbrief,
        listbrief,
      },
      mounted() {
      },
      beforeDestroy() {
      },
      methods: {
        setInitialState() {
          this.$http.get('api/client/latest').then((response) => {
            // Set Vuex Client Rest With Latest Client
            console.log(response.data);
            this.$store.dispatch('setCurrentClient', response.data);
          }, (response) => {
            // error callback
            console.log('Something is wrong with setInitialClientState on main app component');
          });
        },
        // Insert main application methods here
        setSelectedClient(client) {
        // Set the show states for the view
          this.showBrief = false;
          this.showProject = false;
          this.showClient = true;
          this.editProject = false;
          this.editProject = false;
          this.editClient = false;
          this.editBrief = false;
          this.listProject = true;
          this.listBrief = false;
          this.listClient = false;
        },
        setSelectedProject(project) {
        // Set the show states for the view
          this.showBrief = false;
          this.showProject = true;
          this.showClient = false;
          this.editProject = false;
          this.editClient = false;
          this.editBrief = false;
          this.listBrief = true;
          this.listClient = false;
          this.listProject = false;
        },
        setSelectedBrief(brief) {
        // Set the show states for the view
          this.showBrief = true;
          this.showProject = false;
          this.showClient = false;
          this.editProject = false;
          this.editClient = false;
          this.editBrief = false;
          this.listClient = false;
          this.listProject = false;
          this.listBrief = false;
        },
      },
    };
</script>