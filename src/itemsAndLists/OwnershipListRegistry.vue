<template>
  <div class="list" v-for="key in Object.keys(map)" :key="key">
    <div class="item">Квартира № {{ key }}</div>
    <p v-for="(one, index) in map[key]" :key="key">{{ index + 1 }}. {{ one }}</p>
  </div>
</template>
<script>
import { PAGE_OWNERSHIP_GET, PAGE_OWNER_GET } from "@/router/apiRouter";
export default {
  data() {
    return {
      PAGE_OWNERSHIP_GET,
      PAGE_OWNER_GET,
    };
  },
  props: {
    map: Object,
  },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.list {
  border: 1px solid teal;
  padding: 0px 5px;
  margin: 5px 0px;
}

p {
  color: brown;
  font-size: 20px;
  margin: 10px 0px;
}
.item{
  font-size: 22px;
  color: blueviolet;
}
</style>
<!-- @click="() => this.$router.push(PAGE_OWNERSHIP_GET + '/' + one.ownership.id)" -->
<!-- @click="() => this.$router.push(PAGE_OWNER_GET + '/' + two.ownerId)" -->
