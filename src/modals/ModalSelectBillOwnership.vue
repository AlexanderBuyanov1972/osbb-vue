<template>
  <div class="block">
    <div class="column">
      <div class="content">{{ message }}</div>
      <div class="item" v-for="one in ownerships" :key="one.id">
        <span @click="() => action(one.id)">Лицевой счёт № {{ one.bill }}</span>
      </div>
      <div class="buttons">
        <div class="button" @click="close">Закрыть</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "modal-select-bill-ownership",
  props: {
    message: String,
    ownerships: Array,
  },
  methods: {
    action(value) {
      this.$emit("select", value);
      this.close();
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>
<style scoped>
.block {
  padding: 1.3em;
  height: 350px;
  width: 700px;
  background-color: white;
}
.close {
  font-size: 30px;
  margin: 0em 0.75em 0em 0em;
  float: right;
  cursor: pointer;
}
.button,
.content {
  font-size: 2em;
  color: teal;
  text-align: center;
}
.buttons {
  margin: 75px 10px 10px 10px;
  display: flex;
  justify-content: space-around;
}
.button {
  font-size: 30px;
  color: red;
}
.column {
  display: flex;
  flex-direction: column;
}
.item {
  color: blueviolet;
  font-size: 25px;
  text-align: center;
  margin-top: 25px;
}
</style>
