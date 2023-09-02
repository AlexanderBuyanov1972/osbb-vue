<template>
  <div class="main" :on-mouseout="emitOwnership">
    <h2>Создать собственность.</h2>
    <div class="ownership">
      <select-simple
        :array="arrayTypeRoom"
        @select="(value) => (ownership.typeRoom = value)"
      />
      <input-simple
        v-model="ownership.areaRoomThatIsInProperty"
        placeholder="Площадь помещения"
      />
      <select-simple
        :array="arrayDocumentConfirmsRightOwn"
        @select="(value) => (ownership.documentConfirmsRightOwn = value)"
      />
      <input-simple
        v-model="ownership.numberRooms"
        placeholder="Кол-во комнат"
      />
      <input-simple v-model="ownership.loggia" placeholder="Балкон" />
    </div>
  </div>
</template>
<script>
import { arrayDocumentConfirmsRightOwn } from "@/pages/arraysOfData";
import { arrayTypeRoom } from "@/pages/arraysOfData";
export default {
  data() {
    return {
      ownership: {
        typeRoom: null,
        areaRoomThatIsInProperty: null,
        documentConfirmsRightOwn: null,
        numberRooms: null,
        loggia: null,
        address: {},
      },
      arrayDocumentConfirmsRightOwn,
      arrayTypeRoom,
    };
  },
  methods: {
    emitOwnership() {
      this.$emit("ownership", ownership);
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
}
</style>
