<template>
  <div class="app">
    <header-blocks v-if="getIsAdmin"></header-blocks>
    <vue-hr  v-if="getIsAdmin"/>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { PAGE_LOGIN, PAGE_MAIN, PAGE_REGISTRATION } from "@/router/apiRouter";
import { getLink, getAccessToken, getRefreshToken } from "@/http/localStorage";
import HeaderBlocks from "@/header/HeaderBlocks.vue";
export default {
  components: {
    HeaderBlocks,
  },
  data() {
    return {
      PAGE_LOGIN,
      PAGE_REGISTRATION,
      PAGE_MAIN,
      getLink,
      getAccessToken,
      getRefreshToken,
    };
  },
  methods: {
    ...mapActions({
      check: "auth/check",
    }),
  },
  mounted() {
    const link = this.getLink();
    if (
      link === "" &&
      this.getAccessToken() === "" &&
      this.getRefreshToken() == ""
    )
      return this.$router.push(PAGE_REGISTRATION);

    if (
      link !== "" &&
      this.getAccessToken() === "" &&
      this.getRefreshToken() === ""
    )
      return this.$router.push(PAGE_LOGIN);

    if (
      link !== "" &&
      this.getAccessToken() !== "" &&
      this.getRefreshToken() !== ""
    )
      this.check(link).then(() => this.$router.push(PAGE_MAIN));
  },
  computed: {
    ...mapGetters({
      getIsAdmin: "auth/getIsAdmin",
    }),
  },
};
</script>

<style scoped>
.app {
  margin: 0px 150px;
  background-color: azure;
  padding:  0px 25px 100px 25px;


  color: darkgoldenrod;
  color: brown;
  color: crimson;
  color: blueviolet;
  color: teal;
  color: #f2f7f7;
}
</style>

<!-- <template>
  <div class="main">

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
</style> -->
