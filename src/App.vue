<template>
  <div id="app" class="site">
      <mainnav></mainnav>
      <router-view class="site-content"></router-view>
      <!--<bottom class="fixed-bottom"></bottom>-->
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

h1
  font-size: 3rem

h2 
  font-size: 2rem

h3
  font-size: 1.7rem

h4
  font-size: 1.4rem

p
  font-size 1.3rem

.site
  display: flex;
  min-height: 120vh
  flex-direction: column

.site-content
  flex: 1



</style>
