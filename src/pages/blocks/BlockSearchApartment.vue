<template>
  <div class="main">
    <div class="title">Введите Ф.И.О. :</div>
    <input-simple
      class="input"
      v-model.trim="fullName"
      :style="{ width: '300px' }"
    />
    <button-edit @click="getListApartment"
      >Получить список помещений
    </button-edit>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { mapOwnerToLineFullNamesOwner } from "@/pages/_functions/functions";
export default {
  name: "block-search-apartment",
  data() {
    return {
      fullName: "",
      mapOwnerToLineFullNamesOwner,
    };
  },
  props: {
    owner: Object,
  },
  methods: {
    ...mapActions({
      getListApartmentsByFullName: "ownership/getListApartmentsByFullName",
    }),
    getListApartment() {
      if (this.fullName.length > 5)
        this.getListApartmentsByFullName(this.fullName).then(() => {
          this.$emit("messages", this.getOwnership);
        });
    },
    fillFullName() {
      this.fullName = this.mapOwnerToLineFullNamesOwner(this.owner);
    },
  },
  computed: {
    ...mapGetters({
      getOwnership: "ownership/getOwnership",
    }),
  },
  mounted() {
    this.fillFullName();
  },
  updated() {
    this.fillFullName();
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
  justify-content: flex-start;
}
.title {
  font-size: 17px;
  color: darkgoldenrod;
  margin-right: 5px;
}
.input {
  margin: 5px 5px 5px 0px;
  border-color: darkgoldenrod;
  color: darkgoldenrod;
}
</style>
