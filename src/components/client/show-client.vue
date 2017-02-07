<template>
    <div>
        <ul >
            <li id="project_title" class="list-group-item h4 ">{{ currentClient.name }}
                <a id="btn-edit" class="btn btn-default btn-xs pull-right" @click.prevent="editClient">
                    <i class="fa fa-pencil pull-right"></i>Edit
                </a>
                <a id="btn-complete" class="btn btn-primary btn-xs pull-right" href="#">
                    <i class="fa fa-tick pull-right"></i>Complete
                </a>
            </li>
            <div id="page_content_brief">
                <h4>{{ currentClient.business_area }}</h3>
            </div>
            <hr>
        </ul>
      <form action="/file-upload" class="dropzone needsclick dz-clickable" id="my-awesome-dropzone">  
        <div class="dz-message needsclick">"Drop Files Here or Click to Add Files"</div>
      </form>
    </div>
</template>
<style lang="sass?indentedSyntax">
.dropzone
  width: 100%
  height: 100px
  border: 2px dashed #999
.dz-message
  padding: 40px 0px 40px 300px 


</style>
<script>
/* eslint-disable no-unused-vars*/
/* eslint-disable no-undef*/
/* eslint-disable prefer-template*/
import { getClientRest } from './../../vuex/getters';

export default {
  name: 'show-client',
  data() {
    return {
      ClientID: null,
      projectList: [],
    };
  },
  mounted() {
    console.log('The current client:' + this.currentClient);
  },
  beforeDestroy() {
  },
  computed: {
    currentClient() {
      return this.$store.getters.getClientRest;
    },
  },
  methods: {
    editClient(currentClient) {
      this.$bus.$emit('setEditClient', currentClient);
    },
    setTheFirstClient(client) {
      this.$bus.$on(setFirstClient, client);
      this.currentClient = client;
    },
    setClient(item) {
    },
    setLength() {
      this.projectList = currentClient.projects;
    },
  },
};

</script>