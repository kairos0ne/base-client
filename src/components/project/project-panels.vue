<template>	
	<ul class="list-group projectlisttopclass">
	    <li id="project_title" class="list-group-item h4 ">Projects
	        <a @click.prevent="setListView"><span class="fa fa-list fa-pull-right"></a></span>
	        <a @click.prevent="setCardView"><span class="fa fa-th-large fa-pull-right"></a></span>
	        <a href="{filter}"><span class="fa fa-filter fa-pull-right"></a></span>
	    </li>
	    
	    <li v-show="cardView" v-for="project in currentClient.projects" class="project_panel"><a>
	        <div id="project_panel_title" @click.prevent="setProjectRest(project)"><i class="fa fa-briefcase"></i>&nbsp;{{ project.name }}</div></a>
	        <p id="project_panel_BusUnit"><i class="fa fa-folder"></i>&nbsp;<strong>Client:</strong>&nbsp;{{ currentClient.name }}</p>
	        <div id="progress_bar_ID" class="progress">
	            <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width: 70%;">
	            </div>
	        </div>
          <hr>
	    </li>

	    <!-- Start List View -->
		<ul v-show="listView" class="list-group projectlistclass">
      <li id="project_list_bar" class="list-group-item" v-for="project in currentClient.projects" @click.prevent="setProjectRest(project)">
          <i class="fa fa-briefcase"></i>&nbsp;
          {{project.name}}
      </li>
      <hr>
    </ul>	    
	</ul>
</template>

<style lang="sass?indentedSyntax">
.progress
  marging: 0px

#project_panel_client
  font-size: 12px
  margin: 0px

#project_title
  margin-top: 10px
  padding-bottom: 10px
  border-bottom: 5px solid #4f504c

.projectlisttopclass
  position: relative
  display: block
  padding: 0px 15px 30px 0px
  margin: 0px 0px 10px 0px
  background-color: #fff

.projectlistclass
  position: relative
  display: block
  padding: 10px 15px
  margin: 5px 0px 15px 0px
  background-color: #fff

.project_panel
  position: relative
  display: block
  background-color: #fff
  margin: 5px 0px 0px 0px 

hr
  margin: 5px 0px 0px 0px
  padding: 0px
</style>

<script>
/* eslint-disable no-unused-vars*/
/* eslint-disable no-undef*/
/* eslint-disable prefer-template*/

export default {
  name: 'project-panels',
  data() {
    return {
      projectList: [],
      cardView: true,
      listView: false,
    };
  },
  computed: {
    currentClient() {
      return this.$store.getters.getClientRest;
    },
  },
  mounted() {

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
    setProjectRest(project) {
      this.request.currentProject = project;
      // Set the currentProject object on the rest state
      this.$store.dispatch('setProjectRest', request);
    },
  },
};
</script>

