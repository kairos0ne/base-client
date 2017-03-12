<template>
  <div>
    <div class="container">
      <div class="col-lg-12 col-md-12">
        <form class="registrationform"  method="POST" action="" role="form">
          <div class="col-md-10 col-lg-10 col-sm-12  right-inner-addon pull-left">
            <ui-textbox  floating-label label="Name" placeholder="Name" v-model="userDetails.name"></ui-textbox>    
          </div>
                
          <div class="col-md-10 col-lg-10 col-sm-12  right-inner-addon pull-left">
            <ui-textbox floating-label label="User Name" placeholder="User Name" v-model="userDetails.username"></ui-textbox> 
          </div>
          
          <div class="col-md-10 col-lg-10 col-sm-12  right-inner-addon pull-left">
            <ui-textbox type="email" floating-label label="Email" placeholder="Email" v-model="userDetails.email"></ui-textbox> 
          </div>
            
          <div class="col-md-10 col-lg-10 col-sm-12  right-inner-addon pull-left">
            <ui-textbox type="password" floating-label label="Password" placeholder="Password" v-model="userDetails.password"></ui-textbox> 
          </div>
                  
          <div class="col-md-10 col-lg-10 col-sm-12  right-inner-addon pull-left">
            <ui-textbox type="password" floating-label label="Password Confirmation" placeholder="Password Confirmation" v-model="userDetails.password_confirmation"></ui-textbox> 
          </div>
          <div class="validations">{{passwordMessage}}</div>
          </div>
        </form>
    </div>
    <div class="container">
      <button type="button" class="btn btn-md btn-default registration_button" v-on:click="setDetailsAdded">Register</button>
      <button type="button" class="btn btn-md btn-default registration_button" >Login</button>
      <div v-show="showErrors">{{errorResponse}} TEST</div>
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
        name: '',
        email: '',
        username: '',
        password: '',
        password_confirmation: '',
      },
      authRequest: {
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
      this.$http.post('http://localhost:3000/users', request).then((response) => {
        // get body data (user)
        const user = response.body;
        // Set the authentication request data => email && password
        this.authRequest.password = request.password;
        this.authRequest.email = request.email;
        // Set the authentication object
        const authentication = this.authRequest;
        // Post the data to the endpoint
        this.$http.post('http://localhost:3000/authenticate', authentication).then((authtoken) => {
          const token = authtoken.body;
          this.$store.dispatch('setAuthToken', token.auth_token);
          sessionStorage.setItem('Authorisation', token.auth_token);
          sessionStorage.setItem('UserId', user.id);
        });
        // Set the user in the VUEX STATE for use in onboarding
        this.$store.dispatch('setUser', user);
        // If response status is 500 print the error messages
        if (response.status >= 200 && response.status <= 204) {
          this.$router.push('/clientkey');
        }
      }, (response) => {
        this.setErrors(response);
      });
    },
    setErrors(response) {
      // Set the error status code for the route
      const code = response.status;
      // Set the error body for the page message
      const error = response.body;
      this.$store.dispatch('setError', error);
      // Route to named route for errors
      router.push({ name: 'error', params: { errorId: error } });
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

