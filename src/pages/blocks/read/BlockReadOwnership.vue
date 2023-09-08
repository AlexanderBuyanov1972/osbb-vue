<template>
  <div class="main">
    <div class="img">
      <img :src="room1" alt="Not Found" />
    </div>
    <div class="info">
      <p><span>Тип : </span>{{ haveRoom(ownership.typeRoom) }}</p>
      <p><span>Кол-во комнат : </span>{{ ownership.numberRooms }}</p>
      <p>
        <span>Общая площадь : </span>{{ ownership.totalArea }} м2
      </p>
      <p>
        <span>Жилая площадь : </span>{{ ownership.livingArea }} м2
      </p>
      <p>
        <span>Основание собственности : </span
        >{{ haveDocumentConfirmsRightOwn(ownership.documentConfirmsRightOwn) }}
      </p>
      <p><span>Наличие балкона : </span>{{ haveLoggia(ownership.loggia) }}</p>
    </div>
  </div>
</template>
<script>
import { arrayDocumentConfirmsRightOwn } from "@/pages/arraysOfData";
import room1 from "@/photos/rooms/1_1.png";
export default {
  props: {
    ownership: {
      Type: Object,
    },
  },
  data() {
    return {
      arrayDocumentConfirmsRightOwn,
      room1,
    };
  },
  methods: {
    haveRoom(typeRoom) {
      return typeRoom === "APARTMENT" ? "Квартира" : "Нежилое помещение";
    },
    haveLoggia(loggia) {
      return loggia ? "есть" : "нет";
    },
    haveDocumentConfirmsRightOwn(data) {
      return this.arrayDocumentConfirmsRightOwn.filter(
        (el) => el.value === data
      )[0].name;
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
  justify-content: space-around;
}
img {
  width: 50vh;
  height: 35vw;
}
.info {
  align-self: start;
  width: 60%;
  color: blueviolet;
  font-size: 1.2em;
}
.img {
  width: 40%;
}
span {
  color: teal;
}
p{
  margin: 10px;
}
</style>
