<template>
    <div>
        <ul>
            <li id="project_title" class="list-group-item h4 ">{{ currentEpic.epic }}
                <a id="btn-edit" class="btn btn-default btn-xs pull-right" @click.prevent="editEpic()">
                    <i class="fa fa-pencil pull-right"></i>Edit
                </a>
                <a id="btn-complete" class="btn btn-primary btn-xs pull-right" href="#">
                    <i class="fa fa-tick pull-right"></i>Complete
                </a>
            </li>   
        </ul>
        <br>
          <ui-tabs type="text">  
              <ui-tab  title="Stories">  
                <li class="epic-list" v-for="story in currentEpic.stories" ><a @click.prevent="setStoryRest(story)">{{story.asa}}, {{story.iwant}}, {{story.sothat}}</a><hr> </li>
              </ui-tab>
          </ui-tabs>  

    </div>
</template>

<script>
/* eslint-disable no-unused-vars*/
/* eslint-disable no-undef*/
/* eslint-disable prefer-template*/
import { getEpicRest } from './../../vuex/getters';
import { setEpicRest } from './../../vuex/actions';

export default {
  name: 'show-project',
  data() {
    return {
      selectedEpic: {},
    };
  },
  components: {
  },
  mounted() {
  },
  beforeDestroy() {
  },
  computed: {
    currentEpic() {
      return this.$store.getters.getEpicRest;
    },
    token() {
      return sessionStorage.getItem('Authorisation');
    },
  },
  methods: {
    editEpic(currentEpic) {
      this.$bus.$emit('setEditEpic', currentEpic);
    },
    setEpicRest(epic) {
      this.$http.get('http://localhost:3000/epics/' + epic.id, { headers: { Authorization: this.token } }).then((response) => {
        const erest = response.body;
        this.selectedEpic = erest;
        console.log(erest);
        this.$store.dispatch('setEpicRest', erest);
      });
    },
  },
};

</script>

<style lang="sass?indentedSyntax">

.dropzone
  height: 100px
  border: 1px dashed #999
.dz-message
  text-align: center
  padding: 40px 0px 40px 0px

@media screen and (max-width:412px) 
  .dropzone
    height: 50px
    border: 1px dashed #999
  .dz-message
    text-align: center 
    padding: 20px 0px 20px 0px

.ui-tab-header-item__text 
  white-space: nowrap
  overflow: hidden
  text-overflow: ellipsis
  font-size: 1.5rem
  font-weight: 300
  padding: 0px 10px

.epic-list
  display: block
  font-size: 1.5rem

</style>