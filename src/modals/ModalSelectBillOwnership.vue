<template>
  <div class="block">
    <div class="column">
      <div class="content">{{ message }}</div>
      <div class="item" v-for="one in ownerships" :key="one.id">
        <span @click="id = one.id">Лицевой счёт № {{ one.bill }}</span>
      </div>
      <div class="buttons">
        <div class="button" @click="close">Закрыть</div>
        <div class="button" @click="action">Выбрать</div>
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
  data() {
    return {
      id: 0,
    };
  },
  methods: {
    action() {
      this.$emit("select", this.id);
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
  height: 250px;
  width: 30em;
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
}
.column {
  display: flex;
  flex-direction: column;
}
</style>
