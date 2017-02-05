<template>
  <div class="page-header col-lg-12 col-md-12 col-sm-12 ">
    <h1>Account Registration</h1>
    </hr>
	  <p>Redistration is free for one month, accounts are £135 p/m thereafter for any number of users. More info on the pricing structure we offer can be found under pricing.</p>
     <register></register>
	</div>
</template>
<script>
/* eslint-disable no-unused-vars*/
/* eslint-disable no-undef*/
/* eslint-disable prefer-template*/
import register from './../authentication/register';

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
    register,
  },
  props: {
  },
  events: {
  },
  methods: {
  },
};

</script>