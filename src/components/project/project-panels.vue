<template>	
	<ul class="list-group projectlisttopclass">
	    <li id="project_title" class="list-group-item h4 ">Projects
	        <a @click.prevent="setListView"><span class="fa fa-list fa-pull-right"></a></span>
	        <a @click.prevent="setCardView"><span class="fa fa-th-large fa-pull-right"></a></span>
	        <a href=""><span class="fa fa-filter fa-pull-right"></a></span>
	    </li>
	    
	    <li v-show="cardView" v-for="project in currentClient.projects" class="project_panel"><a>
	        <div id="project_panel_title" @click.prevent="setProjectRest(project)"><i class="fa fa-briefcase"></i>&nbsp;{{ project.name }}</div></a>
	        <p id="project_panel_BusUnit"><i class="fa fa-folder"></i>&nbsp;<strong>Client:</strong>&nbsp;{{ currentClient.name }}</p>
          <hr>
	    </li>

	    <!-- Start List View -->
		<ul v-show="listView" class="list-group projectlistclass">
      <li id="project_list_bar" class="list-group-item" v-for="project in currentClient.projects" @click.prevent="setProjectRest(project)">
          <i class="fa fa-briefcase"></i>&nbsp;
          {{ project.name }}
      <hr>
      </li>
    </ul>	    
	</ul>
</template>

<script>
/* eslint-disable no-unused-vars*/
/* eslint-disable no-undef*/
/* eslint-disable prefer-template*/

export default {
  name: 'project-panels',
  data() {
    return {
      cardView: true,
      listView: false,
    };
  },
  computed: {
    currentClient() {
      return this.$store.getters.getClientRest;
    },
    token() {
      return sessionStorage.getItem('Authorisation');
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
      this.$http.get('http://localhost:3000/projects/' + project.id, { headers: { Authorization: this.token } }).then((response) => {
        const cproject = response.body;
        // this.currentProject = cproject;
        this.$store.dispatch('setProjectRest', cproject);
      });
      this.$bus.$emit('setViewProject');
    },
  },
};
</script>

<style lang="sass?indentedSyntax">
.progress
  marging: 0px

#project_panel_client
  font-size: 12px
  margin: 0px

#project_title
  margin-top: 10px
  padding-bottom: 10px
  border-bottom: 1px solid #999999

.projectlisttopclass
  position: relative
  display: block
  padding: 0px 15px 30px 0px
  margin: 0px 0px 10px 0px
  background-color: #fff

.projectlistclass
  position: relative
  display: block
  padding: 10px 0px 0px 0px 
  margin: 1px 
  background-color: #fff

.project_panel
  position: relative
  display: block
  background-color: #fff
  margin: 5px 0px 0px 0px 

hr
  margin: 5px 0px 0px 0px
  padding: 0px

#project_list_bar
  


</style>