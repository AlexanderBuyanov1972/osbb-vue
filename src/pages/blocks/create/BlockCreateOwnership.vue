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
          :startName="ownership.typeRoom"
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
        <select-simple
          :array="arrayNumberRooms"
          @select="(value) => (ownership.numberRooms = value)"
          :startName="ownership.numberRooms"
        />
      </div>

      <div class="loggia">
        <block-error-message
          :field="ownership.loggia"
          messageFalse="Укажите есть ли балкон."
          messageTrue="Есть ли балкон."
          @valid="(value) => handlerValidLoggia(value)"
        />
        <select-simple
          :array="arrayLoggia"
          @select="(value) => (ownership.loggia = value)"
          :startName="ownership.loggia"
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
export default {
  name: "block-create-ownership",
  data() {
    return {
      ownership: {},
      validTypeRoom: false,
      validTotalArea: false,
      validLivingArea: false,
      validDocumentConfirmsRightOwn: false,
      validNumberRooms: false,
      validLoggia: false,

      arrayTypeRoom,
      arrayLoggia,
      arrayNumberRooms,
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
  },
  computed: {
    isValidOwnership() {
      return (
        this.validTypeRoom &&
        this.validTotalArea &&
        this.validLivingArea &&
        this.validDocumentConfirmsRightOwn &&
        this.validNumberRooms &&
        this.validLoggia
      );
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
</style>
