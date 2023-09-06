<template>
  <div class="main">
    <div class="count">{{ count }}. </div>
    <div class="apartment">{{ haveRoom(ownership) }}</div>
    <div class="total_area">Общая площадь : {{ ownership.totalArea }} м2</div>
    <div class="living_area">Жилая площадь : {{ ownership.livingArea }} м2</div>
    <div class="number">Кол-во комнат : {{ ownership.numberRooms }}</div>
    <div class="loggia">Балкон : {{ haveLoggia(ownership) }}</div>
  </div>
</template>
<script>
export default {
  props: {
    ownership: {
      Type: Object,
    },
    count: Number,
  },
  data() {
    return {};
  },
  methods: {
    haveRoom(obj) {
      return obj.typeRoom === "APARTMENT"
        ? "Квартира № " + obj.address.apartment
        : "Нежилое помещение";
    },
    haveLoggia(obj) {
      return obj.loggia ? "есть" : "нет";
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
  margin: 15px 0px;
  padding: 5px;
  border: 2px solid blueviolet;
  color: teal;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  justify-content: start;
}
.count{
  width: 2%;
}
.apartment{
  width: 20%;
}
.total_area{
  width: 20%;
}
.living_area{
  width: 20%;
}
.number{
  width: 15%;
}
.loggia{
  width: 15%;
}
</style>
