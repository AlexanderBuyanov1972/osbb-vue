<template>
  <div class="main">
    <line-header text="Собственность" :style="{ color: 'brown' }" />
    <div class="blocks">
      <div class="personalAccount">
        <block-error-message
          :field="ownership.bill"
          messageFalse="Укажите лицевой счёт"
          messageTrue="Лицевой счёт"
          @valid="(value) => handlerPersonalAccount(value)"
        />
        <input-simple v-model="ownership.bill" placeholder="Лицевой счёт" />
      </div>
      <div class="typeRoom">
        <block-error-message
          :field="ownership.typeRoom"
          messageFalse="Укажите тип помещения."
          messageTrue="Тип помещения."
          @valid="(value) => handlerTypeRoom(value)"
        />
        <select-edit
          :array="arrayTypeRoom"
          :startName="showTypeRoom(ownership.typeRoom)"
          @select="(value) => (ownership.typeRoom = value)"
        />
      </div>
      <div class="totalArea">
        <block-error-message
          :field="ownership.totalArea"
          messageFalse="Укажите общую площадь помещения."
          messageTrue="Общая площадь помещения, м2."
          @valid="(value) => handlerTotalArea(value)"
        />
        <input-simple
          v-model.number="ownership.totalArea"
          placeholder="Общая площадь помещения"
        />
      </div>
      <div class="livingArea">
        <block-error-message
          :field="ownership.livingArea"
          messageFalse="Укажите жилую площадь помещения."
          messageTrue="Жилая площадь помещения, м2."
          @valid="(value) => handlerLivingArea(value)"
        />
        <input-simple
          v-model.number="ownership.livingArea"
          placeholder="Жилая площадь помещения."
        />
      </div>
      <div class="documentConfirmsRightOwn">
        <block-error-message
          :field="ownership.documentConfirmsRightOwn"
          messageFalse="Укажите документ о праве собственности."
          messageTrue="Документ о праве собственности."
          @valid="(value) => handlerDocumentConfirmsRightOwn(value)"
        />
        <text-area-simple
          :style="{ height: '60px' }"
          v-model="ownership.documentConfirmsRightOwn"
          placeholder="Документ о праве собственности."
        />
      </div>
      <div class="numberRooms">
        <block-error-message
          :field="ownership.numberRooms"
          messageFalse="Укажите кол-во комнат."
          messageTrue="Количество комнат."
          @valid="(value) => handlerNumberRooms(value)"
        />
        <select-edit
          :array="arrayNumberRooms"
          :startName="showNumberRooms(ownership.numberRooms)"
          @select="(value) => (ownership.numberRooms = value)"
        />
      </div>
      <div class="loggia">
        <block-error-message
          :field="ownership.loggia"
          messageFalse="Укажите есть ли балкон."
          messageTrue="Есть ли балкон."
          @valid="(value) => handlerLoggia(value)"
        />
        <select-edit
          :array="arrayLoggia"
          :startName="showLoggia(ownership.loggia)"
          @select="(value) => (ownership.loggia = value)"
        />
      </div>
      <div class="gasSupply">
        <block-error-message
          :field="ownership.gasSupply"
          messageFalse="Газоснабжение"
          messageTrue="Газоснабжение"
          @valid="(value) => handlerGasSupply(value)"
        />
        <input-simple
          v-model.trim="ownership.gasSupply"
          placeholder="Газоснабжение"
        />
      </div>
      <div class="gasMeter">
        <block-error-message
          :field="ownership.gasMeter"
          messageFalse="Газовый счётчик"
          messageTrue="Газовый счётчик"
          @valid="(value) => handlerGasMeter(value)"
        />
        <input-simple
          v-model.trim="ownership.gasMeter"
          placeholder="Газовый счётчик"
        />
      </div>
      <div class="waterSupply">
        <block-error-message
          :field="ownership.waterSupply"
          messageFalse="Водоснабжение"
          messageTrue="Водоснабжение"
          @valid="(value) => handlerWaterSupply(value)"
        />
        <input-simple
          v-model.trim="ownership.waterSupply"
          placeholder="Водоснабжение"
        />
      </div>
      <div class="waterMeter">
        <block-error-message
          :field="ownership.waterMeter"
          messageFalse="Водяной счётчик"
          messageTrue="Водяной счётчик"
          @valid="(value) => handlerWaterMeter(value)"
        />
        <input-simple
          v-model.trim="ownership.waterMeter"
          placeholder="Водяной счётчик"
        />
      </div>
      <div class="sewerage">
        <block-error-message
          :field="ownership.sewerage"
          messageFalse="Канализация"
          messageTrue="Канализация"
          @valid="(value) => handlerSewerage(value)"
        />
        <input-simple
          v-model.trim="ownership.sewerage"
          placeholder="Канализация"
        />
      </div>
      <div class="heatSupply">
        <block-error-message
          :field="ownership.heatSupply"
          messageFalse="Теплоснабжение"
          messageTrue="Теплоснабжение"
          @valid="(value) => handlerHeatSupply(value)"
        />
        <!-- <input-simple
          v-model.trim="ownership.heatSupply"
          placeholder="Теплоснабжение"
        /> -->
        <select-edit
          :array="arrayHeatSupply"
          :startName="showHeatSupply(ownership.heatSupply)"
          @select="(value) => (ownership.heatSupply = value)"
        />
      </div>
      <div class="heatMeter">
        <block-error-message
          :field="ownership.heatMeter"
          messageFalse="Тепловой счётчик"
          messageTrue="Тепловой счётчик"
          @valid="(value) => handlerHeatMeter(value)"
        />
        <input-simple
          v-model.trim="ownership.heatMeter"
          placeholder="Тепловой счётчик"
        />
      </div>
    </div>
  </div>
