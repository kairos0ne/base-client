<template>
  <div class="box">
    <ul class="clientlistgroupe"><h4 class="clienlistheading">Clients</h4>
      <li class="client_list_item" v-for="client in allClients" @click.prevent="selectClient(client)">{{ client.name }}<hr></li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars*/
/* eslint-disable no-undef*/
/* eslint-disable prefer-template*/
import { setClientRest } from './../../vuex/actions';

export default {
  data() {
    return {
      selectedClient: {},
      allClients: [],
    };
  },
  mounted() {
    this.getAllClients();
    this.$bus.$on('fetchData', this.resetData);
  },
  computed: {
    token() {
      return sessionStorage.getItem('Authorisation');
    },
  },
  methods: {
    getAllClients() {
      this.$http.get('http://localhost:3000/clients', { headers: { Authorization: this.token } }).then((clients) => {
        this.allClients = clients.data;
      }, (clients) => {
        console.log(http.errors);
      });
    },
    selectClient(client) {
      this.$http.get('http://localhost:3000/clients/' + client.id, { headers: { Authorization: this.token } }).then((response) => {
        const cclient = response.body;
        this.selectedClient = cclient;
        this.$store.dispatch('setClientRest', cclient);
      });
      this.$bus.$emit('setViewClient');
    },
    resetData() {
      this.getAllClients();
    },
  },
};
</script>
<style lang="sass?indentedSyntax">
.box
  padding: 0px 10px 0px 10px
  ul
    li
      padding: 5px 5px 5px 5px 
      display: block
      border-botom: 0.5px 

.client_list_item 
  font-size: 1.3rem 
    
.clienlistheading
  font-style: normal
  min-width: 200px
  padding: 5px 10px 10px 5px 
  border-bottom: 1px solid #999999
  font-size: 1.5rem

.clientlistgroupe
  border-right: 1px 
  height: 100%

.fixed-bottom
  position: absolute
  right: 0
  bottom: 0
  left: 0
  padding: 5px 0px 0px 20px


</style>