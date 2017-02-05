<template>
    <div>
        <div class="container">
            <div class="negative-space"></div>
            <form id="addbriefform" action="" method="POST" role="form" v-show="! submitted">
                <div class="form-group col-lg-offset-2" v-show=" ! overviewsubmitted">
                    <div class="col-md-8 col-lg-8 col-sm-12  right-inner-addon pull-left">
                    <div class="left-inner-addon pullright">
                        <img role="img" src="/static/openbracket.svg"/>
                    <input type="text" class="form-control custom_text_area" name="Overview" id="overview" v-model="newBriefData.overview" placeholder="What is the background to the brief?" v-on:keyup.enter="setOverviewAdded" autocomplete="off"/>
                        </div>
                        <img role="img" src="/static/closebracket.svg"/>
                    </div>
                </div>
                <div class="form-group col-lg-offset-2" v-show=" overviewsubmitted">
                    <div class="col-md-8 col-lg-8 col-sm-12  right-inner-addon pull-left">
                        <div class="left-inner-addon pullright">
                            <img role="img" src="/static/openbracket.svg"/>
                    <input type="text" class="form-control custom_text_area" name="Objective" id="objective" v-model="newBriefData.objective" placeholder="What are you trying to achieve with the platform?" v-on:keyup.enter="onFormSubmit" autocomplete="off"/>
                        </div>
                        <img role="img" src="/static/closebracket.svg"/>
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
      this.$bus.$emit('setBriefOnboarding', brief);
      // Set a request variable to hold the data
      const request = this.newBriefData;
      // show thanks message
      this.submitted = true;
      // reset inputs
      this.newBriefData = {
        id: null,
        overview: '',
        objective: '',
        project_id: null,
      };
      // send ajax request with the request data
      console.log(request);
      this.$http.post('http://localhost:3000/briefs', request);
      // Redirect user to the dashboard
      this.$router.push('/dashboard');
    },
    getBriefCount() {
      // Ajax request to api route for briefcount
      // NOTE : THIS SHOULD BE CHANGED TO USE A STATE WITH VUEX
      this.$http.get('http://localhost:3000/briefcount').then((briefnew) => {
        // get the request data
        this.newBriefData.id = briefnew.data;
      }, (briefnew) => {
        // Errors
      });
    },
  },
};

</script>
