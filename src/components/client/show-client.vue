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
export default{
  data() {
    return {
      currentClient: {},
      ClientID: null,
      projectList: [],
    };
  },
  mounted() {
  },
  beforeDestroy() {
  },
  methods: {
    editClient() {
      // Use this.$bus to update the edit view and rediect
      // As a user with the correct privelages
      // When I click a 'edit' button
      // Then I should be redirected to Update CRUD
      // And the view should contant the correct client object
    },
  },
};

</script>