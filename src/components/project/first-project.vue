<template>
    <div>
        <!-- Start onboarding specific template - only shows if the prop 'onboarding' is true -->
        <div v-if="onboadring" class="container">
            <div class="negative-space"></div>
            <form action="" method="POST" role="form" v-show="! submitted">
                <div class="form-group col-lg-offset-2" v-show="showproject">
                    <div class="col-md-8 col-lg-8 col-sm-12  right-inner-addon pull-left">
                        <div class="left-inner-addon pullright">
                            <img role="img" src="/static/openbracket.svg"/>
                            <input type="text" class="form-control custom_text_area" name="name" id="name" v-model="newProjectData.name" placeholder="Project" v-on:keyup.enter="setProjectAdded" autocomplete="off"/>
                        </div>
                        <img role="img" src="/static/closebracket.svg"/>
                    </div>
                </div>
                <div class="form-group col-lg-offset-2" v-show="showdescription">
                    <div class="col-md-8 col-lg-8 col-sm-12  right-inner-addon pull-left">
                        <div class="left-inner-addon pullright">
                            <img role="img" src="/static/openbracket.svg"/>
                            <input type="area" class="form-control custom_text_area" name="description" id="decription" v-model="newProjectData.description" placeholder="What is the core bsuiness focus" v-on:keyup.enter="onFormSubmit" autocomplete="off"/>
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

import { setProjectInOnboarding } from './../../vuex/actions';

export default {
  data() {
    return {
      submitted: false,
      showproject: true,
      showdescription: false,
      showtype: false,
      selected: '',
      parentClient: {},
      newProjectData: {
        id: null,
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
  mounted() {
    // Get the client ID
    // Replace - this.newProjectData.client_id = this.clientFromOnboarding.id;
    this.getProjectCount();
    this.parentClient = this.$store.getters.getClientFromOnboarding;
    this.newProjectData.client_id = this.parentClient.id;
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
    // Prevent default action
      e.preventDefault();
      // update the project count.
      this.getProjectCount();
      const project = this.newProjectData;
      // Set vuex state in onboarding
      this.$store.dispatch('setProjectInOnboarding', project);
      this.$bus.$emit('setProjectOnboarding', project);
      // Set form submitted to true
      this.submitted = true;
      // Set showarea to false
      this.showarea = false;
      // Set the request data
      const request = this.newProjectData;
      // Reset inputs
      this.newProjectData = {
        id: null,
        name: '',
        description: '',
        client_id: null,
        complete: null,
      };
      // send ajax request to the api resource
      console.log(request);
      this.$http.post('http://localhost:3000/projects', request);
    },
    getProjectCount() {
      this.$http.get('http://localhost:3000/projects/count').then((projectnew) => {
        this.newProjectData.id = projectnew.data + 1;
      }, (projectnew) => {
        // Errors
      });
    },
  },
};
</script>
