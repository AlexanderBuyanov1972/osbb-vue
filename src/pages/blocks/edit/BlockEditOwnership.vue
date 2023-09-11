<template>
  <div class="main" @mousemove="emitOwnership">
    <h2>Собственность.</h2>
    <div class="blocks">
      <div class="typeRoom">
        <block-error-message
          :field="ownership.typeRoom"
          messageFalse="Укажите тип помещения."
          messageTrue="Тип помещения."
          @valid="(value) => (validTypeRoom = value)"
        />
        <select-edit
          :array="arrayTypeRoom"
          :startObject="
            ownership == undefined || ownership.typeRoom == undefined
              ? arrayTypeRoom[0]
              : getElementByValue(arrayTypeRoom, ownership.typeRoom)
          "
          @select="(value) => (ownership.typeRoom = value)"
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
          placeholder="Жилая площадь помещения."
        />
      </div>

      <div class="documentConfirmsRightOwn">
        <block-error-message
          :field="ownership.documentConfirmsRightOwn"
          messageFalse="Укажите документ о праве собственности."
          messageTrue="Документ о праве собственности."
          @valid="(value) => (validDocumentConfirmsRightOwn = value)"
        />
        <select-edit
          :array="arrayDocumentConfirmsRightOwn"
          :startObject="
            ownership == undefined ||
            ownership.documentConfirmsRightOwn == undefined
              ? arrayDocumentConfirmsRightOwn[0]
              : getElementByValue(
                  arrayDocumentConfirmsRightOwn,
                  ownership.documentConfirmsRightOwn
                )
          "
          @select="(value) => (ownership.documentConfirmsRightOwn = value)"
        />
      </div>

      <div class="numberRooms">
        <block-error-message
          :field="ownership.numberRooms"
          messageFalse="Укажите кол-во комнат."
          messageTrue="Количество комнат."
          @valid="(value) => (validNumberRooms = value)"
        />
        <select-edit
          :array="arrayNumberRooms"
          :startObject="
            ownership == undefined || ownership.numberRooms == undefined
              ? arrayNumberRooms[0]
              : getElementByValue(arrayNumberRooms, ownership.numberRooms)
          "
          @select="(value) => (ownership.numberRooms = value)"
        />
      </div>

      <div class="loggia">
        <block-error-message
          :field="ownership.loggia"
          messageFalse="Укажите есть ли балкон."
          messageTrue="Есть ли балкон."
          @valid="(value) => (validLoggia = value)"
        />
        <select-edit
          :array="arrayLoggia"
          :startObject="
            ownership == undefined || ownership.loggia == undefined
              ? arrayLoggia[0]
              : getElementByValue(arrayLoggia, ownership.loggia)
          "
          @select="(value) => (ownership.loggia = value)"
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
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "block-edit-ownership",
  data() {
    return {
      ownership: {},
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
    ...mapGetters({
      getOwnership: "ownership/getOwnership",
    }),
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
  mounted() {
    this.ownership = this.getOwnership;
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
