<template>
  <div class="main">
    <span>{{ haveRoom(ownership) }}</span>
    <span>Кол-во метров : {{ ownership.areaRoomThatIsInProperty }} м2</span>
    <span>Кол-во комнат : {{ ownership.numberRooms }}</span>
    <span>Балкон : {{ haveLoggia(ownership) }}</span>
  </div>
</template>
<script>
export default {
  props: {
    ownership: {
      Type: Object,
    },
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
  margin: 15px 5px;
  padding: 5px;
  border: 2px solid blueviolet;
  color: teal;
  font-size: 1.2em;
}
span {
  margin: 0 30px;
}
</style>

<!-- "id":0,
"typeRoom":"",
"areaRoomThatIsInProperty":0,
"documentConfirmsRightOwn":"",
"numberRooms":0,
"loggia":false,
"address":{},
"owners":[] -->
