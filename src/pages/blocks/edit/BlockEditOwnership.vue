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
          :startObject="getSelectElement(arrayTypeRoom, ownershipSend.typeRoom)"
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
            getSelectElement(
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
            getSelectElement(arrayNumberRooms, ownershipSend.numberRooms)
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
            getSelectElement(arrayLoggia, mapLoggiaValue(ownershipSend.loggia))
          "
          @select="(value) => (ownershipSend.loggia = value)"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "block-edit-ownership",
  data() {
    return {
      ownershipSend: { ...this.ownership },
      validTypeRoom: false,
      validTotalArea: false,
      validLivingArea: false,
      validDocumentConfirmsRightOwn: false,
      validNumberRooms: false,
      validLoggia: false,
    };
  },
  props: {
    arrayTypeRoom: {
      Type: Array,
      default: () => [],
    },
    arrayDocumentConfirmsRightOwn: {
      Type: Array,
      default: () => [],
    },
    arrayNumberRooms: {
      Type: Array,
      default: () => [],
    },
    arrayLoggia: {
      Type: Array,
      default: () => [],
    },
    ownership: Object,
  },
  methods: {
    emitOwnership() {
      this.$emit("isValidOwnership", this.isValidOwnership);
      this.$emit("ownership", this.ownershipSend);
    },
    getSelectElement(array, value) {
      return array.find((el) => el.value == value);
    },
    mapLoggiaValue(value) {
      return value == true ? "YES" : "NO";
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
