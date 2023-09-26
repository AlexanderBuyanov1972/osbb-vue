<template>
  <div class="main">
    <div class="count">{{ count }}.</div>
    <div class="type_room">
      <span v-show="flag">Тип : </span>
      {{ showTypeRoom(ownership.typeRoom) }}
    </div>
    <div class="apartment">
      <span v-show="flag">Квартира № : </span>
      {{ ownership.address.apartment }}
    </div>
    <div class="total_area">
      <span v-show="flag">Общая площадь : </span>
      {{ ownership.totalArea }}
    </div>
    <div class="living_area">
      <span v-show="flag">Жилая площадь : </span>
      {{ ownership.livingArea }}
    </div>
    <div class="number_rooms">
      <span v-show="flag">Кол-во комнат : </span>
      {{ ownership.numberRooms }}
    </div>
    <div class="entrance">
      <span v-show="flag">Подъезд : </span>
      {{ ownership.address.entrance }}
    </div>
    <div class="floor">
      <span v-show="flag">Этаж : </span>
      {{ ownership.address.floor }}
    </div>
    <div class="loggia">
      <span v-show="flag">Балкон : </span>
      {{ showLoggia(ownership.loggia) }}
    </div>
  </div>
</template>
<script>
import { showTypeRoom, showLoggia } from "@/pages/_functions/functions";
export default {
  props: {
    ownership: Object,
    flag: false,
    count: Number,
  },
  data() {
    return {
      showTypeRoom,
      showLoggia,
      flag: this.flag,
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
  margin: 5px 0px;
  padding: 5px;
  border: 1px solid blueviolet;
  color: teal;
  font-size: 17px;
  display: flex;
  align-items: center;
  justify-content: start;
}
.count {
  width: 3%;
}
.type_room {
  width: 25%;
}
.apartment {
  width: 15%;
}
.total_area,
.living_area {
  width: 20%;
}
.loggia,
.entrance,
.floor {
  width: 11%;
}
.number_rooms {
  width: 16%;
}
.danger {
  background-color: honeydew;
}
span {
  color: blueviolet;
}
</style>
@/pages/functions/functions
@/pages/_functions/functions@/pages/bills/_functions/functions