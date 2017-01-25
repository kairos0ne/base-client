<template>
    <div>
      <div class="container-fluid">
        <div class="left-inner-addon pullright">
            <img role="img" src="/static/openbracket.svg"/>
            <input id="clientInput" type="text" class="form-control custom_text_area" name="name" v-model="newClientData.name" placeholder="Name" v-on:keyup.enter="setNameAdded" autocomplete="off"/>
            <img role="img" src="/static/closebracket.svg"/>
            <img role="img" src="/static/openbracket.svg"/>
            <input id="clientInput" type="text" class="form-control custom_text_area" name="Password" v-model="newClientData.name" placeholder="Password" v-on:keyup.enter="setNameAdded" autocomplete="off"/>
            <img role="img" src="/static/closebracket.svg"/>
        </div>
      </div>
    </div>
</template>
<script>
export default {

  data() {
    return {
    };
  },
};
</script>