<template>
  <div class="main" @mousemove="emitOwnership">
    <h2>Собственность.</h2>
    <div class="blocks">
      <div class="typeRoom">
        <block-error-message
          :field="ownershipSend.typeRoom"
          messageFalse="Укажите тип помещения."
          messageTrue="Тип помещения."
          @valid="(value) => (validTypeRoom = value)"
        />
        <select-edit
          :array="arrayTypeRoom"
          :startObject="
            ownershipSend == undefined || ownershipSend.typeRoom == undefined
              ? arrayTypeRoom[0]
              : getElementByValue(arrayTypeRoom, ownershipSend.typeRoom)
          "
          @select="(value) => (ownershipSend.typeRoom = value)"
        />
      </div>

      <div class="totalArea">
        <block-error-message
          :field="ownershipSend.totalArea"
          messageFalse="Укажите общую площадь помещения."
          messageTrue="Общая площадь помещения, м2."
          @valid="(value) => (validTotalArea = value)"
        />
        <input-simple
          v-model="ownershipSend.totalArea"
          placeholder="Общая площадь помещения"
        />
      </div>

      <div class="livingArea">
        <block-error-message
          :field="ownershipSend.livingArea"
          messageFalse="Укажите жилую площадь помещения."
          messageTrue="Жилая площадь помещения, м2."
          @valid="(value) => (validLivingArea = value)"
        />
        <input-simple
          v-model="ownershipSend.livingArea"
          placeholder="Жилая площадь помещения."
        />
      </div>

      <div class="documentConfirmsRightOwn">
        <block-error-message
          :field="ownershipSend.documentConfirmsRightOwn"
          messageFalse="Укажите документ о праве собственности."
          messageTrue="Документ о праве собственности."
          @valid="(value) => (validDocumentConfirmsRightOwn = value)"
        />
        <select-edit
          :array="arrayDocumentConfirmsRightOwn"
          :startObject="
            ownershipSend == undefined ||
            ownershipSend.documentConfirmsRightOwn == undefined
              ? arrayDocumentConfirmsRightOwn[0]
              : getElementByValue(
                  arrayDocumentConfirmsRightOwn,
                  ownershipSend.documentConfirmsRightOwn
                )
          "
          @select="(value) => (ownershipSend.documentConfirmsRightOwn = value)"
        />
      </div>

      <div class="numberRooms">
        <block-error-message
          :field="ownershipSend.numberRooms"
          messageFalse="Укажите кол-во комнат."
          messageTrue="Количество комнат."
          @valid="(value) => (validNumberRooms = value)"
        />
        <select-edit
          :array="arrayNumberRooms"
          :startObject="
            ownershipSend == undefined || ownershipSend.numberRooms == undefined
              ? arrayNumberRooms[0]
              : getElementByValue(arrayNumberRooms, ownershipSend.numberRooms)
          "
          @select="(value) => (ownershipSend.numberRooms = value)"
        />
      </div>

      <div class="loggia">
        <block-error-message
          :field="ownershipSend.loggia"
          messageFalse="Укажите есть ли балкон."
          messageTrue="Есть ли балкон."
          @valid="(value) => (validLoggia = value)"
        />
        <select-edit
          :array="arrayLoggia"
          :startObject="
            ownershipSend == undefined || ownershipSend.loggia == undefined
              ? arrayLoggia[0]
              : getElementByValue(arrayLoggia, ownershipSend.loggia)
          "
          @select="(value) => (ownershipSend.loggia = value)"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { getElementByValue } from "@/pages/functions";
import {
  arrayTypeRoom,
  arrayDocumentConfirmsRightOwn,
  arrayLoggia,
  arrayNumberRooms,
} from "@/pages/arraysOfData";
export default {
  name: "block-edit-ownership",
  props: {
    ownership: Object,
  },
  data() {
    return {
      ownershipSend: { ...this.ownership },
      getElementByValue,
      validTypeRoom: false,
      validTotalArea: false,
      validLivingArea: false,
      validDocumentConfirmsRightOwn: false,
      validNumberRooms: false,
      validLoggia: false,
      arrayTypeRoom,
      arrayDocumentConfirmsRightOwn,
      arrayLoggia,
      arrayNumberRooms,
    };
  },

  methods: {
    emitOwnership() {
      this.$emit("isValidOwnership", this.isValidOwnership);
      this.$emit("ownership", this.ownershipSend);
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
.main {
  padding-bottom: 100px;
}
h2 {
  color: blueviolet;
  margin-bottom: 10px;
  text-align: center;
}
</style>
