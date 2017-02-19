<template>
    <div>
        <foundation></foundation>
        <research></research>
        <persona></persona>
        <architecture class="endofpage"></architecture>
    </div>
</template>
<script>
  import foundation from './../page_assets/foundation';
  import persona from './../page_assets/personas';
  import architecture from './../page_assets/architecture';
  import research from './../page_assets/research';

  export default {
    name: 'marketing',
    data() {
      return {
        msg: 'hello',
      };
    },
    components: {
      foundation,
      research,
      persona,
      architecture,
    },
};
</script>

<style lang="sass?indentedSyntax">
.endofpage
  margin: 0px 0px 80px 0px

</style>