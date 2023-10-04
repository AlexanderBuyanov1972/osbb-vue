<template>
  <div class="main">
    <line-header text="Транспортное средство" :style="{ color: 'brown' }" />

    <div class="vehicle">
      <div class="typeVehicle">
        <block-error-message
          :field="vehicle.typeVehicle"
          messageFalse="Укажите тип транспортного средства"
          messageTrue="Тип транспортного средства"
          @valid="(value) => handlerTypeVehicle(value)"
        />
        <select-edit
          :array="arrayTypeVehicle"
          :startName="getNameByValue(arrayTypeVehicle, vehicle.typeVehicle)"
          @select="(value) => (vehicle.typeVehicle = value)"
        />
      </div>

      <div class="numberVehicle">
        <block-error-message
          :field="vehicle.numberVehicle"
          messageFalse="Укажите номер транспортного средства"
          messageTrue="Номер транспортного средства"
          @valid="(value) => handlerNumberVehicle(value)"
        />
        <input-simple
          v-model="vehicle.numberVehicle"
          placeholder="Номер транспортного средства"
        />
      </div>

      <div class="yearOfIssue">
        <block-error-message
          :field="vehicle.yearOfIssue"
          messageFalse="Укажите год выпуска"
          messageTrue="Год выпуска"
          @valid="(value) => handlerYearOfIssue(value)"
        />
        <input-simple v-model="vehicle.yearOfIssue" placeholder="Год выпуска" />
      </div>

      <div class="typeColor">
        <block-error-message
          :field="vehicle.typeColor"
          messageFalse="Укажите цвет транспортного средства"
          messageTrue="Цвет транспортного средства"
          @valid="(value) => handlerTypeColor(value)"
        />
        <select-edit
          :array="arrayTypeColor"
          :startName="getNameByValue(arrayTypeColor, vehicle.typeColor)"
          @select="(value) => (vehicle.typeColor = value)"
        />
      </div>

      <div class="typeManufacturer">
        <block-error-message
          :field="vehicle.typeManufacturer"
          messageFalse="Укажите производителя"
          messageTrue="Произодитель"
          @valid="(value) => handlerTypeManufacturer(value)"
        />
        <select-edit
          :array="arrayTypeManufacturer"
          :startName="
            getNameByValue(arrayTypeManufacturer, vehicle.typeManufacturer)
          "
          @select="(value) => (vehicle.typeManufacturer = value)"
        />
      </div>
    </div>
  </div>
</template>
<script>
import {
  arrayTypeVehicle,
  arrayTypeColor,
  arrayTypeManufacturer,
} from "@/pages/_functions/arraysOfData";
import { getNameByValue } from "@/pages/_functions/functions";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "block-update-vehicle",
  props: {
    vehicleProps: Object,
  },
  data() {
    return {
      vehicle: {},
      getNameByValue,
      arrayTypeVehicle,
      arrayTypeColor,
      arrayTypeManufacturer,
      validTypeVehicle: false,
      validNumberVehicle: false,
      validYearOfIssue: false,
      validTypeColor: false,
      validTypeManufacturer: false,
    };
  },
  methods: {
    ...mapActions({
      fetchOwner: "owner/fetchOwner",
    }),
    emitVehicle() {
      this.$emit("isValidVehicle", this.isValidVehicle);
      this.$emit("vehicle", this.vehicle);
    },
    handlerTypeVehicle(value) {
      this.validTypeVehicle = value;
      this.emitVehicle();
    },
    handlerNumberVehicle(value) {
      this.validNumberVehicle = value;
      this.emitVehicle();
    },
    handlerYearOfIssue(value) {
      this.validYearOfIssue = value;
      this.emitVehicle();
    },
    handlerTypeColor(value) {
      this.validTypeColor = value;
      this.emitVehicle();
    },
    handlerTypeManufacturer(value) {
      this.validTypeManufacturer = value;
      this.emitVehicle();
    },
  },
  computed: {
    ...mapGetters({
      getOwner: "owner/getOwner",
    }),
    isValidVehicle() {
      return (
        this.validTypeVehicle &&
        this.validNumberVehicle &&
        this.validYearOfIssue &&
        this.validTypeColor &&
        this.validTypeManufacturer
      );
    },
  },
  mounted() {
    this.vehicle = this.vehicleProps;
  },
  updated() {
    this.vehicle = this.vehicleProps;
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
