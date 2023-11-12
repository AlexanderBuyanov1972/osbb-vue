<template>
  <div class="search">
    <div class="title">Введите № помещения :</div>
    <button-simple @click="minus">-</button-simple>
    <input-simple
      class="input"
      v-model="apartment"
      :style="{ width: '60px' }"
    />
    <button-simple @click="plus">+</button-simple>
    <button-simple
      :hidden="!this.checkApartment(this.apartment)"
      @click="clickButton"
      >Получить
    </button-simple>
  </div>
</template>
<script>
import { checkApartment } from "@/pages/_functions/functions";
export default {
  name: "block-search-apartment",
  data() {
    return {
      apartment: "1",
      checkApartment,
    };
  },
  methods: {
    plus() {
      if (this.checkApartment(this.apartment * 1 + 1)) {
        this.apartment = this.apartment * 1 + 1;
        this.clickButton();
      }
    },
    minus() {
      if (this.checkApartment(this.apartment * 1 - 1)) {
        this.apartment = this.apartment * 1 - 1;
        this.clickButton();
      }
    },
    clickButton() {
      this.$emit("apartment", this.apartment);
    },
  },
  mounted() {
    this.clickButton();
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.search {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: blueviolet;
}
.title {
  font-size: 17px;
  margin-right: 5px;
}
.input {
  margin: 5px 5px 5px 0px;
  border-color: blueviolet;
}
</style>
