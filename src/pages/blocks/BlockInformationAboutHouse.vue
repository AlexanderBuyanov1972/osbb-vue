<template>
  <div class="main">
    <p>
      <span>Адресс : </span> {{ info.addressDto.city }},
      {{ info.addressDto.street }} №
      {{ info.addressDto.house }}
    </p>
    <p><span>Кол-во помещений в доме : </span>{{ info.countRooms }} шт.</p>
    <p><span>Кол-во квартир в доме : </span>{{ info.countApartment }} шт.</p>
    <p>
      <span>Кол-во нежилых помещений в доме : </span
      >{{ info.countNonResidentialRoom }} шт.
    </p>
    <p><span>Общая площадь помещений : </span>{{ info.summaAreaRooms }} м2</p>
    <p><span>Общая площадь квартир : </span>{{ info.summaAreaApartment }} м2</p>
    <p><span>Общая жилая площадь квартир : </span>{{ info.summaAreaLivingApartment }} м2</p>
    <p>
      <span>Общая площадь нежилых помещений : </span
      >{{ info.summaAreaNonResidentialRoom }} м2
    </p>
  </div>
</template>
<script>
export default {
  name:"block-information-about-house",
  props: {
    info: {
      Type: Object,
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

p,
span {
  font-size: 20px;
  margin: 10px 0px;
}
p {
  color: brown;
}
span {
  color: blueviolet;
}
.main {
  margin: 10px 0px;
  border: 1px solid blueviolet;
  padding-left: 10px;
}
</style>
