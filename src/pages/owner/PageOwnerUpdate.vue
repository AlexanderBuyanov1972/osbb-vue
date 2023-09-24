<template>
  <header-data-owners></header-data-owners>
  <div class="main">
    <header-messages :messages="getMessages" />
    <line-header text="Редактирование данных о собственнике" />
    <div class="blocks">
      <div class="owner">
        <block-update-owner
          @owner="(data) => (owner = data)"
          @isValidOwner="(value) => (isValidOwner = value)"
        />
      </div>
      <div class="passport">
        <block-update-passport
          @passport="(data) => (passport = data)"
          @isValidPassport="(value) => (isValidPassport = value)"
        />
      </div>
    </div>
    <vue-hr />
    <button-back
      @click="$router.push(PAGE_OWNER_READ + '/' + this.$route.params.id)"
    />
    <button-simple
      @click="sendOwner"
      :hidden="!(isValidOwner && isValidPassport)"
      >{{ SEND_TO_SERVER }}</button-simple
    >
  </div>
</template>
<script>
import { PAGE_OWNER_READ } from "@/router/apiRouter";
import { SEND_TO_SERVER } from "@/ui/namesButton";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      owner: {},
      passport: {},
      isValidOwner: false,
      isValidPassport: false,
      SEND_TO_SERVER,
      PAGE_OWNER_READ,
    };
  },
  methods: {
    ...mapActions({
      updateOwner: "owner/updateOwner",
    }),
    ...mapMutations({
      setIsLoading: "owner/setIsLoading",
    }),
    sendOwner() {
      this.owner.photos =
        this.owner.gender == "MALE"
          ? [{ id: 1, name: "male", url: "@/photos/owners/male.jpg" }]
          : [{ id: 2, name: "female", url: "@/photos/owners/female.jpg" }];
      this.owner.passport = this.passport;
      this.updateOwner(this.owner).then(() => {
        this.$router.push(PAGE_OWNER_READ + "/" + this.$route.params.id);
      });
    },
  },
  computed: {
    ...mapGetters({
      getMessages: "owner/getMessages",
      getIsLoading: "owner/getIsLoading",
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
  display: flex;
  align-items: start;
  justify-content: space-around;
  margin-bottom: 10px;
  border: 1px solid blueviolet;
  padding: 10px;
  font-size: 20px;
}
.owner,
.passport {
  width: 50%;
}
.owner {
  margin-right: 10px;
}
.passport {
  margin-left: 10px;
}
</style>
