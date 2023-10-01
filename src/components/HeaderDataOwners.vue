<template>
  <div class="block1">
    <button-edit @click="$router.push(PAGE_OWNERS_GET)"
      >{{ OWNERS_GET }}
    </button-edit>
    <button-edit @click="$router.push(PAGE_REGISTRY_OWNERS)"
      >{{ REGISTRY_OWNERS }}
    </button-edit>
    <button-edit @click="$router.push(PAGE_ENTRY_CREATE)"
      >{{ ENTRY_CREATE }}
    </button-edit>
    <button-edit
      @click="this.$router.push(PAGE_ENTRY_UPDATE)"
      >{{ ENTRY_UPDATE }}</button-edit
    >
  </div>
  <div class="block2">
    <div class="title">Введите Ф.И.О. :</div>
    <input-simple
      class="input"
      v-model.trim="fullName"
      :style="{ width: '300px' }"
    />

    <button-edit @click="getOwnerByFullName">{{ GET }} </button-edit>
  </div>
</template>
<script>
import {
  PAGE_OWNERS_GET,
  PAGE_REGISTRY_OWNERS,
  PAGE_ENTRY_CREATE,
  PAGE_OWNER_GET,
  PAGE_ENTRY_UPDATE,
} from "@/router/apiRouter";
import {
  GET,
  REGISTRY_OWNERS,
  ENTRY_CREATE,
  OWNERS_GET,
  ENTRY_UPDATE,
} from "@/ui/namesButton";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "header-data-owners",
  data() {
    return {
      fullName: "",
      // pages
      PAGE_OWNERS_GET,
      PAGE_REGISTRY_OWNERS,
      PAGE_ENTRY_CREATE,
      PAGE_OWNER_GET,
      PAGE_ENTRY_UPDATE,
      // buttons
      ENTRY_CREATE,
      GET,
      OWNERS_GET,
      REGISTRY_OWNERS,
      ENTRY_UPDATE,
    };
  },
  methods: {
    ...mapActions({
      fetchOwnerByFullName: "owner/fetchOwnerByFullName",
    }),
    getOwnerByFullName() {
      this.fetchOwnerByFullName(this.fullName).then(() => {
        this.$router.push(PAGE_OWNER_GET + "/" + this.getOwner.id);
      });
    },
  },
  computed: {
    ...mapGetters({
      getOwner: "owner/getOwner",
    }),
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
