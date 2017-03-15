<template>
    <div>
        <ui-textbox  
          floating-label 
          label="Project Name" 
          v-model="currentProject.name"
        ></ui-textbox>

        <ui-textbox
          enforce-maxlength
          floating-label
          help="Maximum 256 characters"
          label="Project Description"
          placeholder="Introduce yourself in a few words"
          :multi-line="true"
          :maxlength="256"
          v-model="currentProject.description"
        ></ui-textbox>
          
        <button 
          type="button" 
          class="first-client-btn btn btn-sm btn-default" 
          @click.prevent="onFormSubmit"
        >Save</button>   
    
    </div>
</template>
<script>
/* eslint-disable no-unused-vars*/
/* eslint-disable no-undef*/
/* eslint-disable prefer-template*/
import { getProjectRest } from './../../vuex/getters';

export default {
  data() {
    return {
      currentProject: {
        name: '',
        description: '',
        client_id: null,
      },
      projectId: null,
    };
  },
  components: {
  },
  props: {
    enforceMaxlength: {
      type: Boolean,
      default: true,
    },
    maxlength: Number,
  },
  computed: {
    token() {
      return sessionStorage.getItem('Authorisation');
    },
  },
  mounted() {
    this.getProject();
  },
  methods: {
    onFormSubmit(e) {
      // Prevent default action
      e.preventDefault();
      // Set the request data
      const request = this.currentProject;
      this.$http.put('http://localhost:3000/projects/' + this.projectId, request, { headers: { Authorization: this.token } }).then((response) => {
        this.$store.dispatch('setProjectRest', response.body);
        this.$bus.$emit('fetchData');
        this.$bus.$emit('setViewProject');
        console.log(response.body);
        this.currentproject = {
          name: null,
          description: '',
          client_id: null,
        };
      }, (response) => {
        // Errors handled
      });
    },
    getProject() {
      const project = this.$store.getters.getProjectRest;
      this.currentProject.name = project.name;
      this.currentProject.description = project.description;
      this.currentProject.client_id = project.client_id;
      this.projectId = project.id;
    },
  },
};

</script>