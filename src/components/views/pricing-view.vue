<template>
    <div class="container ">
      <br>
      <h1>Pricing
        <small>Each purchase gives you access to a Heroku instance and Postgres DB.</small>
      </h1>
      </hr>
      <div class="col-lg-2 col-md-2 col-sm-5 logos">
        <img class="heroku-logo" src="/static/heroku-logo.png" alt="heroku">
        <img class="vue-logo" src="/static/Vue-logo.png" alt="vue">
        <img class="jira-logo" src="/static/Jira-logo.png" alt="jira">
        <img class="ruby-logo" src="/static/ruby-logo.png" alt="ruby">
      </div>
      <div class="col-lg-10 col-md-10 col-sm-7">
      <p class="description">Applications are fully integrated with Jira and Confluence. Each licence gives you unlimeted users. All licences include a Rails based API and  VueJS Client Application.</p>
      <div class="row">Feature:
          <div class="col-xs features_title">Each application runs as a single Heroku instance. With your purchase, you revieve the following;
              <div class="box feature_list_item"><i class="fa fa-check fa-md"></i>  Client Application written with Vue 2.0. 
              </div>
              <div class="box feature_list_item"><i class="fa fa-check fa-md"></i>  API application written with Rails 5. 
              </div>
              <div class="box feature_list_item"><i class="fa fa-check fa-md"></i>  Access to the Heroku instance.
              </div>
              <div class="box feature_list_item"><i class="fa fa-check fa-md"></i>  Postgres DB.
              </div>
          </div>
      </div>
      <br>
      <button class="btn btn-default btn-sm bottom-space">Purchase £{{tier3}} p/m</button>
      <button class="btn btn-default btn-sm bottom-space">Request Information</button>
      <br>
      <br>
      <hr>
    </div>
</template>
<style lang="sass?indentedSyntax">
.fa
  color: #777777

.heroku-logo
  max-width: 70px
  padding: 0px 5px 0px 0px

.vue-logo
  max-width: 70px
  padding: 0px 5px 0px 0px

.jira-logo
  max-width: 70px
  padding: 0px 5px 0px 0px

.ruby-logo
  max-width: 70px
  padding: 0px 5px 0px 0px

.feature_list_item
  padding: 10px

.bottom-space
  margin: 20px 0px 80px 0px

.row
  margin: 30px 0px 0px 0px

.description
  margin: 20px 0px 0px 0px 

.logos 
  margin: 20px 0px 0px 0px 

</style>
<script>
  export default {
    data() {
      return {

        tier3: 150,
      };
    },
  };
</script>