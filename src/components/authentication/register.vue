<template>
<div>
      <div class="container">
        <div v-show="showReqister" class="col-lg-12 col-md-12">
          <form class="registrationform"  method="POST" action="" role="form">
                <div class="form-group">
                    <div class="col-md-10 col-lg-10 col-sm-12  right-inner-addon pull-left">
                    <div class="vspace"></div>
                        <div class="left-inner-addon pullright">
                            <img role="img" src="/static/openbracket.svg"/>
                            <input id="nameInput" required  type="text" class="form-control custom_text_area" name="name" v-model="userDetails.name" placeholder="Name" autocomplete="off"/>
                        </div>
                        <img id="imgspace" role="img" src="/static/closebracket.svg"/>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-md-10 col-lg-10 col-sm-12  right-inner-addon pull-left">
                    <div class="vspace"></div>
                        <div class="left-inner-addon pullright">
                            <img role="img" src="/static/openbracket.svg"/>
                            <input id="nameInput" required  type="text" class="form-control custom_text_area" name="username" v-model="userDetails.username" placeholder="User Name" autocomplete="off"/>
                        </div>
                        <img id="imgspace" role="img" src="/static/closebracket.svg"/>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-md-10 col-lg-10 col-sm-12  right-inner-addon pull-left">
                      <div class="vspace"></div>
                        <div class="left-inner-addon pullright">
                            <img role="img" src="/static/openbracket.svg"/>
                            <input id="emailInput" required type="email" class="form-control custom_text_area" name="email" v-model="userDetails.email" placeholder="email" autocomplete="off"/>
                        </div>
                        <img id="imgspace" role="img" src="/static/closebracket.svg"/>
                    </div>
                </div>
                <div class="form-group ">
                    <div class="col-md-10 col-lg-10 col-sm-12  right-inner-addon pull-left">
                    <div class="vspace"></div>
                        <div class="left-inner-addon pullright">
                            <img role="img" src="/static/openbracket.svg"/>
                            <input id="passwordInput" required type="password" class="form-control custom_text_area" name="password" v-model="userDetails.password" placeholder="Password" v-on:keyup.enter="setDetailsAdded" autocomplete="off"/>
                        </div>
                        <img id="imgspace" role="img" src="/static/closebracket.svg"/>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-md-10 col-lg-10 col-sm-12  right-inner-addon pull-left">
                    <div class="vspace"></div>
                        <div class="left-inner-addon pullright">
                            <img role="img" src="/static/openbracket.svg"/>
                            <input id="passwordConfirmationInput" required  type="password" class="form-control custom_text_area" name="password_confirmation"  v-model="userDetails.password_confirmation" placeholder="Password Confirmation" v-on:keyup.enter="setDetailsAdded" autocomplete="off"/>
                        </div>
                        <img id="imgspace" role="img" src="/static/closebracket.svg"/>
                    </div>
                    <div class="validations">{{passwordMessage}}</div>
                </div>
          </form>
        </div> 
      </div>
      <div class="container">
          <button v-show="showReqister" type="button" class="btn btn-md btn-default registration_button" v-on:click="setDetailsAdded">Submit</button>
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
      SuccessResponse: {},
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
        // get status and log to console
        console.log(response.status);
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
          this.$store.dispatch('setAuthToken', token);
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

