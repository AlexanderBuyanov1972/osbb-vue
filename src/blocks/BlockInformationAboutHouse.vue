<template>
  <div class="main">
    <p>
      <span>Адресс : </span> {{ info.addressDto.city }} /
      {{ info.addressDto.street }} /
      {{ info.addressDto.house }}
    </p>
    <p><span>Кол-во помещений в доме : </span>{{ info.countRooms }}</p>
    <p><span>Кол-во квартир в доме : </span>{{ info.countApartment }}</p>
    <p>
      <span>Кол-во нежилых помещений в доме : </span
      >{{ info.countNonResidentialRoom }}
    </p>
    <p><span>Общая площадь помещений : </span>{{ info.summaAreaRooms }} м2</p>
    <p><span>Общая площадь квартир : </span>{{ info.summaAreaApartment }} м2</p>
    <p>
      <span>Общая площадь нежилых помещений : </span
      >{{ info.summaAreaNonResidentialRoom }} м2
    </p>
  </div>
</template>
<script>
export default {
  props: {
    info: {
      Type: Object,
    },
  },
  data() {
    return {};
  },
  methods: {},
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
p {
  color: red;
  font-size: 1.3em;
  margin: 10px 5px;
}
span{
  color:blueviolet;
  font-size: 1.2em;
  margin: 10px 5px;
}
</style>
