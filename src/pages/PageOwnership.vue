<template>
  <div class="main">
    <block-messages :messages="getMessages" />
    <h2 class="header1">
      Объект недвижимости - квартира № {{ getOwnership.address.apartment }}.
    </h2>
    <h2 class="header2">{{ getLineAddress() }}</h2>
    <block-read-ownership :ownership="getOwnership || {}" />

    <button-simple
      class="btn"
      @click="$router.push('/edit/ownership/' + getOwnership.id)"
      >Редактировать собственность.</button-simple
    >
  </div>
</template>
<script>
import BlockReadOwnership from "@/pages/blocks/read/BlockReadOwnership.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    BlockReadOwnership,
  },
  methods: {
    ...mapActions({
      fetchOwnership: "ownership/fetchOwnership",
    }),
    getLineAddress() {
      const address = this.getOwnership.address;
      return (
        address.zipCode +
        ",  " +
        address.country +
        ",  " +
        address.region +
        ",  " +
        address.city +
        ",  " +
        address.street +
        ",  дом № " +
        address.house +
        ",  кв. " +
        address.apartment
      );
    },
  },

  mounted() {
    this.fetchOwnership(this.$route.params.id);
  },
  computed: {
    ...mapGetters({
      getOwnership: "ownership/getOwnership",
      getMessages: "ownership/getMessages",
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
h2 {
  margin: 10px 0px;
  text-align: center;
}
.header1 {
  color: blueviolet;
}
.header2 {
  color: teal;
}

.btn {
  margin: 20px 0px 10px 0px;
}
</style>
