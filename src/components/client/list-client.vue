<template>
	<div class="list-group ">
	    <li  class="list-group-item h4">Clients</li>
        <li @click.prevent="setSelectedClient(client)" class="client_panel" v-for="client in orderedClients">
            <i class="fa fa-folder"></i>&nbsp;
            {{ client.name }}
        </li>
	</div>
</template>
<script>
/* eslint-disable no-unused-vars*/
/* eslint-disable no-undef*/
/* eslint-disable prefer-template*/
export default {
  data() {
    return {
      clientID: null,
      clientList: [],
      editToggel: true,
      request: {
        user: {},
        currentClient: {},
        clientProjects: [],
      },
    };
  },
  mounted() {
    // Get the current user to update the rest
    this.getUser();
    this.getClientsData();
  },
  computed: {
    orderedClients() {
      return _.orderBy(this.clientList, 'name');
    },
  },
  methods: {
    setSelectedClient(client) {
      this.$store.dispatch('setClient', client);
      this.getProjects(client);
    },
    getClientsData() {
      this.$http.get('api/get/clients').then((clients) => {
        this.clientList = clients.data;
        console.log(clients.data);
      }, (response) => {
        // Errors go here
      });
    },
    getUser() {
      this.$http.get('api/get/user').then((user) => {
        this.request.user = user.data;
      }, (response) => {
        // Errors go here
      });
    },
    getProjects(client) {
      this.$http.get('api/get/projects/' + this.client.id).then((projects) => {
        this.request.clientProjects = projects.data;
      }, (response) => {
        // Errors go here
      });
    },
  },
};

</script>