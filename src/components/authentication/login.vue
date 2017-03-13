<template>
  <div>
    <div class="container">
      <div class="col-lg-12 col-md-12">
        <form class="registrationform"  method="POST" action="" role="form">

          <div class="col-md-10 col-lg-10 col-sm-12  right-inner-addon pull-left">
            <ui-textbox  floating-label label="Email" placeholder="Email" v-model="userDetails.email"></ui-textbox> 
          </div>
            
          <div class="col-md-10 col-lg-10 col-sm-12  right-inner-addon pull-left">
            <ui-textbox type="password" floating-label label="Password" placeholder="Password" v-model="userDetails.password"></ui-textbox> 
          </div>
                  
          <div class="validations">{{passwordMessage}}</div>
          </div>
        </form>
    </div>
    <div class="container">
      <button type="button" class="btn btn-md btn-default registration_button" v-on:click="setDetailsAdded">Submit</button>
      <div v-show="showErrors">{{errorResponse}} </div>
    </div> 
  </div>     
</template>

<script>
/* eslint-disable no-unused-vars*/
/* eslint-disable no-undef*/
/* eslint-disable prefer-template*/
export default {
  name: 'Register',
  data() {
    return {
      errorResponse: {},
      showReqister: true,
      showErrors: false,
      passwordMessage: '',
      userDetails: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    setDetailsAdded(e) {
      // Prevent default action
      e.preventDefault();
      // Set the request data from user details
      const request = this.userDetails;
      // Post the user to the users api endpoint
      this.$http.post('http://localhost:3000/authenticate', request).then((response) => {
        // get body data (user)
        const data = response.body;
        this.$store.dispatch('setAuthToken', data.auth_token);
        sessionStorage.setItem('Authorisation', data.auth_token);
        sessionStorage.setItem('UserId', data.user_id);
        this.$bus.$emit('loggedIn');
        this.$router.push('/dashboard ');
      }, (response) => {
        // errors
      });
    },
  },
};
</script>
<style lang="sass?indentedSyntax">

.vspace
  height: 20px

#imgspace
  margin: 20px 0px 0px 0px

.registration_button
  margin: 50px 0px 30px 0px

</style>

