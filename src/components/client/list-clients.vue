<template>
    <div class="row">
      <div class="box">
        <ul class="clientlistgroupe"><h4 class="clienlistheading">Clients</h4>
          <li v-for="client in allClients" @click.prevent="selectClient(client)">{{ client.name }}</li>
        </ul>
      </div>
    </div>
</template>
<style lang="sass?indentedSyntax">
.box
  padding: 0px 10px 0px 10px
  ul
    padding: 10px 0px 0px 0px 
    li
      padding: 5px 5px 5px 5px 
      display: block
      border-botom: 0.5px   
    
.clienlistheading
  font-style: normal
  min-width: 200px
  padding: 5px 10px 10px 5px 
  border-bottom: 5px solid #4f504c

.clientlistgroupe
  border-right: 1px 
  height: 100%
</style>
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
  },
  methods: {
    getAllClients() {
      this.$http.get('http://localhost:3000/clients').then((clients) => {
        this.allClients = clients.data;
        console.log(this.allClients);
      }, (clients) => {
        console.log(http.errors);
      });
    },
    selectClient(client) {
      this.selectedClient = client;
      this.$store.dispatch('setClientRest', client);
      console.log(client);
    },
  },
};
</script>