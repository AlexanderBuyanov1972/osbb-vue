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
          v-model="placeWork.businessName"
          placeholder="Место работы"
        />
      </div>

      <div class="address">
        <block-error-message
          :field="placeWork.address"
          messageFalse="Укажите адресс работы"
          messageTrue="Адресс работы"
          @valid="(value) => handlerAddress(value)"
        />
        <input-simple v-model="placeWork.address" placeholder="Адресс работы" />
      </div>

      <div class="numberPhone">
        <block-error-message
          :field="placeWork.numberPhone"
          messageFalse="Укажите номер телефона +38(0XX)XXXXXXX"
          messageTrue="Номер телефона"
          @valid="(value) => handlerNumberPhone(value)"
        />
        <input-simple
          v-model="placeWork.numberPhone"
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
        <input-simple v-model="placeWork.position" placeholder="Должность" />
      </div>

      <div class="addition">
        <block-error-message
          :field="placeWork.addition"
          messageFalse="Укажите дополнения"
          messageTrue="Дополнения"
          @valid="(value) => handlerAddition(value)"
        />
        <input-simple v-model="placeWork.addition" placeholder="Дополнения" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "block-update-place-work",
  props: {
    placeWorkProps: Object,
  },
  data() {
    return {
      placeWork: {},
      validBusinessName: false,
      validAddress: false,
      validNumberPhone: false,
      validPosition: false,
      validAddition: false,
    };
  },
  methods: {
    ...mapActions({
      fetchOwner: "owner/fetchOwner",
    }),

    emitPlaceWork() {
      this.$emit("isValidPlaceWork", this.isValidPlaceWork);
      this.$emit("placeWork", this.placeWork);
    },
    handlerBusinessName(value) {
      this.validBusinessName = value;
      this.emitPlaceWork();
    },
    handlerAddress(value) {
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
    ...mapGetters({
      getOwner: "owner/getOwner",
    }),
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
  mounted() {
    this.placeWork = this.placeWorkProps;
  },
  updated() {
    this.placeWork = this.placeWorkProps;
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
