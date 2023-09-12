<template>
  <div class="main">
    <block-messages :messages="getMessages" />
    <h2 class="header1">
      Объект недвижимости - квартира №
      {{ this.getOwnership.address.apartment }}.
    </h2>
    <h2 class="header2">
      {{ this.mapAddressToLineAddress(this.getOwnership.address) }}
    </h2>
    <block-read-ownership :ownership="ownership" />

    <div class="btns">
      <button-simple
        class="btn"
        @click="this.$router.push('/edit/ownership/' + this.getOwnership.id)"
        >Редактировать собственность.</button-simple
      >
      <button-simple
        class="btn"
        @click="this.$router.push('/show/ownership/' + this.getOwnership.id)"
        >Смотреть запись о собственности.</button-simple
      >
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { mapAddressToLineAddress } from "@/pages/functions";

export default {
  data() {
    return {
      mapAddressToLineAddress,
      ownership: {},
    };
  },
  methods: {
    ...mapActions({
      fetchOwnership: "ownership/fetchOwnership",
    }),
  },

  mounted() {
    this.fetchOwnership(this.$route.params.id).then(() => {
      this.ownership = this.getOwnership;
    });
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
.btns {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
