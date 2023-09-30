<template>
  <div class="main">
    <line-header
      :style="{ color: 'brown' }"
      :text="`Адресс : ${info.addressDto.city}, ${info.addressDto.street}, ${info.addressDto.house}.`"
    />
    <div class="blocks">
      <div class="block1">
        <p>
          <span>Кол-во собственников в доме : </span>{{ info.countOwners }} шт.
        </p>
        <p><span>Кол-во помещений в доме : </span>{{ info.countRooms }} шт.</p>
        <p>
          <span>Кол-во квартир в доме : </span>{{ info.countApartment }} шт.
        </p>
        <p>
          <span>Кол-во нежилых помещений в доме : </span
          >{{ info.countNonResidentialRoom }} шт.
        </p>
      </div>
      <div class="block2">
        <p>
          <span>Общая площадь помещений : </span>{{ info.summaTotalArea }} м2
        </p>
        <p>
          <span>Общая площадь квартир : </span
          >{{ info.summaTotalAreaApartment }} м2
        </p>
        <p>
          <span>Общая жилая площадь квартир : </span
          >{{ info.summaLivingAreaApartment }} м2
        </p>
        <p>
          <span>Общая площадь нежилых помещений : </span
          >{{ info.summaTotalAreaNonResidentialRoom }} м2
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "block-information-about-house",
  props: {
    info: Object,
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
  margin: 15px 0px;
}
p {
  color: teal;
}
span {
  font-weight: 500;
  color: blueviolet;
}
.blocks {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.main {
  margin: 10px 0px;
  border: 1px solid brown;
  padding-left: 10px;
}
</style>
