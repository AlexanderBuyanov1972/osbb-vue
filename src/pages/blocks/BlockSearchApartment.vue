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
    <button-simple :hidden="!this.checkApartment" @click="clickButton"
      >{{ nameButton }}
    </button-simple>
  </div>
</template>
<script>
export default {
  name: "block-search-apartment",
  props: {
    nameButton: String,
  },
  data() {
    return {
      apartment: "1",
    };
  },
  methods: {
    plus() {
      if (this.apartment < 84) {
        this.apartment = this.apartment * 1 + 1;
        this.clickButton();
      }
    },
    minus() {
      if (this.apartment > 1) {
        this.apartment = this.apartment * 1 - 1;
        this.clickButton();
      }
    },
    clickButton() {
      this.$emit("apartment", this.apartment);
    },
  },
  computed: {
    checkApartment() {
      return this.apartment > 0 && this.apartment < 85;
    },
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
