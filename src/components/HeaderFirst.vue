<template>
  <div class="main">
    <div class="">
      <button-simple class="btn" @click="goToPageMain"
        >На главную.</button-simple
      >
      <button-simple class="btn" @click="goToPageOwners"
        >Список собственников.
      </button-simple>
      <button-simple class="btn" @click="goToPageRegistryOwners"
        >Регистр собственников.
      </button-simple>
      <button-simple class="btn" @click="goToPageOwnerships"
        >Список собственности.
      </button-simple>
      <button-simple class="btn" @click="goToPageRegistryOwnerships"
        >Регистр собственности.
      </button-simple>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goToPageMain() {
      this.$router.push("/");
    },
    goToPageOwners() {
      this.$router.push("/owners");
    },
    goToPageOwnerships() {
      this.$router.push("/ownerships");
    },
    goToPageRegistryOwners() {
      this.$router.push("/registry/owners");
    },
    goToPageRegistryOwnerships() {
      this.$router.push("/registry/ownerships");
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
</style>
