<script>
export default {
  name: "dialog-window",
  props: {
    show: Boolean,
  },
};
</script>
<template>
  <div class="dialog" v-show="show" @close="this.$emit('close')">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  /* background: rgba(0, 0, 0, 0.5); */
  background: rgba(244, 243, 245, 0.8);
  position: fixed;
  display: flex;
  z-index: 3;
}
.content {
  margin: auto;
}
</style>
