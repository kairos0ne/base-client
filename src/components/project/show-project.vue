<template>
    <div>
        <ul>
            <li id="project_title" class="list-group-item h4 ">{{ currentProject.name }}
                <a id="btn-edit" class="btn btn-default btn-xs pull-right" @click.prevent="editProject">
                    <i class="fa fa-pencil pull-right"></i>Edit
                </a>
                <a id="btn-complete" class="btn btn-primary btn-xs pull-right" href="#">
                    <i class="fa fa-tick pull-right"></i>Complete
                </a>
            </li>
            <div id="page_content_brief">
                <h4>{{ currentProject.description }}</h3>
            </div>
        </ul>
          <!--<ui-tabs type="text">  
              <ui-tab v-if="epics" title="Epics">
                
              </ui-tab>
          </ui-tabs>-->

    </div>
</template>

<script>
/* eslint-disable no-unused-vars*/
/* eslint-disable no-undef*/
/* eslint-disable prefer-template*/
import { getProjectRest } from './../../vuex/getters';
// import epicspanel from './epics-panel';

export default {
  name: 'show-project',
  data() {
    return {
      epics: [],
    };
  },
  components: {
    // epicspanel,
  },
  mounted() {
    this.$bus.$on('setViewProject', this.getEpics());
  },
  beforeDestroy() {
  },
  computed: {
    currentProject() {
      return this.$store.getters.getProjectRest;
    },
    token() {
      return sessionStorage.getItem('Authorisation');
    },
  },
  methods: {
    editProject(currentProject) {
      this.$bus.$emit('setEditProject', currentProject);
    },
    getEpics() {
      this.epics = this.currentProject.epic;
    },
  },
};

</script>

<style lang="sass?indentedSyntax">

.dropzone
  height: 100px
  border: 1px dashed #999
.dz-message
  text-align: center
  padding: 40px 0px 40px 0px

@media screen and (max-width:412px) 
  .dropzone
    height: 50px
    border: 1px dashed #999
  .dz-message
    text-align: center 
    padding: 20px 0px 20px 0px

.ui-tab-header-item__text 
  white-space: nowrap
  overflow: hidden
  text-overflow: ellipsis
  font-size: 2rem
  font-weight: 300
  padding: 0px 10px

</style>