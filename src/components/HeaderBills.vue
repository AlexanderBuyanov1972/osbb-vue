<template>
  <div class="block1">
    <button-bills @click="$router.push(PAGE_BILLS_GET)"
      >{{ BILLS_GET }}
    </button-bills>
  </div>
  <div class="block2">
    <div class="title">Введите № помещения :</div>
    <button-bills @click="minus">-</button-bills>
    <input-simple
      class="input"
      v-model="apartment"
      :style="{ width: '65px' }"
    />
    <button-bills @click="plus">+</button-bills>
    <button-bills :hidden="!this.checkApartment" @click="getOwnersByApartment"
      >{{ BILLS_GET }}
    </button-bills>
  </div>
</template>
<script>
import { PAGE_BILLS_GET } from "@/router/apiRouter";
import { BILLS_GET } from "@/ui/namesButton";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "header-bills",
  data() {
    return {
      apartment: "1",
      // pages
      PAGE_BILLS_GET,
      // buttons
      BILLS_GET,
    };
  },
  methods: {
    ...mapActions({
      fetchOwnersByApartment: "owner/fetchOwnersByApartment",
    }),
    getOwnersByApartment() {
      this.fetchOwnersByApartment(this.apartment);
    },

    plus() {
      if (this.apartment < 84) this.apartment = this.apartment * 1 + 1;
    },
    minus() {
      if (this.apartment > 1) this.apartment = this.apartment * 1 - 1;
    },
  },
  computed: {
    checkApartment() {
      return this.apartment > 0 && this.apartment < 85;
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
.block1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.block2 {
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
