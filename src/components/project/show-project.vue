<template>
    <div>
        <ul >
            <li id="project_title" class="list-group-item h4 ">{{ currentProject.name }}
                <a id="btn-edit" class="btn btn-default btn-xs pull-right" @click.prevent="editProject(currentProject)">
                    <i class="fa fa-pencil pull-right"></i>Edit
                </a>
                <a id="btn-complete" class="btn btn-primary btn-xs pull-right" href="#">
                    <i class="fa fa-tick pull-right"></i>Complete
                </a>
            </li>
            <div id="page_content_brief">
                <h4>{{ currentProject.description }}</h3>
            </div>
            <hr>
        </ul>
      <form action="/file-upload" class="dropzone needsclick dz-clickable" id="my-awesome-dropzone">  
        <div class="dz-message needsclick">"Drop Files Here or Click to Add Files"</div>
      </form>
    </div>
</template>
<style lang="sass?indentedSyntax">
.dropzone
  width: 100%
  height: 100px
  border: 1px dashed #999
.dz-message
  padding: 40px 0px 40px 300px 


</style>
<script>
/* eslint-disable no-unused-vars*/
/* eslint-disable no-undef*/
/* eslint-disable prefer-template*/
import { getClientRest } from './../../vuex/getters';

export default {
  name: 'show-project',
  data() {
    return {
      ProjectID: null,
      projectList: [],
    };
  },
  mounted() {
    console.log('The current client:' + this.currentClient);
  },
  beforeDestroy() {
  },
  computed: {
    currentProject() {
      return this.$store.getters.getProjectRest;
    },
  },
  methods: {
    editProject(currentProject) {
      this.$bus.$emit('setEditProject', currentProject);
    },
  },
};

</script>