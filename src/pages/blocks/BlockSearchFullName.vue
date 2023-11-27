<template>
  <div class="main">
    <div class="title">Введите Ф.И.О. :</div>
    <input-simple
      class="input"
      v-model.trim="fullName"
      :style="{ width: '300px' }"
    />
    <button-simple
      :style="{ color: 'darkgoldenrod', 'border-color': 'darkgoldenrod' }"
      @click="clickButton"
      >{{ nameButton }}
    </button-simple>
  </div>
</template>
<script>
export default {
  name: "block-search-full-name",
  data() {
    return {
      fullName: "",
    };
  },
  props: {
    fullNameProps: String,
    nameButton: String,
  },
  methods: {
    clickButton() {
      if (this.fullName.length > 5) this.$emit("fullName", this.fullName);
    },
  },
  mounted() {
    this.fullName = this.fullNameProps;
  },
  updated() {
    this.fullName = this.fullNameProps;
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.main {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.title {
  font-size: 17px;
  color: darkgoldenrod;
  margin-right: 5px;
}
.input {
  margin: 5px 5px 5px 0px;
  border-color: darkgoldenrod;
  color: darkgoldenrod;
}
</style>
