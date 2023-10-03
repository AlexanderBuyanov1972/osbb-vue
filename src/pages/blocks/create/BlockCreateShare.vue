<template>
  <div class="main">
    <line-header text="Доля в помещении" :style="{ color: 'brown' }" />
    <div class="share">
      <block-error-message
        :field="share"
        messageFalse="Укажите долю в помещении"
        messageTrue="Доля в помещении"
        @valid="(value) => handlerShare(value)"
      />
      <input-simple v-model.trim="share" placeholder="Доля в помещении" />
    </div>
  </div>
</template>
<script>
export default {
  name: "block-create-share",
  props: {
    shareProps: Object,
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
