<template>
  <header-bills></header-bills>
  <vue-loader :isLoader="this.getIsLoading" />
    <div class="main">
  Page Bills!!!
    </div>
  </template>
  <script>
  import { mapActions, mapGetters } from "vuex";
  export default {
    data() {
      return {};
    },
    methods: {},
  };
  </script>
  
  <style scoped>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .main{
  
  }
  </style>
  