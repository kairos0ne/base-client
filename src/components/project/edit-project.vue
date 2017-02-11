<template>
    <div id="content_pane_container">
      <form action="" method="POST" role="form">
        <div class="form-group">
          <ul class="list-group">
              <li id="project_title_edit" class="">
                <a id="btn-save" class="btn btn-default btn-xs pull-right" v-on:click="onFormSubmit">
                    <i class="fa fa-pencil pull-right"></i>Save
                </a>
                <a id="btn-complete" class="btn btn-primary btn-xs pull-right" href="#">
                    <i class="fa fa-tick pull-right"></i>Complete
                </a>
                <input type="text" class="form-control edit_input_style_title " name="name" id="name" v-model="ProjectData.name"  autocomplete="off"/>
              </li>
              <div id="page_content_brief_edit">
                <textarea id="resisable" class="form-control edit_input_style_body" name="description" v-model="ProjectData.description" autocomplete="off">
                </textarea>
                <div class="select_container">
                    <p>Select your prefered project type and click enter.</p>
                    <select name="" id="input" class="form-control" required="required" v-model="type"  @click.prevent="setProjectType(type)">
                </div>
              </div>
          </ul> 
        </div>  
      </form>
    </div>
</template>
<script>
/* eslint-disable no-unused-vars*/
/* eslint-disable no-undef*/
/* eslint-disable prefer-template*/
export default {
  data() {
    return {
      currentProject: {},
      parentClient: {},
    };
  },
  components: {
  },
  created() {
  },
  methods: {
    onFormSubmit(e) {
      // Prevent default action
      e.preventDefault();
      // Set the request data
    },
  },
};

</script>