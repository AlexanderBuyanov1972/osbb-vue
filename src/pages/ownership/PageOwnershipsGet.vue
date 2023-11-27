<template>
  <header-data-ownerships></header-data-ownerships>
  <div class="main">
    <vue-loader :isLoader="getIsLoading" />
    <header-messages :messages="getMessages" />
    <line-header text="Список помещений" :style="{ color: 'blueviolet' }" />
    <ownership-item :style="{ color: 'brown' }" :ownership="header" count="№" />
    <div v-for="(one, index) in ownerships" :key="one.id">
      <div @click="() => this.$router.push(PAGE_OWNERSHIP_GET + '/' + one.id)">
        <ownership-item :ownership="one" :count="index + 1" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import OwnershipItem from "@/itemsAndLists/OwnershipItem.vue";
import { PAGE_OWNERSHIP_GET } from "@/router/apiRouter";
export default {
  components: {
    OwnershipItem,
  },
  data() {
    return {
      ownerships: [],
      PAGE_OWNERSHIP_GET,
      header: {
        typeRoom: "SELECT",
        address: {
          apartment: "Квартира №",
          entrance: "Подъезд",
          floor: "Этаж",
        },

        bill: "Лицевой счёт",
        totalArea: "Общая площадь, м2",
        heatSupply: "SELECT",
        loggia: "Балкон",
      },
    };
  },

  computed: {
    ...mapGetters({
      getOwnerships: "ownership/getOwnerships",
      getMessages: "ownership/getMessages",
      getIsLoading: "ownership/getIsLoading",
    }),
  },
  methods: {
    ...mapActions({
      fetchAllOwnership: "ownership/fetchAllOwnership",
    }),
  },
  mounted() {
    this.fetchAllOwnership().then(() => (this.ownerships = this.getOwnerships));
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
