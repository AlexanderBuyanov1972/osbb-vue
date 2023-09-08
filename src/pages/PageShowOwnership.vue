<template>
  <div class="main">
    <block-messages :messages="[...getMessagesOwnership]" />
    <div class="header">Просмотр записи о собственности.</div>
    <div class="blocks">
      <div class="block1">
        <block-read-ownership :ownership="mapValue(this.getOwnership, photo)" />
      </div>

      <div class="block3">
        <block-read-address :address="{ ...this.getOwnership.address }" />
      </div>

      <div class="column">
        <div
          class="list"
          v-for="one in [...this.getOwnership.owners]"
          :key="one.id"
        >
          <div class="block4">
            <block-read-owner :owner="one" />
          </div>
          <div class="block2">
            <block-read-password :password="one.password" />
          </div>
        </div>
      </div>
    </div>

    <hr class="teal" />
    <button-simple class="btn" @click="goToPageUpdateOwnership"
      >Редактировать запись о собственности.</button-simple
    >
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { mapValue } from "@/pages/functions";
import photo from "@/photos/rooms/1_1.png";
export default {
  data() {
    return {
      mapValue,
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
    this.fetchOwnership(this.$route.params.id);
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
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.list {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid blueviolet;
  width: 100%;
  margin-top: 10px;
}
.column {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
  margin-right: 10px;
}
.block2,
.block4 {
  margin: 10px;
  width: 50%;
}
.block1,
.block3 {
  margin: 10px;
  width: 25%;
}
.teal {
  color: teal;
}
.btn {
  margin: 10px 0 0 10px;
}
.header {
  color: brown;
  margin-bottom: 10px;
  text-align: center;
  font-size: 1.8em;
}
hr {
  margin-top: 25px;
}
</style>
