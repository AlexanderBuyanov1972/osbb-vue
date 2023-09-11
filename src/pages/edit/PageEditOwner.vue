<template>
  <div class="main">
    <block-messages :messages="getMessages" />
    <div class="header">Редактирование записи о собственнике.</div>
    <div class="blocks">
      <div class="owner">
        <block-edit-owner
          @owner="(data) => (owner = data)"
          @isValidOwner="(value) => (isValidOwner = value)"
        />
      </div>
      <div class="password">
        <block-edit-password
          @password="(data) => (password = data)"
          @isValidPassword="(value) => (isValidPassword = value)"
        />
      </div>
    </div>
    <hr />
    <button-simple
      class="btn"
      @click="sendOwner"
      :hidden="!(isValidOwner && isValidPassword)"
      >Послать на сервер.</button-simple
    >
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      owner: {},
      password: {},
      isValidOwner: false,
      isValidPassword: false,
    };
  },
  methods: {
    ...mapActions({
      fetchOwner: "owner/fetchOwner",
      updateOwner: "owner/updateOwner",
    }),
    sendOwner() {
      this.owner.password = this.password;
      this.updateOwner(this.owner).then(() => {
        setTimeout(() => {
          this.$router.push("/owner/" + this.$route.params.id);
        }, 3000);
      });
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
.header {
  color: brown;
  margin-bottom: 10px;
  text-align: center;
  font-size: 1.8em;
}
hr {
  color: teal;
}
.btn {
  margin: 10px 0 0 10px;
}
.blocks {
  display: flex;
  align-items: start;
  justify-content: space-around;
  margin-bottom: 10px;
  border: 2px solid blueviolet;
  padding: 10px;
}
.owner,
.password {
  width: 50%;
}
.owner {
  margin-right: 10px;
}
.password {
  margin-left: 10px;
}
</style>
