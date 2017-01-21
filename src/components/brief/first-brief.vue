<template>
    <div>
        <div class="container">
            <h2 class="survey col-lg-offset-2 col-lg-8 col-md-8 col-sm-12"><i class="fa fa-quote-left grey-icon"></i>What people think of as the moment of discovery is really the discovery of the question - Jonas Salk.  <i class="fa fa-quote-right grey-icon"></i></h2>
            <div class="negative-space"></div>
            <form id="addbriefform" action="" method="POST" role="form" v-show="! submitted">
                <div class="form-group col-lg-offset-2" v-show=" ! overviewsubmitted">
                    <div class="col-md-8 col-lg-8 col-sm-12  right-inner-addon pull-left">
                    <div class="left-inner-addon pullright">
                        <img role="img" src="/svg/openbracket.svg"/>
                    <input type="text" class="form-control custom_text_area" name="Overview" id="overview" v-model="newBriefData.overview" placeholder="What is the background to the brief?" v-on:keyup.enter="setOverviewAdded" autocomplete="off"/>
                        </div>
                        <img role="img" src="svg/closebracket.svg"/>
                    </div>
                </div>
                <div class="form-group col-lg-offset-2" v-show=" overviewsubmitted">
                    <div class="col-md-8 col-lg-8 col-sm-12  right-inner-addon pull-left">
                        <div class="left-inner-addon pullright">
                            <img role="img" src="/svg/openbracket.svg"/>
                    <input type="text" class="form-control custom_text_area" name="Objective" id="objective" v-model="newBriefData.objective" placeholder="What are you trying to achieve with the platform?" v-on:keyup.enter="onFormSubmit" autocomplete="off"/>
                        </div>
                        <img role="img" src="svg/closebracket.svg"/>
                    </div>
                </div>
            </form> 
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
      parentProject: {},
      newBriefData: {
        id: null,
        overview: '',
        objective: '',
        project_id: null,
        status: 'New',
        status_value: 1,
        ticket: 1,
        jira_epic: 1,
      },
    };
  },
  mounted() {
    // Get the total number of briefs
    this.getBriefCount();
    // Listen for the project set event on the add-project component
    this.parentProject = this.$store.getters.getProjectFromOnboarding;
    this.newBriefData.project_id = this.parentProject.id;
  },
  methods: {
    setOverviewAdded() {
      this.overviewsubmitted = true;
    },
    onFormSubmit(e) {
      // Prevent default action
      e.preventDefault();
      // update the brief count
      this.getBriefCount();
      // initialise a variable to assign the new data
      const brief = this.newBriefData;
      // Set the Vuex onboarding state
      this.$store.dispatch('setBriefInOnboarding', brief);
      // Set the brief added with eventHub
      eventHub.$emit('setBriefOnboarding', brief);
      // Set a request variable to hold the data
      const request = this.newBriefData;
      // show thanks message
      this.submitted = true;
      // reset inputs
      this.newBriefData = {
        id: null,
        status: '',
        status_value: null,
        overview: '',
        objective: '',
        project_id: null,
        ticket: null,
      };
      // send ajax request with the request data
      this.$http.post('/api/post/briefs', request);
      // Redirect user to the dashboard
      this.$router.push('/dashboard');
    },
    getBriefCount() {
      // Ajax request to api route for briefcount
      // NOTE : THIS SHOULD BE CHANGED TO USE A STATE WITH VUEX
      this.$http.get('/api/get/briefcount').then((briefnew) => {
        // get the request data
        this.newBriefData.id = briefnew.data;
      }, (briefnew) => {
        // Errors
      });
    },
  },
};

</script>
