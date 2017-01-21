<template>  
    <div>
        <ul id="list_of_briefs" class="list-group">
            <li class="brief_list_edit">
                <a class="badge_lable">Projects&nbsp;<span class="badge">Total -&nbsp;{{projectList.length}}</span></a><br>
            </li>
            <li class="brief_list" v-for="item in projectList">
                {{item.name}}
            </li>
        </ul>
    </div>
</template>
<script>
/* eslint-disable no-unused-vars*/
/* eslint-disable no-undef*/
/* eslint-disable prefer-template*/

export default {

  data() {
    return {
      ClientID: null,
      ClientData: {},
      projectList: [],
      editToggel: true,
      status: '',
    };
  },
  ready() {
  },
  methods: {
  },
};
</script>