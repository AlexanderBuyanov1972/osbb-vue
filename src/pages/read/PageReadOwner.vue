<template>
  <div class="">
    <header-messages :messages="this.getMessages" />
    <h2>Собственник - {{ mapOwnerToLineFullNamesOwner(this.getOwner) }}.</h2>
    <block-read-owner :owner="owner" />
    <block-read-password :password="this.getOwner.password" />
    <hr />
    <button-simple
      class="btn"
      @click="this.$router.push('/edit/owner/' + this.getOwner.id)"
      >Редактировать собственника.</button-simple
    >
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { mapOwnerToLineFullNamesOwner } from "@/pages/functions";
export default {
  data() {
    return {
      mapOwnerToLineFullNamesOwner,
      owner: {},
    };
  },
  methods: {
    ...mapActions({
      fetchOwner: "owner/fetchOwner",
    }),
  },
  mounted() {
    this.fetchOwner(this.$route.params.id).then(
      () => (this.owner = this.getOwner)
    );
  },
  computed: {
    ...mapGetters({
      getOwner: "owner/getOwner",
      getMessages: "owner/getMessages",
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
  color: blueviolet;
  margin: 10px 0px;
  text-align: center;
}
.btn {
  margin: 20px 0px 10px 5px;
}
hr {
  counter-reset: teal;
  margin-top: 20px;
}
</style>
