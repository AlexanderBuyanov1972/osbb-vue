<template>
  <div class="block1">
    <button-edit @click="$router.push(PAGE_OWNERS_READ)"
      >{{ OWNERS_READ }}
    </button-edit>
    <button-edit @click="$router.push(PAGE_REGISTRY_OWNERS)"
      >{{ REGISTRY_OWNERS }}
    </button-edit>
    <button-edit @click="$router.push(PAGE_ENTRY_CREATE)"
      >{{ ENTRY_CREATE }}
    </button-edit>
  </div>
  <div class="block2">
    <div class="title">Введите № помещения :</div>
    <button-edit @click="minus">-</button-edit>
    <input-simple
      class="input"
      v-model="apartment"
      :style="{ width: '65px' }"
    />
    <button-edit @click="plus">+</button-edit>
    <button-edit :hidden="!this.checkApartment" @click="goToPageEntryRead"
      >{{ GET_OWNERS }}
    </button-edit>
  </div>
</template>
<script>
import {
  PAGE_OWNERS_READ,
  PAGE_REGISTRY_OWNERS,
  PAGE_ENTRY_CREATE,
} from "@/router/apiRouter";
import {
  OWNERS_READ,
  REGISTRY_OWNERS,
  ENTRY_CREATE,
  GET_OWNERS,
} from "@/ui/namesButton";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "header-data-owners",
  data() {
    return {
      apartment: "1",
      // pages
      PAGE_OWNERS_READ,
      PAGE_REGISTRY_OWNERS,
      PAGE_ENTRY_CREATE,
      // buttons
      ENTRY_CREATE,
      OWNERS_READ,
      REGISTRY_OWNERS,
      GET_OWNERS,
    };
  },
  methods: {
    ...mapActions({
      fetchIdOwnershipByIdApartment: "ownership/fetchIdOwnershipByIdApartment",
    }),

    plus() {
      if (this.apartment < 84) this.apartment = this.apartment * 1 + 1;
    },
    minus() {
      if (this.apartment > 1) this.apartment = this.apartment * 1 - 1;
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
