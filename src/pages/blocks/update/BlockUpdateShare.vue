<template>
  <div class="main">
    <line-header text="Доля в помещении" :style="{ color: 'brown' }" />
    <div class="share">
      <block-error-message
        :field="share"
        messageFalse="Укажите долю в собственности (от 0 до 1, пять знаков после точки)"
        messageTrue="Доля в собственности (от 0 до 1, пять знаков после точки)"
        @valid="(value) => handlerShare(value)"
      />
      <input-simple v-model.trim="share" placeholder="Доля в собственности (от 0 до 1, пять знаков после точки)" />
    </div>
  </div>
</template>
<script>
export default {
  name: "block-update-share",
  props: {
    shareProps: Number,
  },
  data() {
    return {
      share: {},
      validShare: false,
    };
  },
  methods: {
    emitShare() {
      this.$emit("isValidShare", this.validShare);
      this.$emit("share", this.share);
    },
    handlerShare(value) {
      this.validShare = value;
      this.emitShare();
    },
  },
  updated() {
    this.share = this.shareProps;
  },
  mounted() {
    this.share = this.shareProps;
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
