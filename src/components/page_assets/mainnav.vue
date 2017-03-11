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
                    <userlinksin v-show="! client"></userlinksin>
                    <userlinksout v-show="user"></userlinksout>
                    <userlinksfirst v-show="client && user"></userlinksfirst>
                    
                    <!-- Right Side Of Navbar -->
                    <ul class="nav navbar-nav navbar-right">
                    <!-- Authentication Links -->
                        <li class="register-link"><a href=""><router-link tag="li" to="/register"><i class="fa fa-handshake-o fa-md"></i>&nbsp;Register</router-link></a></li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                               aria-expanded="false">
                        <!-- Add Authed User as link -->    
                            <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a href=""><i class="fa fa-btn fa-sign-out"></i>Logout</a></li>
                                <li><a href=""><i class="fa fa-btn fa-sign-out"></i>Account</a></li>
                            </ul>
                        </li>
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
    user() {
      return this.$store.getters.getLoggedInUser;
    },
  },
  methods: {
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