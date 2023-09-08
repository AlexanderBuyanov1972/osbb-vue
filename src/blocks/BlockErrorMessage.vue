<template>
  <div :style="[flag(field) ? { color: 'blueviolet' } : { color: 'red' }]">
    {{ flag(field) ? messageTrue : messageFalse }}
  </div>
</template>
<script>
export default {
  name: "block-error-message",
  props: {
    field: String,
    messageFalse: String,
    messageTrue: String,
  },
  data() {
    return {

    };
  },
  methods: {
    flag(value) {
      return value == undefined || value.length == 0 ? false : true;
    },
  },
  watch: {
    field() {
      this.$emit("valid", this.flag(this.field));
    },
  },
  mounted() {
    this.$emit("valid", this.flag(this.field));
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
