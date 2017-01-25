<template>
  <div id="app">
    <mainnav></mainnav>
    <router-view></router-view>
  </div>
</template>
<script>
import welcome from './components/views/welcome-view';
import mainnav from './components/page_assets/mainnav';

export default {
  name: 'app',
  components: {
    welcome,
    mainnav,
  },
};
</script>
<style lang="sass?indentedSyntax">
@import './sass/_reset.scss'
@import './sass/base.sass'
</style>
