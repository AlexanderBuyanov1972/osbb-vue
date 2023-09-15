<template>
  <div class="main" @mousemove="emitOwnership">
    <line-header-block text="Собственность" />
    <div class="blocks">
      <div class="typeRoom">
        <block-error-message
          :field="ownership.typeRoom"
          messageFalse="Укажите тип помещения."
          messageTrue="Тип помещения."
          @valid="(value) => (validTypeRoom = value)"
        />
        <select-simple
          :array="arrayTypeRoom"
          @select="(value) => changeSelectTypeRoom(value)"
          :flagReset="flagReset"
        />
      </div>

      <div class="totalArea">
        <block-error-message
          :field="ownership.totalArea"
          messageFalse="Укажите общую площадь помещения."
          messageTrue="Общая площадь помещения, м2."
          @valid="(value) => (validTotalArea = value)"
        />
        <input-simple
          v-model="ownership.totalArea"
          placeholder="Общая площадь помещения"
        />
      </div>

      <div class="livingArea">
        <block-error-message
          :field="ownership.livingArea"
          messageFalse="Укажите жилую площадь помещения."
          messageTrue="Жилая площадь помещения, м2."
          @valid="(value) => (validLivingArea = value)"
        />
        <input-simple
          v-model="ownership.livingArea"
          placeholder="Жилая площадь помещения"
        />
      </div>

      <div class="documentConfirmsRightOwn">
        <block-error-message
          :field="ownership.documentConfirmsRightOwn"
          messageFalse="Укажите документ о праве собственности."
          messageTrue="Документ о праве собственности."
          @valid="(value) => (validDocumentConfirmsRightOwn = value)"
        />
        <input-simple
          v-model="ownership.documentConfirmsRightOwn"
          placeholder="Документ о праве собственности."
        />
      </div>

      <div class="numberRooms">
        <block-error-message
          :field="ownership.numberRooms"
          messageFalse="Укажите кол-во комнат."
          messageTrue="Количество комнат."
          @valid="(value) => (validNumberRooms = value)"
        />
        <select-simple
          :array="arrayNumberRooms"
          @select="(value) => changeSelectNumberRooms(value)"
          :flagReset="flagReset"
        />
      </div>

      <div class="loggia">
        <block-error-message
          :field="ownership.loggia"
          messageFalse="Укажите есть ли балкон."
          messageTrue="Есть ли балкон."
          @valid="(value) => (validLoggia = value)"
        />
        <select-simple
          :array="arrayLoggia"
          @select="(value) => changeSelectLoggia(value)"
          :flagReset="flagReset"
        />
      </div>
    </div>
    <button-reset @click="reset" :hidden="!isValidOwnership"
      >Очистить</button-reset
    >
  </div>
</template>
<script>
import {
  arrayTypeRoom,
  arrayLoggia,
  arrayNumberRooms,
} from "@/pages/arraysOfData";
export default {
  name: "block-create-ownership",
  data() {
    return {
      ownership: {},
      flagReset: false,
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
    changeSelectTypeRoom(value) {
      this.ownership.typeRoom = value;
      this.flagReset = false;
    },
    changeSelectLoggia(value) {
      this.ownership.loggia = value;
      this.flagReset = false;
    },
    changeSelectNumberRooms(value) {
      this.ownership.numberRooms = value;
      this.flagReset = false;
    },
    reset() {
      this.ownership.typeRoom = "";
      this.ownership.totalArea = "";
      this.ownership.livingArea = "";
      this.ownership.documentConfirmsRightOwn = "";
      this.ownership.numberRooms = "";
      this.ownership.loggia = false;
      this.flagReset = true;
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
