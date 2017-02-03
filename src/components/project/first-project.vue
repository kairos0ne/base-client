<template>
    <div>
        <!-- Start onboarding specific template - only shows if the prop 'onboarding' is true -->
        <div v-if="onboadring" class="container">
            <h2 class="survey col-lg-offset-2 col-lg-8 col-md-8 col-sm-12">Enter the project details.</h2>
            <div class="negative-space"></div>
            <form action="" method="POST" role="form" v-show="! submitted">
                <div class="form-group col-lg-offset-2" v-show="showproject">
                    <div class="col-md-8 col-lg-8 col-sm-12  right-inner-addon pull-left">
                        <div class="left-inner-addon pullright">
                            <img role="img" src="/svg/openbracket.svg"/>
                            <input type="text" class="form-control custom_text_area" name="name" id="name" v-model="newProjectData.name" placeholder="Project" v-on:keyup.enter="setProjectAdded" autocomplete="off"/>
                        </div>
                        <img role="img" src="/svg/closebracket.svg"/>
                    </div>
                </div>
                <div class="form-group col-lg-offset-2" v-show="showdescription">
                    <div class="col-md-8 col-lg-8 col-sm-12  right-inner-addon pull-left">
                        <div class="left-inner-addon pullright">
                            <img role="img" src="/svg/openbracket.svg"/>
                            <input type="area" class="form-control custom_text_area" name="description" id="decription" v-model="newProjectData.description" placeholder="What is the core bsuiness focus" v-on:keyup.enter="setDescriptionAdded" autocomplete="off"/>
                        </div>
                        <img role="img" src="/svg/closebracket.svg"/>
                    </div>                    
                </div>
                <div class="form-group col-lg-offset-2" v-show="showtype">
                    <div class="col-md-8 col-lg-8 col-sm-12">
                        <p>Select your prefered project type and click enter.</p>
                        <select name="" id="input" class="form-control" required="required" v-model="newProjectData.type"  v-on:keyup.enter="onFormSubmit">
                            <option v-for="item in types" :value="item" >{{item}}</option>
                        </select>
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
      type: {},
      parentClient: {},
      newProjectData: {
        id: null,
        client_id: null,
        name: '',
        description: '',
        status: {},
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
      this.showtype = true;
    },
    setTypeForProject(item) {
      this.newProjectData.type = this.selected;
    },
    onFormSubmit(e) {
    // Prevent default action
      e.preventDefault();
      // update the project count.
      this.getProjectCount();
      const project = this.newProjectData;
      // Set vuex state in onboarding
      this.$store.dispatch('setProjectInOnboarding', project);
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
        status: '',
        status_value: null,
        type: '',
      };
      // send ajax request to the api resource
      this.$http.post('/api/post/projects', request);
    },
    getProjectCount() {
      this.$http.get('/api/get/projectcount').then((projectnew) => {
        this.newProjectData.id = projectnew.data;
      }, (projectnew) => {
        // Errors
      });
    },
  },
};
</script>
