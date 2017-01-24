<template>
	<!-- Start vue boilerplate template for vm  -->
	<div id="wrapper">
    <!-- Start Main Container -->
    <div id="main_content_container" class="container-fluid">
        <colgroup>
            <div id="sidebar_container" class="col-md-2 col-sm-12 col-lg-2">
                <!-- Sidebar content  -->
               
            </div>
            <div id="content_bar_container" class="col-md-3 col-sm-12 col-lg-3">
                <!-- Secondary Bar  -->
         
            </div>
			<div id="content_section" class="col-md-7 col-lg-7 col-sm-12">
				<!-- Main application space -->
				
			</div>
        </colgroup>
    </div>
</div>

</template>
<script>
/* eslint-disable no-unused-vars*/
/* eslint-disable no-undef*/
/* eslint-disable prefer-template*/

import register from './authentication/register'

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