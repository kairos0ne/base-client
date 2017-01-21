<template>  
    <div>
        <ul id="list_of_briefs" class="list-group">
            <li class="brief_list_edit">
                <a class="badge_lable">Briefs&nbsp;<span class="badge">Total -&nbsp;{{briefList.length}}</span></a><br>
            </li>
            <li class="brief_list" v-for="item in briefList">
                {{item.overview}}
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
      ProjectID: null,
      ProjectData: {},
      briefList: [],
      editToggel: true,
      status: '',
    };
  },
  mounted() {
  },
  methods: {
  },
};
</script>