<template>
  <div class="main">
    <button-simple @click="goToPageMain">{{ MAIN }}</button-simple>
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
    <div class="title">Введите № помещения :</div>
    <input-simple
      class="input"
      v-model="apartment"
      :style="{ width: '100px', height: '1.8em', 'font-size': '1.5em' }"
    />
    <button-simple :hidden="!checkApartment" @click="goToPageShowEntryOwnership"
      >Нажать
    </button-simple>
  </div>
</template>
<script>
import {
  PAGE_MAIN,
  PAGE_SHOW_OWNERS,
  PAGE_SHOW_OWNERSHIPS,
  PAGE_REGISTRY_OWNERS,
  PAGE_REGISTRY_OWNERSHIPS,
  PAGE_SHOW_ENTRY_OWNERSHIP,
} from "@/router/apiRouter";
import {
  LIST_OWNER,
  LIST_OWNERSHIP,
  REGISTRY_OWNER,
  REGISTRY_OWNERSHIP,
  INFO_ABOUT_APARTMENT,
  MAIN,
} from "@/ui/namesButton";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      apartment: 0,
      LIST_OWNER,
      LIST_OWNERSHIP,
      REGISTRY_OWNER,
      REGISTRY_OWNERSHIP,
      MAIN,
      PAGE_MAIN,
      PAGE_SHOW_OWNERS,
      PAGE_SHOW_OWNERSHIPS,
      PAGE_REGISTRY_OWNERS,
      PAGE_REGISTRY_OWNERSHIPS,
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
    goToPageMain() {
      this.$router.push(PAGE_MAIN);
    },
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
    goToPageShowEntryOwnership() {
      this.fetchIdOwnershipByIdApartment(this.apartment).then(() => {
        return this.$router.push(
          PAGE_SHOW_ENTRY_OWNERSHIP + "/" + this.getIdOwnership
        );
      });
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
  font-size: 1.5em;
  color: blueviolet;
}
.input {
  margin-right: 10px;
}
</style>
