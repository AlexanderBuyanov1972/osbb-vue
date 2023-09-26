<template>
  <div class="main">
    <line-header text="Собственность" :style="{'color':'brown'}"/>
    <div class="blocks">
      <div class="typeRoom">
        <block-error-message
          :field="ownership.typeRoom"
          messageFalse="Укажите тип помещения."
          messageTrue="Тип помещения."
          @valid="(value) => handlerTypeRoom(value)"
        />
        <select-edit
          :array="arrayTypeRoom"
          :startName="getNameByValue(arrayTypeRoom, ownership.typeRoom)"
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
          @valid="(value) => handlerNumberRooms(value)"
        />
        <select-edit
          :array="arrayNumberRooms"
          :startName="getNameByValue(arrayNumberRooms, ownership.numberRooms)"
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
          :startName="getNameByValue(arrayLoggia, ownership.loggia)"
          @select="(value) => (ownership.loggia = value)"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { getNameByValue } from "@/pages/_functions/functions";
import {
  arrayTypeRoom,
  arrayLoggia,
  arrayNumberRooms,
} from "@/pages/_functions/arraysOfData";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "block-update-ownership",
  data() {
    return {
      ownership: {},
      getNameByValue,
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
    ...mapActions({
      fetchOwnership: "ownership/fetchOwnership",
    }),
    emitOwnership() {
      this.$emit("isValidOwnership", this.isValidOwnership);
      this.$emit("ownership", this.ownership);
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
    this.fetchOwnership(this.$route.params.id).then(
      () => (this.ownership = this.getOwnership)
    );
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>@/pages/bills/_functions/functions@/pages/bills/_functions/arraysOfData