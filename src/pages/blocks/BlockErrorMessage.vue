<template>
  <div :style="[flag(field) ? { color: 'blueviolet' } : { color: 'red' }]">
    {{ flag(field) ? messageTrue : messageFalse }}
  </div>
</template>

<script>
export default {
  name: "block-error-message",
  props: {
    field: undefined,
    messageFalse: String,
    messageTrue: String,
  },
  methods: {
    flag(value) {
      if (value == undefined) {
        return false;
      }
      if (value == "SELECT") {
        return false;
      }
      if (typeof value == "boolean") {
        return true;
      }
      if (typeof value == "number") {
        return value > 0 ? true : false;
      }
      return value.length == 0 ? false : true;
    },
    emit() {
      this.$emit("valid", this.flag(this.field));
    },
  },
  watch: {
    field() {
      this.emit();
    },
  },
  mounted() {
    this.emit();
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
div {
  min-height: 20px;
  padding: 5px 0px;
  font-size: 16px;
}
</style>
