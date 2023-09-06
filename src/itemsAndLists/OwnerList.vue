<template>
  <div class="main">
    <div class="list" v-if="owners.length > 0">
      <owner-item
        v-for="(one, index) in owners"
        :owner="one"
        :key="one.id"
        :count="index + 1"
      />
    </div>
    <div class="empty" v-else>Список собственников пуст.</div>
  </div>
</template>

<script>
export default {
  props: {
    owners: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    getOne(owner, index) {
      return { owner, index: index + 1 };
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.empty {
  color: cadetblue;
  font-size: 1.5em;
  border: 2px solid cadetblue;
  margin: 15px;
  padding: 15px;
}
</style>

<!-- @click="() => this.$router.push('/owner/' + one.id)" -->
