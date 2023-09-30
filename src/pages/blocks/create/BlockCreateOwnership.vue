<template>
  <div class="main">
    <line-header text="Собственность" :style="{ color: 'brown' }" />
    <div class="blocks">
      <div class="typeRoom">
        <block-error-message
          :field="ownership.typeRoom"
          messageFalse="Укажите тип помещения."
          messageTrue="Тип помещения."
          @valid="(value) => handlerValidTypeRoom(value)"
        />
        <select-edit
          :array="arrayTypeRoom"
          @select="(value) => (ownership.typeRoom = value)"
          :startName="showTypeRoom(ownership.typeRoom)"
        />
      </div>
      <div class="totalArea">
        <block-error-message
          :field="ownership.totalArea"
          messageFalse="Укажите общую площадь помещения."
          messageTrue="Общая площадь помещения, м2."
          @valid="(value) => handlerValidTotalArea(value)"
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
          @valid="(value) => handlerValidLivingArea(value)"
        />
        <input-simple
          v-model.number="ownership.livingArea"
          placeholder="Жилая площадь помещения"
        />
      </div>
      <div class="documentConfirmsRightOwn">
        <block-error-message
          :field="ownership.documentConfirmsRightOwn"
          messageFalse="Укажите документ о праве собственности."
          messageTrue="Документ о праве собственности."
          @valid="(value) => handlerValidDocumentConfirmsRightOwn(value)"
        />
        <input-simple
          v-model.trim="ownership.documentConfirmsRightOwn"
          placeholder="Документ о праве собственности."
        />
      </div>
      <div class="numberRooms">
        <block-error-message
          :field="ownership.numberRooms"
          messageFalse="Укажите кол-во комнат."
          messageTrue="Количество комнат."
          @valid="(value) => handlerValidNumberRooms(value)"
        />
        <select-edit
          :array="arrayNumberRooms"
          @select="(value) => (ownership.numberRooms = value)"
          :startName="showNumberRooms(ownership.numberRooms)"
        />
      </div>
      <div class="loggia">
        <block-error-message
          :field="ownership.loggia"
          messageFalse="Укажите есть ли балкон."
          messageTrue="Есть ли балкон."
          @valid="(value) => handlerValidLoggia(value)"
        />
        <select-edit
          :array="arrayLoggia"
          @select="(value) => (ownership.loggia = value)"
          :startName="showLoggia(ownership.loggia)"
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
        <input-simple
          v-model.trim="ownership.heatSupply"
          placeholder="Теплоснабжение"
        />
      </div>
      <div class="heatМeter">
        <block-error-message
          :field="ownership.heatМeter"
          messageFalse="Теплоснабжение"
          messageTrue="Теплоснабжение"
          @valid="(value) => handlerHeatМeter(value)"
        />
        <input-simple
          v-model.trim="ownership.heatМeter"
          placeholder="Теплоснабжение"
        />
      </div>
    </div>
  </div>
</template>
<script>
import {
  arrayTypeRoom,
  arrayLoggia,
  arrayNumberRooms,
} from "@/pages/_functions/arraysOfData";
import {
  showTypeRoom,
  showNumberRooms,
  showLoggia,
} from "@/pages/_functions/functions";
import { mapGetters } from "vuex";
export default {
  name: "block-create-ownership",
  props: {
    room: Object,
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

      arrayTypeRoom,
      arrayLoggia,
      arrayNumberRooms,
      showTypeRoom,
      showNumberRooms,
      showLoggia,
    };
  },
  methods: {
    emitOwnership() {
      this.$emit("isValidOwnership", this.isValidOwnership);
      this.$emit("ownership", this.ownership);
    },
    handlerValidTypeRoom(value) {
      this.validTypeRoom = value;
      this.emitOwnership();
    },
    handlerValidTotalArea(value) {
      this.validTotalArea = value;
      this.emitOwnership();
    },
    handlerValidLivingArea(value) {
      this.validLivingArea = value;
      this.emitOwnership();
    },
    handlerValidDocumentConfirmsRightOwn(value) {
      this.validDocumentConfirmsRightOwn = value;
      this.emitOwnership();
    },
    handlerValidNumberRooms(value) {
      this.validNumberRooms = value;
      this.emitOwnership();
    },
    handlerValidLoggia(value) {
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
    handlerHeatМeter(value) {
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
        this.validHeatMeter
      );
    },
  },
  updated() {
    this.ownership = this.room;
  },
  mounted() {
    this.ownership = this.room;
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
