<template>
  <div class="">
    <block-messages :messages="getMessages" />
    <h2>Собственник - {{ getFullNameOwner() }}.</h2>
    <block-owner :owner="getOwner" />
    <button-simple
      class="btn"
      @click="$router.push('/edit/owner/' + getOwner.id)"
      >Редактировать собственника.</button-simple
    >
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import BlockOwner from "@/blocks/BlockOwner.vue";
export default {
  components: {
    BlockOwner,
  },
  methods: {
    ...mapActions({
      fetchOwner: "owner/fetchOwner",
    }),
    getFullNameOwner() {
      return (
        this.getOwner.lastName +
        " " +
        this.getOwner.firstName +
        " " +
        this.getOwner.secondName
      );
    },
  },
  mounted() {
    this.fetchOwner(this.$route.params.id);
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
</style>
