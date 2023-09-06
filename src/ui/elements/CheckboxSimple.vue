<script>
export default {
  name: "checkbox-simple",
  props: {
    title: String,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    emitSubscribe() {
      this.show = !this.show;
      this.$emit("subscribe", this.show);
    },
  },
};
</script>
<template>
  <div class="checkbox" @click="emitSubscribe">
    <div class="symbol">{{ show === false ? "" : "&#10004;" }}</div>
    <div class="title">{{ title }}</div>
  </div>
</template>
<style scoped>
.checkbox {
  margin-top: 1em;
  position: relative;
  display: flex;
}
.symbol {
  width: 12px;
  height: 20px;
  background-color: var(--bgc-input);
  color: var(--color-base1);
  position: absolute;
  font-size: 0.9em;
}
.title {
  align-self: center;
  margin-left: 1.5em;
}
</style>