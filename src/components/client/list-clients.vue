<template>
    <div class="row">
      <div class="col-lg-2">
        <div class="box">
          <ul class="clientlistgroupe"><h4>Clients</h4>
            <li v-for="item in allClients" @click.prevent="selectClient(item)">{{ item.name }}</li>
          </ul>
        </div>
      </div>
    </div>
</template>
<style lang="sass?indentedSyntax">
    .box
      ul
        padding: 10px 0px 0px 0px 
        li
          padding: 5px 5px 5px 5px 
          display: block
          border-botom: 0.5px
    .clientlistgroupe
      font-style: normal
</style>
<script>
/* eslint-disable no-unused-vars*/
/* eslint-disable no-undef*/
/* eslint-disable prefer-template*/

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
      selectClient(item) {
        this.selectedClient = item;
      },
    },
  };
</script>