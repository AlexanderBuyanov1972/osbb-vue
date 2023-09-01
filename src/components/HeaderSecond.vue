<template>
  <div class="main">
    <div class="">
      <button-simple class="btn" @click="goToPageCreateOwner"
        >Создать собственника.</button-simple
      >
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

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.main {
  margin: 0px 0px 0px 5px;
}
.btn {
  margin: 10px 5px;
}
p,
h4 {
  color: red;
  font-size: 1.4em;
}
</style>
