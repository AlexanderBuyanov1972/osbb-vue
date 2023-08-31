<template>
  <vue-header></vue-header>
  <router-view></router-view>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import VueHeader from "./components/VueHeader.vue";
export default {
  components:{
    VueHeader
  },
  methods: {
    ...mapActions({

    }),
  },
  mounted() {

  },
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
