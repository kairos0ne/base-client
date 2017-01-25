<template>
	<!-- Start vue boilerplate template for vm  -->
	<div id="wrapper">
    <!-- Start Main Container -->
    <div id="main_content_container" class="container-fluid">
        <colgroup>
            <register></register>
        </colgroup>
    </div>
</div>

</template>
<script>
/* eslint-disable no-unused-vars*/
/* eslint-disable no-undef*/
/* eslint-disable prefer-template*/
import register from './../authentication/register';

// Start vue script for vm
export default {
  data() {
    return {
      showsidebar: true,
      showtoolsbar: false,
    };
  },
  ready() {
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