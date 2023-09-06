<template>
  <div class="main">
    <button-simple class="btn" @click="goToPageMain">На главную.</button-simple>
    <button-simple class="btn" @click="goToPageOwners"
      >Список собственников.
    </button-simple>
    <button-simple class="btn" @click="goToPageOwnerships"
      >Список объектов недвижимости.
    </button-simple>
    <button-simple class="btn" @click="goToPageRegistryOwners"
      >Реестр собственников.
    </button-simple>

    <button-simple class="btn" @click="goToPageRegistryOwnerships"
      >Реестр объектов недвижимости.
    </button-simple>
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
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.btn {
  margin: 10px 0px;
}
</style>
