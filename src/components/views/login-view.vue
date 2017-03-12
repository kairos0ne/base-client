<template>
  <div class="container main">
    <div class="page-header col-lg-12 col-md-12 col-sm-11 ">
      <h1>Login</h1>
      </br>
      </hr>
      <login></login>
    </div>
  </div>
</template>
<script>
/* eslint-disable no-unused-vars*/
/* eslint-disable no-undef*/
/* eslint-disable prefer-template*/
import login from './../authentication/login';
// Start vue script for vm
export default {
  name: 'Authentication',
  data() {
    return {
      showsidebar: true,
      showtoolsbar: false,
    };
  },
  mounted() {
  },
  components: {
    login,
  },
  props: {
  },
  events: {
  },
  methods: {
  },
};

</script>