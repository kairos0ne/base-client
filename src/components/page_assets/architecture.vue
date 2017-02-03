<template>
<div class="container">
    <div id="what" class="page-header col-lg-12 col-md-12 col-sm-12 ">
        <h1>Architecture<small> Defining core messaging and messaging hierarchy</small></h1>
        <p>Information architecture is the result of building conversion journeys based one the use cases defines.</p>
    </div>
    <p class="col-lg-6 col-md-6 col-sm-12"> <img id="foundation" src="/static/architecture_image.png" alt="">Many digital practioners will have you belive that an information architecture is generally a site map. It is not a site map. An IA is rather an assesment of propositions you'd like to present and where they should presented in a heirarchy of impotance, in relation to business goals</p>
      <div class="col-lg-6 col-md-6 col-sm-12">
      <h4 class="bullets-heading">Thought process</h4>
          <ul class="list-group-bullets">
              <li class="list-bullets" v-for="item in list">
                  <i class="fa fa-check fa-md"></i> &nbsp;{{ item }}
              </li>
          </ul>
      </div>
    </hr>
    <div class="bottompage"></div>  
</div>
</template>
<script>
/* eslint-disable no-unused-vars*/
/* eslint-disable no-undef*/
/* eslint-disable prefer-template*/

export default {
  data() {
    return {
      list: [
        'What is my core proposition for the business?',
        'Is that core proposition relevant to everyone who engages on the site?',
        'Is this proposition important enough to feature as a hero?',
        'Will this proposition discourage users looking for other services we provide?',
      ],
    };
  },
};

</script>

<style lang="sass?indentedSyntax=true">

body
  margin: 0px

.row     
  margin: 0px 15px 0px 15px
  font-family: "Raleway", sans-serif

  .col
    margin: 0px 10px 0px 10px

.bottompage
  margin: 500px 0px 100px 0px
</style>