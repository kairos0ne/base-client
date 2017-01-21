<template>	
	<ul class="list-group">
	    <li id="project_title" class="list-group-item h4 ">Projects
	        <a @click.prevent="setListView"><span class="fa fa-list fa-pull-right"></a></span>
	        <a @click.prevent="setCardView"><span class="fa fa-th-large fa-pull-right"></a></span>
	        <a href="{filter}"><span class="fa fa-filter fa-pull-right"></a></span>
	    </li>
	    
	    <li v-show="cardView" v-for="project in projectList" class="project_panel"><a>
	        <div id="project_panel_title" @click.prevent="fireProjectEvent(project)"><i class="fa fa-briefcase"></i>&nbsp;{{ project.name }}</div></a>
            <p id="project_panel_BusUnit">{{project.description}}</p>
	        <p id="project_panel_BusUnit"><i class="fa fa-folder"></i>&nbsp;<strong>Client:</strong>&nbsp;{{ ClientData.name }}</p>
	        <div id="progress_bar_ID"class="progress">
	            <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width: 70%;">
	                <span class="sr-only"></span>
	            </div>
	        </div>
	        <hr>
	    </li>

	    <!-- Start List View -->
		<ul v-show="listView" class="list-group">
            <a>
                <li id="project_list_bar" class="list-group-item" v-for="project in projectList" @click.prevent="setProjectRest(project)">
                    <i class="fa fa-briefcase"></i>&nbsp;
                    {{project.name}}
                </li>
            </a>
        </ul>	    
	</ul>
</template>
<script>
/* eslint-disable no-unused-vars*/
/* eslint-disable no-undef*/
/* eslint-disable prefer-template*/

export default {
  data() {
    return {
      ClientRest: {},
      ClientData: {},
      ClientID: null,
      projectList: [],
      editToggel: true,
      status: '',
      cardView: true,
      listView: false,
      request: {
        parentClient: {},
        currentProject: {},
        projectBriefs: [],
      },
    };
  },
  mounted() {
    this.projectList = this.$store.getters.getProjectRest.projectList;
    this.ClientData = this.$store.getters.getProjectRest.parentClient;
  },
  methods: {
    setListView() {
      this.cardView = false;
      this.listView = true;
    },
    setCardView() {
      this.cardView = true;
      this.listView = false;
    },
    setClient(client) {
      this.$http.get('api/get/projects/' + client.id).then((projects) => {
        this.projectList = projects.data;
      }, (projects) => {
        // Errors
      });
    },
    setProjectRest(project) {
      this.request.currentProject = project;
      // Set the currentProject object on the rest state
      this.$store.dispatch('setProjectRest', request);
    },
  },
};
</script>