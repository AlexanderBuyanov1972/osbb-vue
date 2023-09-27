<template>
  <div class="main">
    <div class="img">
      <img :src="require(`@/assets/rooms/1_1.png`)" alt="Not Found" />
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
        >{{ ownership.documentConfirmsRightOwn }}
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
  showTypeRoom,
  showNumberRooms,
} from "@/pages/_functions/functions";
export default {
  name: "block-get-ownership",
  props: {
    ownership: Object,
  },
  data() {
    return {
      showLoggia,
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
  padding: 25px;
  border: 1px solid blueviolet;
  color: teal;
  font-size: 20px;
  align-self: start;
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: space-between;
}
img {
  width: 100%;
  height: 55%;
}
.img {
  width: 45%;
}
.spans {
  width: 45%;
}
.item {
  margin-top: 10px;
}
span {
  color: blueviolet;
}
</style>
@/pages/functions/functions @/pages/_functions/functions
@/pages/bills/_functions/functions