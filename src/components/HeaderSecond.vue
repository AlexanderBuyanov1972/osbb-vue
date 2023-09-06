<template>
  <div class="main">
    <div class="">
      <button-simple class="btn" @click="goToPageCreateOwnership"
        >Создать собственность.
      </button-simple>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goToPageCreateOwner() {
      this.$router.push("/create/owner");
    },
    goToPageCreateOwnership() {
      this.$router.push("/create/ownership");
    },
  },
};
</script>

<style scoped >
 * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.main {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.btn {
  margin: 10px 0px;
}
</style>
