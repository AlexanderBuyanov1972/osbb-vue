<template>
  <div class="main">
    <header-messages :messages="getMessages" />
    <line-header
      :text="
        'Объект недвижимости - квартира № ' +
        this.getOwnership.address.apartment
      "
    />
    <line-address :address="this.getOwnership.address" />

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
export default {
  data() {
    return {
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

.btn {
  margin: 20px 0px 10px 0px;
}
.btns {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
