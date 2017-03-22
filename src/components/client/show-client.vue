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
    </div>
</template>

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
  },
  beforeDestroy() {
  },
  computed: {
    currentClient() {
      return this.$store.getters.getClientRest;
    },
  },
  methods: {
    editClient() {
      this.$bus.$emit('setEditClient');
    },
  },
};

</script>

<style lang="sass?indentedSyntax">

.dropzone
  height: 100px
  width: 100%
  border: 1px dashed #999
.dz-message
  text-align: center
  padding: 40px 0px 40px 0px

@media screen and (max-width:412px) 
  .dropzone
    height: 50px
    width: 100%
    border: 1px dashed #999
  .dz-message
    text-align: center 
    padding: 20px 0px 20px 0px
  

</style>