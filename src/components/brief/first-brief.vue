<template>
    <div>
        <div class="container">
            <div class="negative-space"></div>
            <form id="addbriefform" action="" method="POST" role="form" v-show="! submitted">
                <div class="col-md-8 col-lg-11 col-sm-12  right-inner-addon pull-left">    
                  <ui-textbox floating-label label="Brief Overview" placeholder="Enter overview to the brief" v-model="newBriefData.overview"></ui-textbox>  
                </div>
                <div class="col-md-8 col-lg-11 col-sm-12  right-inner-addon pull-left">
                  <ui-textbox floating-label label="Objective" placeholder="Enter the brief core objective" v-model="newBriefData.objective"></ui-textbox>  
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

import { setBriefInOnboarding } from './../../vuex/actions';
import { getProjectFromOnboarding } from './../../vuex/getters';

export default {
  data() {
    return {
      submitted: false,
      overviewsubmitted: false,
      objectivesubmitted: false,
      newBriefData: {
        overview: '',
        objective: '',
        project_id: null,
      },
    };
  },
  mounted() {
  },
  computed: {
    parentProject() {
      return this.$store.getters.getProjectFromOnboarding;
    },
    token() {
      return sessionStorage.getItem('Authorisation');
    },
  },
  methods: {
    setOverviewAdded() {
      this.overviewsubmitted = true;
    },
    onFormSubmit(e) {
      // Prevent default action
      e.preventDefault();
      // Set the project id
      this.newBriefData.project_id = this.parentProject.id;
      // initialise a variable to assign the new data
      const brief = this.newBriefData;
      this.$bus.$emit('setBriefOnboarding', brief);
      // Set a request variable to hold the data
      const request = this.newBriefData;
      // show thanks message
      this.submitted = true;
      // reset inputs
      this.newBriefData = {
        overview: '',
        objective: '',
        project_id: null,
      };
      // send ajax request with the request data
      this.$http.post('http://localhost:3000/briefs', request, { headers: { Authorization: this.token } }).then((response) => {
        // Set the Vuex onboarding state
        this.$store.dispatch('setBriefInOnboarding', response.body);
      });
      // Redirect user to the dashboard
      this.$router.push('/dashboard');
    },
  },
};

</script>
