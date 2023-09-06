<template>
  <div class="main" @mousemove="emitOwnership">
    <h2>Собственность.</h2>
    <div class="blocks">
      <block-error
        :field="ownershipSend.typeRoom"
        message="Укажите тип помещения."
      />
      <select-simple
        :array="arrayTypeRoom"
        @select="(value) => changeSelectTypeRoom(value)"
        :flagReset="flagReset"
        :startValue="ownershipSend.typeRoom"
      />

      <block-error
        :field="ownershipSend.totalArea"
        message="Укажите общую площадь."
      />
      <input-simple
        v-model="ownershipSend.totalArea"
        placeholder="Общая площадь помещения"
      />

      <block-error
        :field="ownershipSend.livingArea"
        message="Укажите жилую площадь."
      />
      <input-simple
        v-model="ownershipSend.livingArea"
        placeholder="Жилая площадь помещения"
      />

      <block-error
        :field="ownershipSend.documentConfirmsRightOwn"
        message="Укажите документ о праве собственности."
      />
      <select-simple
        :array="arrayDocumentConfirmsRightOwn"
        @select="(value) => changeSelectDocumentConfirmsRightOwn(value)"
        :flagReset="flagReset"
        :startValue="ownershipSend.documentConfirmsRightOwn"
      />

      <block-error
        :field="ownershipSend.numberRooms"
        message="Укажите кол-во комнат."
      />
      <!-- <input-simple
        v-model="ownershipSend.numberRooms"
        placeholder="Кол-во комнат"
      /> -->
      <select-simple
        :array="arrayNumberRooms"
        @select="(value) => changeSelectNumberRooms(value)"
        :flagReset="flagReset"
      />

      <block-error
        :field="ownershipSend.loggia"
        message="Укажите есть ли балкон."
      />
      <select-simple
        :array="arrayLoggia"
        @select="(value) => changeSelectLoggia(value)"
        :flagReset="flagReset"
        :startValue="ownershipSend.loggia"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "block-edit-ownership",
  data() {
    return {
      ownershipSend: { ...this.ownership },
      flagReset: false,
      validOwnership: false,
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
      const send = { ...this.ownershipSend };
      send.loggia = this.getFieldLoggia(this.ownership.loggia);
      this.$emit("ownership", send);
    },
    changeSelectTypeRoom(value) {
      this.ownershipSend.typeRoom = value;
      this.flagReset = false;
    },
    changeSelectDocumentConfirmsRightOwn(value) {
      this.ownershipSend.documentConfirmsRightOwn = value;
      this.flagReset = false;
    },
    changeSelectLoggia(value) {
      this.ownershipSend.loggia = value;
      this.flagReset = false;
    },
    changeSelectNumberRooms(value) {
      this.ownershipSend.numberRooms = value;
      this.flagReset = false;
    },
    getFieldLoggia(value) {
      return value == "ЕСТЬ" ? true : false;
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
