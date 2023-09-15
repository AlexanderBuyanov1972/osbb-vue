<template>
  <div class="main">
    <div class="count">{{ count }}</div>
    <div class="type_room">
      {{ showTypeRoom(ownership.typeRoom) }}
    </div>
    <div class="apartment">{{ ownership.address.apartment }}</div>
    <div class="item">{{ ownership.totalArea }}</div>
    <div class="item">{{ ownership.livingArea }}</div>
    <div class="item">{{ ownership.numberRooms }}</div>
    <div class="item">{{ ownership.address.entrance }}</div>
    <div class="item">{{ ownership.address.floor }}</div>
    <div class="item">{{ showLoggia(ownership.loggia) }}</div>
  </div>
</template>
<script>
import { showTypeRoom,showLoggia } from "@/pages/functions";
export default {
  props: {
    ownership: {
      Type: Object,
    },
    count: Number,
  },
  data() {
    return {
      showTypeRoom,
      showLoggia,
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
  padding: 5px;
  border: 2px solid blueviolet;
  color: teal;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  justify-content: start;
}
.count {
  width: 3%;
}
.type_room {
  width: 20%;
}
.apartment {
  width: 15%;
}
.item {
  width: 16%;
}
.danger {
  background-color: honeydew;
}
</style>
