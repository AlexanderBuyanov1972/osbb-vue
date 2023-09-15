<template>
  <div class="main">
    <vue-loader :isLoader="this.getIsLoading" />
    <header-messages :messages="getMessages" />
    <line-header text="Список недвижимости" />
    <ownership-item :ownership="header" count="№" />
    <div v-for="(one, index) in getOwnerships" :key="one.id">
      <div @click="() => this.$router.push(PAGE_SHOW_OWNERSHIP + '/' + one.id)">
        <ownership-item :ownership="one" :count="index + 1" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import OwnershipItem from "@/itemsAndLists/OwnershipItem.vue";
import { PAGE_SHOW_OWNERSHIP } from "@/router/apiRouter";
export default {
  components: {
    OwnershipItem,
  },
  data() {
    return {
      PAGE_SHOW_OWNERSHIP,
      header: {
        typeRoom: "Тип помещения",
        totalArea: "Общая площадь, м2",
        livingArea: "Жилая площадь, м2",
        numberRooms: "Количество комнат",
        address: { entrance: "Подъезд", floor: "Этаж", apartment: "Квартира №" },
        loggia: "Балкон",
      },
    };
  },

  //   <div class="item">{{ haveRoom(ownership) }}</div>
  //   <div class="item">Общая площадь : {{ ownership.totalArea }} м2</div>
  //   <div class="item">Жилая площадь : {{ ownership.livingArea }} м2</div>
  //   <div class="item">Кол-во комнат : {{ ownership.numberRooms }}</div>
  //   <div class="item">
  //     Подъезд : {{ ownership.address.entrance }}
  //   </div>
  //   <div class="item">Этаж : {{ ownership.address.floor }}</div>
  //   <div :class="checkFilling(haveLoggia(ownership))">
  //     Балкон : {{ haveLoggia(ownership) }}
  //   </div>
  computed: {
    ...mapGetters({
      getOwnerships: "ownership/getOwnerships",
      getMessages: "ownership/getMessages",
      getIsLoading: "ownership/getIsLoading",
    }),
  },
  methods: {
    ...mapActions({
      fetchOwnerships: "ownership/getAllOwnership",
    }),
  },
  mounted() {
    this.fetchOwnerships();
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
