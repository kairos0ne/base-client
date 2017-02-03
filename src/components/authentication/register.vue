<template>
      <div class="container">
        <div class="col-lg-12 col-md-12">
          <form method="POST" action="" role="form">
                <div class="form-group col-lg-offset-2">
                    <div class="col-md-8 col-lg-8 col-sm-12  right-inner-addon pull-left">
                        <div class="left-inner-addon pullright">
                            <img role="img" src="/static/openbracket.svg"/>
                            <input id="clientInput" type="text" class="form-control custom_text_area" name="name" v-model="userDetails.name" placeholder="Name" autocomplete="off"/>
                        </div>
                        <img role="img" src="/static/closebracket.svg"/>
                    </div>
                </div>
                
                <div class="form-group col-lg-offset-2">
                    <div class="col-md-8 col-lg-8 col-sm-12  right-inner-addon pull-left">
                    <div class="vspace"></div>
                        <div class="left-inner-addon pullright">
                            <img role="img" src="/static/openbracket.svg"/>
                            <input  type="text" class="form-control custom_text_area" name="business_area" id="business_area" v-model="userDetails.password" placeholder="Password" v-on:keyup.enter="setDetailsAdded" autocomplete="off"/>
                        </div>
                        <img id="imgspace" role="img" src="/static/closebracket.svg"/>
                    </div>
                </div>
            </form>
        </div>
      </div>
</template>

<script>
/* eslint-disable no-unused-vars*/
/* eslint-disable no-undef*/
/* eslint-disable prefer-template*/
export default {
  name: 'Register',
  data() {
    return {
      userDetails: {
        name: '',
        password: '',
      },
    };
  },
  methods: {
    setDetailsAdded(e) {
      // Prevent default action
      e.preventDefault();
      const request = this.userDetails;
      this.$http.post('http://localhost:3000/users', request);
    },
  },
};
</script>
<style lang="sass?indentedSyntax">
.vspace
  height: 20px
#imgspace
  margin: 20px 0px 0px 0px

</style>