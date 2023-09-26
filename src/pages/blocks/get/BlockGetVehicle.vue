<template>
  <div class="wrapper">
    <div class="item" :style="{ color: 'brown', 'font-size': '25px' }">
      Транспортное средство :
    </div>
    <div class="item">
      <span>Тип : </span
      >{{ showTypeVehicle(vehicle.typeVehicle) }}
    </div>
    <div class="item">
      <span>Регистрационный номер : </span>{{ vehicle.numberVehicle }}
    </div>
    <div class="item"><span>Год выпуска : </span>{{ vehicle.yearOfIssue }}</div>
    <div class="item">
      <span>Цвет : </span>{{ showTypeColor(vehicle.typeColor) }}
    </div>
    <div class="item">
      <span>Производитель : </span
      >{{ showTypeManufacturer(vehicle.typeManufacturer) }}
    </div>
  </div>
</template>
<script>
import {
  showTypeVehicle,
  showTypeColor,
  showTypeManufacturer,
} from "@/pages/_functions/functions";
export default {
  name: "block-get-vehicle",
  props: {
    vehicle: Object,
  },
  data() {
    return {
      showTypeVehicle,
      showTypeColor,
      showTypeManufacturer,
    };
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.wrapper {
  margin: 15px 0px;
  padding: 25px;
  color: teal;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  border: 1px solid blueviolet;
  font-size: 20px;
}
span {
  color: blueviolet;
}
.item {
  margin: 5px 0px;
  align-self: start;
}
</style>
@/pages/bills/_functions/functions