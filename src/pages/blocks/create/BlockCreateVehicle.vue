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
          @select="(value) => (vehicle.typeVehicle = value)"
          :startName="showTypeVehicle(vehicle.typeVehicle)"
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
          @select="(value) => (vehicle.typeColor = value)"
          :startName="showTypeColor(vehicle.typeColor)"
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
          @select="(value) => (vehicle.typeManufacturer = value)"
          :startName="showTypeManufacturer(vehicle.typeManufacturer)"
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
import {
  showTypeVehicle,
  showTypeManufacturer,
  showTypeColor,
} from "@/pages/_functions/functions";
import { generateVehicle } from "@/pages/_functions/generate";
export default {
  name: "block-create-vehicle",
  props:{
    vehicleProps:Object
  },
  data() {
    return {
      vehicle: generateVehicle(),
      arrayTypeVehicle,
      arrayTypeColor,
      showTypeColor,
      showTypeVehicle,
      showTypeManufacturer,
      arrayTypeManufacturer,
      validTypeVehicle: false,
      validNumberVehicle: false,
      validYearOfIssue: false,
      validTypeColor: false,
      validTypeManufacturer: false,
    };
  },
  methods: {
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
  updated() {
    this.vehicle = this.vehicleProps;
  },
  mounted() {
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
