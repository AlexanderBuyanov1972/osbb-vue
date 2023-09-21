<template>
  <div class="app">
    <header-data></header-data>
    <header-data-search
      @apartment="(value) => (apartment = value)"
    ></header-data-search>
    <vue-hr />
    <header-polls></header-polls>
    <header-polls-search :apartment="apartment"></header-polls-search>
    <router-view></router-view>
  </div>
</template>
<script>
import HeaderData from "@/components/HeaderData.vue";
import HeaderDataSearch from "@/components/HeaderDataSearch.vue";
import HeaderPolls from "@/components/HeaderPolls.vue";
import HeaderPollsSearch from "@/components/HeaderPollsSearch.vue";
import VueHr from "./ui/elements/VueHr.vue";
export default {
  components: {
    HeaderData,
    HeaderDataSearch,
    HeaderPolls,
    HeaderPollsSearch,
    VueHr,
  },
  data() {
    return {
      apartment: "",
    };
  },
};
</script>

<style scoped>
.app {
  margin: 0px 150px;
}
</style>

<!-- <template>
  <div class="main">

  </div>
</template>
<script>
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
