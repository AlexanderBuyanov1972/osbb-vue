<template>
  <div class="block1">
    <button-simple @click="goToPageOwners">{{ LIST_OWNER }} </button-simple>
    <button-simple @click="goToPageOwnerships"
      >{{ LIST_OWNERSHIP }}
    </button-simple>
    <button-simple @click="goToPageRegistryOwners"
      >{{ REGISTRY_OWNER }}
    </button-simple>
    <button-simple @click="goToPageRegistryOwnerships"
      >{{ REGISTRY_OWNERSHIP }}
    </button-simple>
    <button-simple @click="goToPageCreateOwnership"
      >{{ CREATE_ENTRY_ABOUT_OWNERSHIP }}
    </button-simple>
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
    <button-simple
      :hidden="!this.checkApartment"
      @click="goToPageShowEntryOwnership"
      >{{ GET }}
    </button-simple>
  </div>
</template>
<script>
import {
  PAGE_SHOW_OWNERS,
  PAGE_SHOW_OWNERSHIPS,
  PAGE_REGISTRY_OWNERS,
  PAGE_REGISTRY_OWNERSHIPS,
  PAGE_CREATE_ENTRY_OWNERSHIP,
  PAGE_SHOW_ENTRY_OWNERSHIP,
} from "@/router/apiRouter";
import {
  CREATE_ENTRY_ABOUT_OWNERSHIP,
  LIST_OWNER,
  LIST_OWNERSHIP,
  REGISTRY_OWNER,
  REGISTRY_OWNERSHIP,
  GET,
} from "@/ui/namesButton";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "header-data",
  data() {
    return {
      apartment: "",
      GET,
      PAGE_SHOW_ENTRY_OWNERSHIP,
      CREATE_ENTRY_ABOUT_OWNERSHIP,
      LIST_OWNER,
      LIST_OWNERSHIP,
      REGISTRY_OWNER,
      REGISTRY_OWNERSHIP,
      PAGE_SHOW_OWNERS,
      PAGE_SHOW_OWNERSHIPS,
      PAGE_REGISTRY_OWNERS,
      PAGE_REGISTRY_OWNERSHIPS,
      PAGE_CREATE_ENTRY_OWNERSHIP,
    };
  },
  methods: {
    ...mapActions({
      fetchIdOwnershipByIdApartment: "ownership/fetchIdOwnershipByIdApartment",
    }),
    goToPageOwners() {
      this.$router.push(PAGE_SHOW_OWNERS);
    },
    goToPageOwnerships() {
      this.$router.push(PAGE_SHOW_OWNERSHIPS);
    },
    goToPageRegistryOwners() {
      this.$router.push(PAGE_REGISTRY_OWNERS);
    },
    goToPageRegistryOwnerships() {
      this.$router.push(PAGE_REGISTRY_OWNERSHIPS);
    },
    goToPageCreateOwnership() {
      this.$router.push(PAGE_CREATE_ENTRY_OWNERSHIP);
    },
    goToPageShowEntryOwnership() {
      this.fetchIdOwnershipByIdApartment(this.apartment).then(() => {
        return this.$router.push(
          PAGE_SHOW_ENTRY_OWNERSHIP + "/" + this.getIdOwnership
        );
      });
    },
    plus() {
      if (this.apartment < 84) {
        this.apartment = this.apartment * 1 + 1;
        this.goToPageShowEntryOwnership();
      }
    },
    minus() {
      if (this.apartment > 1) {
        this.apartment = this.apartment * 1 - 1;
        this.goToPageShowEntryOwnership();
      }
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
  color: blueviolet;
  margin-right: 5px;
}
.input {
  margin: 5px 5px 5px 0px;
  border-color: blueviolet;
}
</style>
