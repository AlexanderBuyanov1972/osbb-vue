<template>
  <header-first></header-first>
  <header-messages></header-messages>
  <header-second></header-second>
  <router-view></router-view>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import HeaderFirst from "@/components/HeaderFirst.vue";
import HeaderSecond from "@/components/HeaderSecond.vue";
import HeaderMessages from "@/components/HeaderMessages.vue";
export default {
  components: {
    HeaderFirst,
    HeaderSecond,
    HeaderMessages,
  },
  methods: {
    ...mapActions({}),
  },
  mounted() {},
};
</script>

<style scoped></style>

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
