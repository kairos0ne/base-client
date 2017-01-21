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
                    <a class="navbar-brand" href="">
                        <img src="static/base_logo.svg">
                    </a>
                </div>
                <div class="collapse navbar-collapse" id="app-navbar-collapse">
                    <!-- Left Side Of Navbar -->
                    <ul class="nav navbar-nav">
                       <li><a href=""> <router-link tag="li" to="/foundation">Foundation</router-link></a></li>
                        <li><a href=""><router-link tag="li" to="/dashboard">Dashboard</router-link></a></li>
                        <li><a href=""><router-link tag="li" to="/introduction">Introduction</router-link></a></li>
                    </ul>
                    <!-- Right Side Of Navbar -->
                    <ul class="nav navbar-nav navbar-right">
                    <!-- Authentication Links -->

                        <li><a href="">Register</a></li>
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

export default {
  data() {
    return {
    };
  },
  ready() {
  },
  props: {
  },
  events: {
  },
  methods: {
  },
};

</script>