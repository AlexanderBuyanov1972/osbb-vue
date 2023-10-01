<template>
  <div class="block1">
    <button-simple @click="$router.push(PAGE_OWNERSHIPS_GET)"
      >{{ OWNERSHIPS_GET }}
    </button-simple>
    <button-simple @click="$router.push(PAGE_REGISTRY_OWNERSHIPS)"
      >{{ REGISTRY_OWNERSHIPS }}
    </button-simple>
    <button-simple @click="$router.push(PAGE_ENTRY_CREATE)"
      >{{ ENTRY_CREATE }}
    </button-simple>
    <button-simple
      @click="this.$router.push(PAGE_ENTRY_UPDATE)"
      >{{ ENTRY_UPDATE }}</button-simple
    >
  </div>
  <div class="block2">
    <div class="title">Введите № помещения :</div>
    <button-simple @click="minus">-</button-simple>
    <input-simple
      class="input"
      v-model="apartment"
      :style="{ width: '65px' }"
    />
    <button-simple @click="plus">+</button-simple>
    <button-simple :hidden="!this.checkApartment" @click="goToPageOwnershipRead"
      >{{ GET }}
    </button-simple>
  </div>
</template>
<script>
import {
  PAGE_OWNERSHIPS_GET,
  PAGE_REGISTRY_OWNERSHIPS,
  PAGE_ENTRY_CREATE,
  PAGE_OWNERSHIP_GET,
  PAGE_ENTRY_UPDATE
} from "@/router/apiRouter";
import {
  OWNERSHIPS_GET,
  REGISTRY_OWNERSHIPS,
  ENTRY_CREATE,
  ENTRY_UPDATE,
  GET,
} from "@/ui/namesButton";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "header-data-ownerships",
  data() {
    return {
      apartment: "1",
      // buttons
      OWNERSHIPS_GET,
      REGISTRY_OWNERSHIPS,
      ENTRY_CREATE,
      ENTRY_UPDATE,
      GET,
      // pages
      PAGE_OWNERSHIPS_GET,
      PAGE_REGISTRY_OWNERSHIPS,
      PAGE_ENTRY_CREATE,
      PAGE_OWNERSHIP_GET,
      PAGE_ENTRY_UPDATE
    };
  },
  methods: {
    ...mapActions({
      fetchOwnershipByApartment: "ownership/fetchOwnershipByApartment",
    }),
    goToPageOwnershipRead() {
      this.fetchOwnershipByApartment(this.apartment).then(() => {
        this.$router.push(PAGE_OWNERSHIP_GET + "/" + this.getOwnership.id);
      });
    },
    plus() {
      if (this.apartment < 84) {
        this.apartment = this.apartment * 1 + 1;
        this.goToPageOwnershipRead();
      }
    },
    minus() {
      if (this.apartment > 1) {
        this.apartment = this.apartment * 1 - 1;
        this.goToPageOwnershipRead();
      }
    },
  },
  computed: {
    ...mapGetters({
      getOwnership: "ownership/getOwnership",
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
  color: blueviolet;
  margin-right: 5px;
}
.input {
  margin: 5px 5px 5px 0px;
  border-color: blueviolet;
  color: blueviolet;
}
</style>
