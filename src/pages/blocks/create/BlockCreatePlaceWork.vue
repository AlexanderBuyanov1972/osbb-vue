<template>
  <div class="main">
    <line-header text="Место работы" :style="{ color: 'brown' }" />
    <div class="placeWork">
      <div class="businessName">
        <block-error-message
          :field="placeWork.businessName"
          messageFalse="Укажите место работы"
          messageTrue="Место работы"
          @valid="(value) => handlerBusinessName(value)"
        />
        <input-simple
          v-model.trim="placeWork.businessName"
          placeholder="Место работы"
        />
      </div>

      <div class="address">
        <block-error-message
          :field="placeWork.address"
          messageFalse="Укажите адресс работы"
          messageTrue="Адресс работы"
          @valid="(value) => handlerValidAddress(value)"
        />
        <input-simple
          v-model.trim="placeWork.address"
          placeholder="Адресс работы"
        />
      </div>

      <div class="numberPhone">
        <block-error-message
          :field="placeWork.numberPhone"
          messageFalse="Укажите номер телефона +38(0XX)XXXXXXX"
          messageTrue="Номер телефона"
          @valid="(value) => handlerNumberPhone(value)"
        />
        <input-simple
          v-model.trim="placeWork.numberPhone"
          placeholder="Номер телефона"
        />
      </div>

      <div class="position">
        <block-error-message
          :field="placeWork.position"
          messageFalse="Укажите должность"
          messageTrue="Должность"
          @valid="(value) => handlerPosition(value)"
        />
        <input-simple
          v-model.trim="placeWork.position"
          placeholder="Должность"
        />
      </div>

      <div class="addition">
        <block-error-message
          :field="placeWork.addition"
          messageFalse="Укажите дополнения"
          messageTrue="Дополнения"
          @valid="(value) => handlerAddition(value)"
        />
        <input-simple
          v-model.trim="placeWork.addition"
          placeholder="Дополнения"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { generatePlaceWork } from "@/pages/_functions/generate";
export default {
  name: "block-create-place-work",
  props:{
    client:Object
  },
  data() {
    return {
      placeWork: generatePlaceWork(),
      validBusinessName: false,
      validAddress: false,
      validNumberPhone: false,
      validPosition: false,
      validAddition: false,
    };
  },
  methods: {
    emitPlaceWork() {
      this.$emit("isValidPlaceWork", this.isValidPlaceWork);
      this.$emit("placeWork", this.placeWork);
    },
    handlerBusinessName(value) {
      this.validBusinessName = value;
      this.emitPlaceWork();
    },
    handlerValidAddress(value) {
      this.validAddress = value;
      this.emitPlaceWork();
    },
    handlerNumberPhone(value) {
      this.validNumberPhone = value;
      this.emitPlaceWork();
    },
    handlerPosition(value) {
      this.validPosition = value;
      this.emitPlaceWork();
    },
    handlerAddition(value) {
      this.validAddition = value;
      this.emitPlaceWork();
    },
  },
  computed: {
    isValidPlaceWork() {
      return (
        this.validBusinessName &&
        this.validAddress &&
        this.validNumberPhone &&
        this.validPosition &&
        this.validAddition
      );
    },
  },
  updated() {
    this.placeWork = this.client.placeWork;
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
