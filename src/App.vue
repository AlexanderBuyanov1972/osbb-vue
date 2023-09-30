<template>
  <div class="app">
    <header-blocks></header-blocks>
    <vue-hr />
    <router-view></router-view>
  </div>
</template>
<script>
import HeaderBlocks from "@/components/HeaderBlocks.vue";
import VueHr from "./ui/elements/VueHr.vue";
export default {
  components: {
    HeaderBlocks,
    VueHr,
  },
};
</script>

<style scoped>
.app {
  margin: 0px 150px;

  color: darkgoldenrod;
  color: brown;
  color: red;
  color: blueviolet;
  color: teal;
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