</template>
<script>
import {
  showTypeRoom,
  showNumberRooms,
  showLoggia,
  showHeatSupply,
} from "@/pages/_functions/functions";
import {
  arrayTypeRoom,
  arrayLoggia,
  arrayNumberRooms,
  arrayHeatSupply,
} from "@/pages/_functions/arraysOfData";
export default {
  name: "block-update-ownership",
  props: {
    ownershipProps: Object,
  },
  data() {
    return {
      ownership: {},
      validTypeRoom: false,
      validTotalArea: false,
      validLivingArea: false,
      validDocumentConfirmsRightOwn: false,
      validNumberRooms: false,
      validLoggia: false,
      validGasSupply: false,
      validGasMeter: false,
      validWaterSupply: false,
      validWaterMeter: false,
      validSewerage: false,
      validHeatSupply: false,
      validHeatMeter: false,
      validPersonalAccount: false,
      arrayTypeRoom,
      arrayLoggia,
      arrayNumberRooms,
      arrayHeatSupply,
      showTypeRoom,
      showNumberRooms,
      showLoggia,
      showHeatSupply,
    };
  },
  methods: {
    emitOwnership() {
      this.$emit("isValidOwnership", this.isValidOwnership);
      this.$emit("ownership", this.ownership);
    },
    handlerPersonalAccount(value) {
      this.validPersonalAccount = value;
      this.emitOwnership();
    },
    handlerTypeRoom(value) {
      this.validTypeRoom = value;
      this.emitOwnership();
    },
    handlerLivingArea(value) {
      this.validLivingArea = value;
      this.emitOwnership();
    },
    handlerTotalArea(value) {
      this.validTotalArea = value;
      this.emitOwnership();
    },
    handlerDocumentConfirmsRightOwn(value) {
      this.validDocumentConfirmsRightOwn = value;
      this.emitOwnership();
    },
    handlerNumberRooms(value) {
      this.validNumberRooms = value;
      this.emitOwnership();
    },
    handlerLoggia(value) {
      this.validLoggia = value;
      this.emitOwnership();
    },
    handlerGasSupply(value) {
      this.validGasSupply = value;
      this.emitOwnership();
    },
    handlerGasMeter(value) {
      this.validGasMeter = value;
      this.emitOwnership();
    },
    handlerWaterSupply(value) {
      this.validWaterSupply = value;
      this.emitOwnership();
    },
    handlerWaterMeter(value) {
      this.validWaterMeter = value;
      this.emitOwnership();
    },
    handlerSewerage(value) {
      this.validSewerage = value;
      this.emitOwnership();
    },
    handlerHeatSupply(value) {
      this.validHeatSupply = value;
      this.emitOwnership();
    },
    handlerHeatMeter(value) {
      this.validHeatMeter = value;
      this.emitOwnership();
    },
  },
  computed: {
    isValidOwnership() {
      return (
        this.validTypeRoom &&
        this.validTotalArea &&
        this.validLivingArea &&
        this.validDocumentConfirmsRightOwn &&
        this.validNumberRooms &&
        this.validLoggia &&
        this.validGasSupply &&
        this.validGasMeter &&
        this.validWaterSupply &&
        this.validWaterMeter &&
        this.validSewerage &&
        this.validHeatSupply &&
        this.validHeatMeter &&
        this.validPersonalAccount
      );
    },
  },
  updated() {
    this.ownership = this.ownershipProps;
  },
  mounted() {
    this.ownership = this.ownershipProps;
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
