<template> 
<div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12
                    col-md-12
                    col-sm-12
                    col-xs-12">
          <div class="box">
            <div class="page-header">
              <h1>Client Key
                  <small>Save your client key, once it is lost you'll have to generate a new one.</small>
              </h1>
              <p>Please save your client key, it is used to connect other applications such as the mobile application to your API. Once you move away from this page, your API key will not be retrievable again.</p>
                
            </div>
          </div>
        </div>
      </div>
    </div>    
    <div class="container-fluid">
      <div class="key">
        <p class="key-text" ><strong class="spacer">KEY: </strong>{{ clientkey.auth_token }}</p>
    </div>
    </div>
</div>
</template>
<style lang="sass?indentedSyntax">

.key
  background-color: #999999
  border-radius: 25px

.key-text

  padding: 10px 10px 10px 10px
  margin-left: 5px
  color: #fff

.title
  margin: 10px 0px 10px 0px 

.spacer
  padding-right: 10px
</style>
<script>
export default {
  data() {
    return {
    };
  },
  computed: {
    clientkey() {
      return this.$store.getters.getAuthToken;
    },
  },
};
</script>