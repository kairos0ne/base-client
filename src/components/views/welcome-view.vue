<template>
	<div class="container">
	    <div class="page-header col-lg-12 col-md-12 col-sm-12 ">
	        <h1>Welcome to base
	            <small>Defining foundation for online communications</small>
	        </h1>
	        <p>Base is a tool designed for account, strategic and client teams. It provides a way to leverage BDD methodologies from the outset of the planning process.</p>
	    </div>
      <button class="btn btn-md btn-default"><router-link  to="/pricing">Pricing</router-link></button>
      <button class="btn btn-md btn-default"><router-link  to="/introduction">Introduction</router-link></button>
	</div>
</template>
<script>
    export default {
      name: 'Welcome',
      data() {
        return {
            // Data items go here eg name: 'Some name', etc...
        };
      },
      mounted() {
        // Ready functions here and can be changed for created()
      },
      components: {
        // Child components go here
      },
      events: {
        // Insert events
      },
      methods: {
        // Insert main welcome methods here
      },
};
</script>