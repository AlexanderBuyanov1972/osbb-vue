<template>
  <div class="main">
    <div class="img">
      <img :src="require(`@/photos/rooms/1_1.png`)" alt="Not Found" />
    </div>
    <div class="spans">
      <div class="item">
        <span>Тип : </span>{{ showTypeRoom(ownership.typeRoom) }}
      </div>
      <div class="item">
        <span>Кол-во комнат : </span
        >{{ showNumberRooms(ownership.numberRooms) }}
      </div>
      <div class="item">
        <span>Общая площадь : </span>{{ ownership.totalArea || 0.0 }} м2
      </div>
      <div class="item">
        <span>Жилая площадь : </span>{{ ownership.livingArea || 0.0 }} м2
      </div>
      <div class="item">
        <span>Основание собственности : </span
        >{{ showDocumentConfirmsRightOwn(ownership.documentConfirmsRightOwn) }}
      </div>
      <div class="item">
        <span>Наличие балкона : </span>{{ showLoggia(ownership.loggia) }}
      </div>
    </div>
  </div>
</template>
<script>
import {
  showLoggia,
  showDocumentConfirmsRightOwn,
  showTypeRoom,
  showNumberRooms,
} from "@/pages/functions";
export default {
  name: "block-read-ownership",
  props: {
    ownership: {
      Type: Object,
    },
  },
  data() {
    return {
      showLoggia,
      showDocumentConfirmsRightOwn,
      showTypeRoom,
      showNumberRooms,
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
.main {
  margin: 15px 0px;
  padding: 10px 0px;
  border: 2px solid blueviolet;
  color: teal;
  font-size: 1.2em;
  align-self: start;
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: space-around;
}
img {
  width: 50wh;
  height: 75vh;
}
.spans {
  font-size: 1.5em;
}
.item {
  margin-top: 10px;
}
span {
  color: blueviolet;
}
</style>
