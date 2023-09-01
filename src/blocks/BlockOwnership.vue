<template>
  <div class="main">
    <h3>Объект недвижимости</h3>
    <p><span>Тип : </span>{{ haveRoom(ownership.typeRoom) }}</p>
    <p><span>Кол-во комнат : </span>{{ ownership.numberRooms }}</p>
    <p>
      <span>Общая площадь : </span>{{ ownership.areaRoomThatIsInProperty }} м2
    </p>
    <p>
      <span>Основание собственности : </span
      >{{ ownership.documentConfirmsRightOwn }}
    </p>
    <p><span>Наличие балкона : </span>{{ haveLoggia(ownership.loggia) }}</p>
    <block-address :address="ownership.address || {}" />
    <p></p>
  </div>
</template>
<script>
import BlockAddress from "@/blocks/BlockAddress.vue";
export default {
  components: {
    BlockAddress,
  },
  props: {
    ownership: {
      Type: Object,
    },
  },
  methods: {
    haveRoom(typeRoom) {
      return typeRoom === "APARTMENT" ? "Квартира" : "Нежилое помещение";
    },
    haveLoggia(loggia) {
      return loggia ? "есть" : "нет";
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
p,
h3 {
  margin: 0 30px;
}
span {
  color: blueviolet;
}
</style>
<!-- apartment city country floor house region street zipCode -->
