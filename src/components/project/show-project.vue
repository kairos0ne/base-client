<template>
    <div id="content_pane_container">
        <ul id="show_project_list" class="list-group ">
            <li id="project_title" class="list-group-item h4 ">{{ ProjectData.name }}
                <a id="btn-edit" class="btn btn-default btn-xs pull-right" @click.prevent="editSelectedProject(ProjectData)">
                    <i class="fa fa-pencil pull-right"></i>Edit
                </a>
                <a id="btn-complete" class="btn btn-primary btn-xs pull-right" href="#">
                    <i class="fa fa-tick pull-right"></i>Complete
                </a>
                 <a class="badge_lable"><span class="badge"><i class="fa fa-book" ></i>&nbsp;Briefs -&nbsp;{{briefList.length}}</span></a>
                    
                 <br>
            </li>
            <div id="page_content_brief">
                <p>{{ ProjectData.description }}</p>
            </div>
        </ul>
        <listbrief></listbrief> 
    </div>
</template>
<script>
/* eslint-disable no-unused-vars*/
/* eslint-disable no-undef*/
/* eslint-disable prefer-template*/

import listbrief from '../brief/list-brief';

export default {
  data() {
    return {
      ProjectRest: {},
      ProjectData: {},
      parentClient: {},
      clientID: null,
      projectID: null,
      briefList: [],
    };
  },
  components: {
    listbrief,
  },
  mounted() {
    this.$bus.$on('setProjectRest', this.getProjectData);
    this.getProjectRest();
  },
  methods: {
    editSelectedProject() {
    // this.$dispatch('setShowProjectFalse');
    // this.$dispatch('setEditProjectTrue');
    },
    getProjectData() {
      this.ProjectData = this.$store.getters.currentProject;
      this.parentClient = this.$store.getters.parentClient;
    },
    getProjectRest() {
      this.ProjectRest = this.$store.getters.getProjectRest;
      this.ProjectData = this.$store.getters.currentProject;
      this.parentClient = this.$store.getters.parentClient;
    },
  },
};

</script>