<template>
    <div>
        <div class="container">
            <div class="negative-space">
            </div>
            <form method="POST" action="" role="form" v-show="! submitted">
                <div class="col-md-11 col-lg-11 col-sm-12  right-inner-addon pull-left">
                  <ui-textbox floating-label label="Client Name" placeholder="Enter your name" v-model="newClientData.name"></ui-textbox>  
                </div>
                </br>
                <div class="col-md-11 col-lg-11 col-sm-12  right-inner-addon pull-left">    
                  <ui-textbox floating-label label="Client Business Area" placeholder="Enter your name" v-model="newClientData.business_area"></ui-textbox>
                </div>
               </br>
            </form>
            <button type="button" class="first-client-btn btn btn-sm btn-default" @click.prevent="onFormSubmit">Submit</button>  
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
      newClientData: {
        name: '',
        business_area: '',
        user_id: null,
      },
    };
  },
  computed: {
    userId() {
      return sessionStorage.getItem('UserId');
    },
    token() {
      return sessionStorage.getItem('Authorisation');
    },
  },
  mounted() {
  },
  methods: {
    setNameAdded() {
      this.showname = false;
      this.showarea = true;
    },
    onFormSubmit(e) {
      // Prevent default action
      e.preventDefault();
      // Set the user ID of the newClientData
      this.newClientData.user_id = this.userId;
      // Store client in in onboarding vuex state
      const client = this.newClientData;
      // Set the project show to false on the parent component
      this.$bus.$emit('setClientOnboarding', client);
      // set both to false to hide the each
      this.submitted = true;
      this.showarea = false;
      this.showname = true;
      // reset inputs to clear data for collection
      this.newClientData = {
        id: null,
        name: '',
        business_area: '',
        user_id: null,
      };
      // send ajax request
      this.$nextTick(() => {
        this.$http.post('http://localhost:3000/clients', client, { headers: { Authorization: this.token } }).then((response) => {
          // Set the Vuex state on the client
          this.$store.dispatch('setClientInOnboarding', response.body);
        });
      });
    },
  },
};

</script>
<style lang="sass?indentedSyntax">
  .ui-textbox
    font-size: 15px
    margin: 10px

  .first-client-btn
    margin: 20px 0px 0px 10px

  .ui-textbox__input 
    font-size: 1.5rem
    height: 3rem

  .ui-textbox__textarea 
    font-size: 1.5rem
    height: 3rem
  
  .ui-textbox__label-text
    font-size: 1.5rem
</style>
