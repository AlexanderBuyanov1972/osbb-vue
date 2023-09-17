<template>
  <div class="app">
    <header-first></header-first>
    <header-second></header-second>
    <header-third></header-third>
    <router-view></router-view>
  </div>
</template>
<script>
import HeaderFirst from "@/components/HeaderFirst.vue";
import HeaderSecond from "@/components/HeaderSecond.vue";
import HeaderThird from "@/components/HeaderThird.vue";
export default {
  components: {
    HeaderFirst,
    HeaderSecond,
    HeaderThird,
  },
};
</script>

<style scoped>
.app {
  margin: 0px 150px;
}
</style>

<!-- <template>
  <div class="main"></div>
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
