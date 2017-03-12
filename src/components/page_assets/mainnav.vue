<template>
    <div>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <!-- Collapsed Hamburger -->
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                            data-target="#app-navbar-collapse">
                        <span class="sr-only">Toggle Navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <!-- Branding Image -->
                    <router-link tag="div" to="/"><img class="logo" src="static/base_logo.svg"></router-link>
                </div>
                
                <div class="collapse navbar-collapse" id="app-navbar-collapse">
                    <!-- Left Side Of Navbar -->
                    <userlinksin v-show="token"></userlinksin>
                    <userlinksout v-show="!token"></userlinksout>
                    <userlinksfirst v-show="userId"></userlinksfirst>
                    
                    <!-- Right Side Of Navbar -->
                    <ul class="nav navbar-nav navbar-right">
                    <!-- Authentication Links -->
                        <li v-show="!token" class="register-link"><a href=""><router-link tag="li" to="/register"><i class="fa fa-handshake-o fa-md"></i>&nbsp;Register</router-link></a></li>
                        <li v-show="!token" class="register-link"><a href=""><router-link tag="li" to="/login">|&nbsp;&nbsp;&nbsp;Login</router-link></a></li>
                        <li v-show="token" class="register-link" @click="logout()"><a href=""><router-link tag="li" to="/login">Logout</router-link></a></li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>


<script>
import userlinksin from './user-links-in';
import userlinksout from './user-links-out';
import userlinksfirst from './user-links-first';

export default {
  data() {
    return {
    };
  },
  components: {
    userlinksin,
    userlinksout,
    userlinksfirst,
  },
  mounted() {
  },
  computed: {
    client() {
      return this.$store.getters.getClientFromOnboarding;
    },
    userId() {
      return sessionStorage.getItem('UserId');
    },
    token() {
      return sessionStorage.getItem('Authorisation');
    },
  },
  methods: {
    logout() {
      const token = null;
      sessionStorage.clear();
      this.$router.push('/');
      this.$store.dispatch('setAuthToken', token);
      window.location.reload(true);
    },
  },
};

</script>

<style lang="sass?indentedSyntax">
.logo
  max-height: 35px
  padding-bottom: 2px
  display: block
  margin: 10px
  

.navbar-default
  min-height: 55px

.navbar-brand 
  padding: 10px 0px 0px 10px
  display: block

.navbar-nav
  li
    a
      padding: 25px 10px 0px 10px 
      font-wight: 100

.nav-links
  margin: 0px 0px 0px 20px

@media screen and (max-width:766px) 
  .register-link
    padding-left: 35px

</style>