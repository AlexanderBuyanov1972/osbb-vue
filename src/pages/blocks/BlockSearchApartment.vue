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
      >{{ nameButton }}
    </button-simple>
    <dialog-window :show="showModal">
      <modal-select-bill-ownership
        message="По данному номеру помещения числится несколько лицевых счетов. 
        Выберите подходящий для вашего запроса."
        :array="mapIdAndBill[this.apartment]"
        @close="showModal = false"
        @select="selectId"
      ></modal-select-bill-ownership>
    </dialog-window>
  </div>
</template>
<script>
import { checkApartment } from "@/pages/_functions/functions";
import { mapActions, mapGetters, mapMutations } from "vuex";
import store from "@/store/index";
export default {
  name: "block-search-apartment",
  props: {
    nameButton: String,
  },
  data() {
    return {
      apartment: "1",
      checkApartment,
      mapIdAndBill: {},
      showModal: false,
    };
  },
  methods: {
    ...mapActions({
      fetchMapApartmentListIdAndBill:
        "ownership/fetchMapApartmentListIdAndBill",
    }),
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
      if (this.mapIdAndBill[this.apartment] == undefined) {
        store.state.message.messages = [`Информация по квартире № ${this.apartment} отсутствует`];
        return;
      }
      if (this.mapIdAndBill[this.apartment].length == 1) {
        this.$emit("selectId", this.mapIdAndBill[this.apartment][0].id);
      }
      if (this.mapIdAndBill[this.apartment].length > 1) {
        this.showModal = true;
      }
    },
    selectId(id) {
      this.showModal = false;
      this.$emit("selectId", id);
    },
  },
  mounted() {
    this.fetchMapApartmentListIdAndBill().then(() => {
      this.mapIdAndBill = this.getMapIdAndBill;
    });
  },
  computed: {
    ...mapGetters({
      getMapIdAndBill: "ownership/getMapIdAndBill",
    }),
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
