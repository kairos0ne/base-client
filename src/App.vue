<template>
  <div id="app" >

      <mainnav></mainnav>
      <router-view></router-view>
      <!--<bottom></bottom>-->

  </div>
</template>
<script>
import welcome from './components/views/welcome-view';
import mainnav from './components/page_assets/mainnav';
import bottom from './components/page_assets/bottom';

export default {
  name: 'app',
  components: {
    welcome,
    mainnav,
    bottom,
  },
};
</script>
<style lang="sass?indentedSyntax">
@import './sass/_reset.scss'
@import './sass/base.sass'


</style>
