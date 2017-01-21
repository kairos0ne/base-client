<template>
    <div>
        <div class="container">
            <h2 class="survey col-lg-offset-2 col-lg-8 col-md-8 col-sm-12">Add the client details.</h2>
            <div class="negative-space">
            </div>
            <form method="POST" action="" role="form" v-show="! submitted">
                <div class="form-group col-lg-offset-2" v-show="showname">
                    <div class="col-md-8 col-lg-8 col-sm-12  right-inner-addon pull-left">
                        <div class="left-inner-addon pullright">
                            <img role="img" src="/svg/openbracket.svg"/>
                            <input id="clientInput" type="text" class="form-control custom_text_area" name="name" v-model="newClientData.name" placeholder="Client name" v-on:keyup.enter="setNameAdded" autocomplete="off"/>
                        </div>
                        <img role="img" src="/svg/closebracket.svg"/>
                    </div>
                </div>
                <div class="form-group col-lg-offset-2" v-show="showarea">
                    <div class="col-md-8 col-lg-8 col-sm-12  right-inner-addon pull-left">
                        <div class="left-inner-addon pullright">
                            <img role="img" src="/svg/openbracket.svg"/>
                            <input  type="text" class="form-control custom_text_area" name="business_area" id="business_area" v-model="newClientData.business_area" placeholder="What is the core bsuiness focus" v-on:keyup.enter="onFormSubmit" autocomplete="off"/>
                        </div>
                        <img role="img" src="/svg/closebracket.svg"/>
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
import { setClientInOnboarding } from './../../vuex/actions';

export default {
  data() {
    return {
      submitted: false,
      showname: true,
      showarea: false,
      newClientData: {
        id: null,
        name: '',
        business_area: '',
        user_id: null,
      },
    };
  },
  created() {
    // Get the client Count
    this.getClientCount();
        // focus first input
    this.getUser();
  },
  methods: {
    setNameAdded() {
      this.showname = false;
      this.showarea = true;
    },
    onFormSubmit(e) {
      // Prevent default action
      e.preventDefault();
      // Run the client function to ensure that the latest is current
      this.getClientCount();
      // Store client in in onboarding vuex state
      const client = this.newClientData;

      // Set the Vuex state on the client
      this.$store.dispatch('setClientInOnboarding', client);
      eventHub.$emit('setClientOnboarding', client);
      const request = this.newClientData;
      this.submitted = true;
      // set both to false
      this.showarea = false;
      this.showname = true;
      // reset inputs
      this.newClientData = {
        id: null,
        name: '',
        business_area: '',
        user_id: null,
      };
      // send ajax request
      this.$http.post('/api/post/clients', request);
    },
    getClientCount() {
      this.$http.get('/api/get/clientcount').then((clientnew) => {
          // Set the new client id with a count + 1
        this.newClientData.id = clientnew.data;
      }, (response) => {
        // Errors go here
      });
    },
    getUser() {
      this.$http.get('/api/get/user').then((userdetails) => {
        this.newClientData.user_id = userdetails.data.id;
      }, (response) => {
        // Errors go here
      });
    },
  },
};

</script>
