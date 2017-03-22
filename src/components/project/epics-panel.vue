<template>
  <div>
    <epiccard v-bind:epicId="epic.id" v-for="epic in epics" >{{epic.epic}}<hr></epiccard>
  </div>
</template>
<script>
import epiccard from './epic-card';
/* eslint-disable no-unused-vars*/
/* eslint-disable no-undef*/
/* eslint-disable prefer-template*/
export default {
  name: 'epics-panel',
  data() {
    return {
      epics: [],
      project: {},
    };
  },
  props: {
    projectId: Number,
  },
  computed: {
    token() {
      return sessionStorage.getItem('Authorisation');
    },
  },
  components: {
    epiccard,
  },
  created() {
    this.$nextTick(() => {
      this.$bus.$on('setEpicsPanel', this.getEpics());
    });
  },
  methods: {
    getEpics(project) {
      this.$http.get('http://localhost:3000/projects/' + this.projectId, { headers: { Authorization: this.token } }).then((response) => {
        this.project = response.body;
        this.epics = response.body.epic;
      });
    },
  },
};
</script>
<style lang="sass?indentedSyntax">


</style>