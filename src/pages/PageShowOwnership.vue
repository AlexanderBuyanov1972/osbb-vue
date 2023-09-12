<template>
  <div class="main">
    <header-messages :messages="getMessagesOwnership" />
    <line-header text="Просмотр записи о собственности." />
    <line-address :address="this.address" />
    <div class="blocks">
      <div class="ownership">
        <block-read-ownership :ownership="this.ownership" />
      </div>

      <div class="owner" v-for="one in owners" :key="one.id">
        <div class="read_owner">
          <block-read-owner :owner="one" />
        </div>
        <div class="read_password">
          <block-read-password
            :class="read_password"
            :password="one.password"
          />
        </div>
      </div>
    </div>

    <hr class="hr" />
    <button-simple class="btn" @click="this.$router.push('/ownership/' + this.getOwnership.id)"
      >Назад.</button-simple
    >
    <button-simple class="btn" @click="goToPageUpdateOwnership"
      >Редактировать запись о собственности.</button-simple
    >
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      ownership: {},
      address: {},
      owners: [],
    };
  },
  methods: {
    goToPageUpdateOwnership() {
      this.$router.push("/update/ownership/" + this.getOwnership.id);
    },

    ...mapActions({
      fetchOwnership: "ownership/fetchOwnership",
    }),
  },
  mounted() {
    this.fetchOwnership(this.$route.params.id).then(() => {
      this.ownership = this.getOwnership;
      this.address = this.getOwnership.address;
      this.owners = this.getOwnership.owners;
    });
  },
  computed: {
    ...mapGetters({
      getOwnership: "ownership/getOwnership",
      getMessagesOwnership: "ownership/getMessages",
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
.blocks {
  color: red;
  font-size: 1.2em;
}
.owner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 10px;
}
.read_owner {
  width: 60%;
}
.read_password {
  width: 35%;
  align-self: flex-start;
}

.hr {
  margin-top: 25px;
  color: teal;
}
.btn {
  margin: 10px 0 0 10px;
}
</style>
