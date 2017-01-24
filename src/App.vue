<template>
  <div id="app">
    <mainnav></mainnav>
    <welcome></welcome>
    <foundation></foundation>
  </div>
</template>
<script>
import welcome from './components/views/welcome-view';
import mainnav from './components/page_assets/mainnav';
import foundation from './components/page_assets/foundation';

export default {
  name: 'app',
  components: {
    welcome,
    mainnav,
    foundation,
  },
};
</script>
<style lang="sass?indentedSyntax">
@import './sass/_reset.scss'
@import './sass/base.sass'
</style>
