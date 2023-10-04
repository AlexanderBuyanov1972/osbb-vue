<template>
  <header-data-owners></header-data-owners>
  <vue-loader :isLoader="this.getIsLoading" />
  <header-messages :messages="getMessages" />
  <line-header
    text="Список собственников"
    :style="{ color: 'darkgoldenrod' }"
  />
  <owner-item :style="{ color: 'brown' }" :owner="header" count="№" />
  <div v-for="(one, index) in owners" :key="one.id">
    <div @click="() => this.$router.push(PAGE_OWNER_GET + '/' + one.id)">
      <owner-item :owner="one" :count="index + 1" 
      :class="!one.active? ['active'] : []" />
    </div>
  </div>
</template>
<script>
import OwnerItem from "@/itemsAndLists/OwnerItem.vue";
import { PAGE_OWNER_GET } from "@/router/apiRouter";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    OwnerItem,
  },
  data() {
    return {
      owners: [],
      header: {
        firstName: "И.",
        secondName: "О.",
        lastName: "Ф.",
        dateBirth: "Дата рождения",
        email: "E-mail",
        phoneNumber: "Номер телефона",
      },
      PAGE_OWNER_GET,
    };
  },
  methods: {
    ...mapActions({
      fetchAllOwner: "owner/getAllOwner",
      getListApartmentsByFullName: "ownership/getListApartmentsByFullName",
    }),
  },
  computed: {
    ...mapGetters({
      getOwners: "owner/getOwners",
      getMessages: "owner/getMessages",
      getIsLoading: "owner/getIsLoading",
    }),
  },
  mounted() {
    this.fetchAllOwner().then(() => {
      this.owners = this.getOwners;
    });
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.active{
  background-color: hotpink;
}
</style>
