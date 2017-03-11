<template>
    <div>
        <!-- Start onboarding specific template - only shows if the prop 'onboarding' is true -->
        <div v-if="onboadring" class="container">
            <div class="negative-space"></div>
            <form action="" method="POST" role="form" v-show="! submitted">
                
                    <div class="col-md-11 col-lg-11 col-sm-12  right-inner-addon pull-left">
                      <ui-textbox floating-label label="Project Name" placeholder="Enter the project name" v-model="newProjectData.name"></ui-textbox>  
                    </div>

                    <div class="col-md-11 col-lg-11 col-sm-12  right-inner-addon pull-left">
                      <ui-textbox floating-label label="Project Description" placeholder="Enter the project description" v-model="newProjectData.description"></ui-textbox>  
                    </div>                    
            </form>
            <button type="button" class="first-client-btn btn btn-sm btn-default" @click.prevent="onFormSubmit">Submit</button>  
        </div>  
    </div>
</template>
<script>
/* eslint-disable no-unused-vars*/
/* eslint-disable no-undef*/
/* eslint-disable prefer-template*/
import { setProjectInOnboarding } from './../../vuex/actions';

export default {
  data() {
    return {
      submitted: false,
      showproject: true,
      showdescription: false,
      showtype: false,
      selected: '',
      newProjectData: {
        client_id: null,
        name: '',
        description: '',
        complete: 0,
      },
    };
  },
  props: {
    onboadring: false,
  },
  computed: {
    token() {
      return sessionStorage.getItem('Authorisation');
    },
    parentClient() {
      return this.$store.getters.getClientFromOnboarding;
    },
  },
  mounted() {
  },
  methods: {
    setProjectAdded() {
      this.showproject = false;
      this.showdescription = true;
    },
    setDescriptionAdded() {
      this.showdescription = false;
    },
    onFormSubmit(e) {
    // Prevent default action.
      e.preventDefault();
      // Get the client ID.
      this.newProjectData.client_id = this.parentClient.id;
      // update the project count.
      const project = this.newProjectData;
      this.$bus.$emit('setProjectOnboarding', project);
      // Set form submitted to true.
      this.submitted = true;
      // Set showarea to false.
      this.showarea = false;
      // Set the request data.
      const request = this.newProjectData;
      // Reset inputs.
      this.newProjectData = {
        name: '',
        description: '',
        client_id: null,
        complete: null,
      };
      // send ajax request to the api resource.
      this.$http.post('http://localhost:3000/projects', request, { headers: { Authorization: this.token } }).then((response) => {
        // Set vuex state in onboarding.
        this.$store.dispatch('setProjectInOnboarding', response.body);
      }, (response) => {
        // something else.
      });
    },
  },
};
</script>
