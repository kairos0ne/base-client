<template>
    <div class="container-fluid  col-lg-12 col-md-12 col-sm-12 ">
      <br>
      <h1>Pricing
        <small>We offer three tiers of pricing shown below.</small>
      </h1>
      </hr>
      <br>
      <div class="col-lg-2 col-md-2 col-sm-5"><i class="fa fa-thermometer-half fa-5x"></i></div>
      <div class="col-lg-10 col-md-10 col-sm-7">
      <h4>Basic</h4>
      <p>Basic accounts are standalone cloud based applications. They offer no integration support, all data is stored in the cloud with us.</p>
      <div class="row">Feature:
        <div class="col-xs">Cloud based storage
            <div class="box">SASS based service, all data is stored within a shared environement mananaged by us.
            </div>
        </div>
        </div>
        <br>
        <button class="btn btn-default btn-sm">Purchase £{{tier1}} p/m</button>
        <button class="btn btn-default btn-sm">Request Information</button>
        <br>
        <br>
        <hr>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-5"><i class="fa fa-thermometer-3 fa-5x"></i></div>
      <div class="col-lg-10 col-md-10 col-sm-7">
      <h4>Advanced</h4>
      <p>Advanced accounts offer a seperate managed heroku instance. Each client lisence gets it's own application. Api access is also provided for customers to build their own integrations.</p>
      <div class="row">Feature:
        <div class="col-xs">Managed Basic Heroku Instance
            <div class="box">Basic heroku instance with access to the base API for integration.
            </div>
        </div>
        </div>
        <br>
        <button class="btn btn-default btn-sm">Purchase £{{tier2}} p/m</button>
        <button class="btn btn-default btn-sm">Request Information</button>
        <br>
        <br>
        <hr>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-5"><i class="fa fa-thermometer-full fa-5x"></i></div>
      <div class="col-lg-10 col-md-10 col-sm-7">
      <h4>Professional</h4>
      <p>Profesional accounts allow for prebuilt integration with Jira and Confluence, There are cloud and managed client versions with access to API.</p>
      <div class="row">Feature:
        <div class="col-xs">Professional accounts have full access to a advanced Heroku instance. 
            <div class="box">All advannced accounts have full integration with Jira and Confluence out the box.
            </div>
        </div>
        </div>
        <br>
        <button class="btn btn-default btn-sm">Purchase £{{tier3}} p/m</button>
        <button class="btn btn-default btn-sm">Request Information</button>
        <br>
        <br>
        <hr>
      </div>
    </div>
</template>
<style lang="sass?indentedSyntax">
.fa
  color: #777777
.box
  font-style: italic
  font-size: 13px
</style>
<script>
  export default {
    data() {
      return {
        tier1: 135,
        tier2: 350,
        tier3: 400,
      };
    },
  };
</script>