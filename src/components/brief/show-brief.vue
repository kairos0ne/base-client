<template>
    <div id="content_pane_container">
        <ul class="list-group">
            <li id="project_title" class="list-group-item h4 ">{{ currentBrief.overview }}
                <a id="btn-edit" class="btn btn-default btn-xs pull-right" href="#">
                    <i class="fa fa-pencil pull-right"></i>Edit
                </a>
                <a id="btn-complete" class="btn btn-primary btn-xs pull-right" href="#">
                    <i class="fa fa-tick pull-right"></i>Complete
                </a>
            </li>
            <div id="page_content_brief">
                <h4>{{ currentBrief.objective }}</h3>
                    <p>Notes:{{currentBrief.notes}}</p>
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
      currentBrief: {},
      parentProject: {},
      parentClient: {},
      projectID: null,
      clientID: null,
    };
  },
  mounted() {
  },
  methods: {
  },
};
</script>