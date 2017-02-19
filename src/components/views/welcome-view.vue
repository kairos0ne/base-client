<template>
	<div class="container main">
	    <div class="page-header col-lg-12 col-md-12 col-sm-12 ">
	        <h1>Welcome to base
	            <small>Defining foundation for online communications</small>
	        </h1>
	        <p>Base is a tool designed for account, strategic and client teams. It provides a way to leverage BDD methodologies from the outset of the planning process.</p>
	    </div>
      <register class="space-bottom"></register>
	</div>
</template>
<style lang="sass?indentedSyntax">
.space-bottom
  marging-bottom: 100px

.main
  height: 100%
  min-height 3200px

</style>
<script>
import register from '../authentication/register';

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
  computed: {
    onboarding() {
      return this.$store.getters.getClientFromOnboarding;
    },
  },
  components: {
    register,
  },
  events: {
    // Insert events
  },
  methods: {
    // Insert main welcome methods here
  },
};
</script>