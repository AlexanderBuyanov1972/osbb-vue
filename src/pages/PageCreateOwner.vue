<template>
  <div class="main">
    <div class="blocks">
      <div class="block1"><block-create-owner @owner="makeOwner" /></div>
      <div class="block2">
        <block-create-password @password="makeOwner" />
      </div>
      <div class="block3">
        <block-create-ownership @ownership="makeOwner" />
      </div>
      <div class="block4">
        <block-create-address @address="makeOwner" />
      </div>
    </div>
    <hr class="teal" />
    <button-simple class="btn" @click="createOwner">Создать</button-simple>
  </div>
</template>
<script>
import BlockCreateOwner from "@/pages/blocks/BlockCreateOwner.vue";
import BlockCreatePassword from "@/pages/blocks/BlockCreatePassword.vue";
import BlockCreateOwnership from "@/pages/blocks/BlockCreateOwnership.vue";
import BlockCreateAddress from "@/pages/blocks/BlockCreateAddress.vue";
export default {
  component: {
    BlockCreateOwner,
    BlockCreatePassword,
    BlockCreateOwnership,
    BlockCreateAddress,
  },
  data() {
    return {
      owner: {},
      password: {},
      ownership: {},
      address: {},
    };
  },
  methods: {
    createOwner() {
      console.log(this.owner);
    },
    makeOwner() {
      this.ownership.address = this.address;
      this.owner.password = this.password;
      this.owner.ownerships = [this.ownership];
    },
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
.block1,
.block2,
.block3,
.block4 {
  margin: 10px;
  width: 25%;
}
.teal {
  color: teal;
}
.btn {
  margin: 10px 0 0 10px;
}
</style>
