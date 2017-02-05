<template>
    <div id="content_pane_container">
        <ul class="list-group">
            <li id="project_title" class="list-group-item h4 ">{{ currentClient.name }}
                <a id="btn-edit" class="btn btn-default btn-xs pull-right" @click.prevent="editClient">
                    <i class="fa fa-pencil pull-right"></i>Edit
                </a>
                <a id="btn-complete" class="btn btn-primary btn-xs pull-right" href="#">
                    <i class="fa fa-tick pull-right"></i>Complete
                </a>
                <a class="badge_lable"><span class="badge"><i class="fa fa-briefcase" ></i>&nbsp;Projects -&nbsp;{{projectList.length}}</span></a><br>
            </li>
            <div id="page_content_brief">
                <h4>{{ currentClient.business_area }}</h3>
            </div>
        </ul>
    </div>
</template>
<script>
/* eslint-disable no-unused-vars*/
/* eslint-disable no-undef*/
/* eslint-disable prefer-template*/
export default {
  name: 'show-client',
  data() {
    return {
      currentClient: {},
      ClientID: null,
      projectList: [],
    };
  },
  mounted() {
    this.setTheFirstClient();
  },
  beforeDestroy() {
  },
  methods: {
    editClient(currentClient) {
      this.$bus.$emit('setEditClient', currentClient);
    },
    setTheFirstClient(client) {
      this.$bus.$on(setFirstClient, client);
      this.currentClient = client;
    },
  },
};

</script>