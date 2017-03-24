<template>
  <div>
    <li  class="epic-list" >{{epic.epic}}  </li>
  </div>
</template>
<script>
/* eslint-disable no-unused-vars*/
/* eslint-disable no-undef*/
/* eslint-disable prefer-template*/
export default {
  name: 'epic-card',
  data() {
    return {
      epic: {},
    };
  },
  props: {
    epicId: Number,
  },
  computed: {
    token() {
      return sessionStorage.getItem('Authorisation');
    },
  },
  created() {
    this.$nextTick(() => {
      this.$bus.$on('setViewProject', this.getEpic());
    });
  },
  methods: {
    getEpic() {
      this.$http.get('http://localhost:3000/epics/' + this.epicId, { headers: { Authorization: this.token } }).then((response) => {
        this.epic = response.body;
      });
    },
  },
};
</script>
<style lang="sass?indentedSyntax">
.epic-list
  padding: 5px 5px 5px 5px
  display: block
  border-botom: 0.5px
</style>