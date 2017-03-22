<template>
    <div>
        <ui-textbox  
          floating-label 
          label="Client Name" 
          v-model="currentClient.name"
        ></ui-textbox>

        <ui-textbox
          enforce-maxlength
          floating-label
          help="Maximum 256 characters"
          label="Client Description"
          placeholder="Introduce yourself in a few words"
          :multi-line="true"
          :maxlength="256"
          v-model="currentClient.business_area"
        ></ui-textbox>

        <form action="/file-upload" class="dropzone needsclick dz-clickable" id="my-awesome-dropzone">  
          <div class="dz-message needsclick">"Drop Files Here or Click to Add Files"</div>
        </form>

        <button 
          type="button" 
          class="first-client-btn btn btn-sm btn-default" 
          @click.prevent="onFormSubmit"
        >Save</button>   
    
    </div>
</template>
<script>
/* eslint-disable no-unused-vars*/
/* eslint-disable no-undef*/
/* eslint-disable prefer-template*/
import { getClientRest } from './../../vuex/getters';

export default {
  data() {
    return {
      currentClient: {
        name: '',
        business_area: '',
        user_id: null,
      },
      clientId: null,
    };
  },
  components: {
  },
  props: {
    enforceMaxlength: {
      type: Boolean,
      default: true,
    },
    maxlength: Number,
  },
  computed: {
    token() {
      return sessionStorage.getItem('Authorisation');
    },
  },
  created() {
    this.getClient();
  },
  methods: {
    onFormSubmit(e) {
      // Prevent default action
      e.preventDefault();
      // Set the request data
      const request = this.currentClient;
      // Send ajax request
      this.$http.put('http://localhost:3000/clients/' + this.clientId, request, { headers: { Authorization: this.token } }).then((response) => {
        // Set the vuex state for projectREST
        this.$store.dispatch('setClientRest', response.body);
        // Refetch the dashboard data
        this.$bus.$emit('fetchData');
        // Set Show project to true on the dashboard parent component
        this.$bus.$emit('setViewClient');
        // Get the client data from the response
        const projects = response.body.projects;
        // Set the clientREST with new method
        this.currentproject = {
          name: null,
          description: '',
          client_id: null,
        };
      }, (response) => {
        // Errors handled
      });
    },
    getClient() {
      const client = this.$store.getters.getClientRest;
      this.currentClient.name = client.name;
      this.currentClient.business_area = client.business_area;
      this.currentClient.user_id = client.user_id;
      this.clientId = client.id;
    },
  },
};

</script>