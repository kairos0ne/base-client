<template>
    <div>
        <div class="container">
            <div class="negative-space">
            </div>
            <form method="POST" action="" role="form" v-show="! submitted">
                <div class="form-group" v-show="showname">
                    <div class="col-md-10 col-lg-10 col-sm-12  right-inner-addon pull-left">
                        <div class="left-inner-addon pullright">
                            <img role="img" src="/static/openbracket.svg"/>
                            <input id="clientInput" type="text" class="form-control custom_text_area" name="name" v-model="newClientData.name" placeholder="Client name" v-on:keyup.enter="setNameAdded" autocomplete="off"/>
                        </div>
                        <img role="img" src="/static/closebracket.svg"/>
                    </div>
                </div>
                <div class="form-group" v-show="showarea">
                    <div class="col-md-10 col-lg-10 col-sm-12  right-inner-addon pull-left">
                        <div class="left-inner-addon pullright">
                            <img role="img" src="/static/openbracket.svg"/>
                            <input  type="text" class="form-control custom_text_area" name="business_area" id="business_area" v-model="newClientData.business_area" placeholder="What is the core bsuiness focus" v-on:keyup.enter="onFormSubmit" autocomplete="off"/>
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
  computed: {
    user() {
      return this.$store.getters.getLoggedInUser;
    },
    authToken() {
      return this.$store.getters.getAuthToken;
    },
  },
  mounted() {
    // Get the client Count
    this.getClientCount();
    this.setClientUserId();
  },
  methods: {
    setNameAdded() {
      this.showname = false;
      this.showarea = true;
    },
    onFormSubmit(e) {
      // Prevent default action
      e.preventDefault();
      this.setClientUserId();
      // Run the client function to ensure that the latest is current
      this.getClientCount();
      // Set the user ID of the newClientData
      this.newClientData.id = this.user.id;
      console.log(this.newClientData);
      // Store client in in onboarding vuex state
      const client = this.newClientData;
      // Set the Vuex state on the client
      this.$store.dispatch('setClientInOnboarding', client);
      this.$bus.$emit('setClientOnboarding', client);
      // set both to false
      this.submitted = true;
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
      console.log(this.authToken);
      this.$nextTick(() => {
        this.$http.post('http://localhost:3000/clients', client, { headers: { Authorization: this.authToken.auth_token } }).then((response) => {
          console.log(client);
          console.log(response.body);
        });
      });
    },
    getClientCount() {
      this.$nextTick(() => {
        this.$http.get('http://localhost:3000/clients/count', { headers: { Authorization: this.authToken.auth_token } }).then((request) => {
        // Set the new client id with a count + 1
          this.newClientData.id = request.data + 1;
        }, (request) => {
      // Errors go here
        });
      });
    },
    setClientUserId() {
      const userid = this.user.id;
      this.$nextTick(() => {
        console.log(userid);
        this.newClientData.id = this.user.id;
      });
    },
  },
};

</script>
