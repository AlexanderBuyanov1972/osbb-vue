<template>
  <div class="main" @mousemove="$emit('apartment', apartment)">
    <div class="title">Введите № помещения :</div>
    <button-simple @click="minus">-</button-simple>
    <input-simple
      class="input"
      v-model="apartment"
      :style="{ width: '65px' }"
    />
    <button-simple @click="plus">+</button-simple>
    <button-simple :hidden="!checkApartment" @click="goToPageShowEntryOwnership"
      >{{ GET }}
    </button-simple>
  </div>
</template>
<script>
import { PAGE_SHOW_ENTRY_OWNERSHIP } from "@/router/apiRouter";
import { GET } from "@/ui/namesButton";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      apartment: "",
      GET,
      PAGE_SHOW_ENTRY_OWNERSHIP,
    };
  },
  methods: {
    ...mapActions({
      fetchIdOwnershipByIdApartment: "ownership/fetchIdOwnershipByIdApartment",
    }),
    ...mapMutations({
      setMessages: "ownership/setMessages",
    }),
    goToPageShowEntryOwnership() {
      this.fetchIdOwnershipByIdApartment(this.apartment).then(() => {
        return this.$router.push(
          PAGE_SHOW_ENTRY_OWNERSHIP + "/" + this.getIdOwnership
        );
      });
    },
    plus() {
      this.apartment = this.apartment * 1 + 1;
      // this.goToPageShowEntryOwnership();
    },
    minus() {
      this.apartment = this.apartment * 1 - 1;
      // this.goToPageShowEntryOwnership();
    },
  },
  computed: {
    ...mapGetters({
      getIdOwnership: "ownership/getIdOwnership",
    }),
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
.main {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.title {
  font-size: 17px;
  color: blueviolet;
  margin-right: 5px;
}
.input {
  margin: 5px 5px 5px 0px;
  border-color: blueviolet;
}
</style>
