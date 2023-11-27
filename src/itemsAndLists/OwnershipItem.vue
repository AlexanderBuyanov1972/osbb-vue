<template>
  :style="{'background-color':''}:{}"
  <div class="main">
    <div class="count">{{ count }}.</div>
    <div class="type_room">
      <span v-show="flag">Тип : </span>
      {{ showTypeRoom(ownership.typeRoom) }}
    </div>
    <div class="apartment">
      <span v-show="flag">Квартира № : </span>
      {{ address.apartment }}
    </div>
    <div class="bill">
      <span v-show="flag">Лицевой счёт : </span>
      {{ ownership.bill }}
    </div>

    <div class="total_area">
      <span v-show="flag">Общая площадь : </span>
      {{ ownership.totalArea }}
    </div>

    <div class="heatSupply">
      <span v-show="flag">Кол-во комнат : </span>
      {{ showHeatSupply(ownership.heatSupply) }}
    </div>
    <!-- <div class="entrance">
      <span v-show="flag">Подъезд : </span>
      {{ address.entrance }}
    </div>
    <div class="floor">
      <span v-show="flag">Этаж : </span>
      {{ address.floor }}
    </div> -->
    <div class="loggia">
      <span v-show="flag">Балкон : </span>
      {{ showLoggia(ownership.loggia) }}
    </div>
  </div>
</template>
<script>
import {
  showTypeRoom,
  showLoggia,
  showHeatSupply,
} from "@/pages/_functions/functions";
export default {
  name: "ownership-item",
  props: {
    ownership: Object,
    count: Number,
    flag: Boolean,
  },
  data() {
    return {
      showTypeRoom,
      showLoggia,
      showHeatSupply,
      address: {},
    };
  },
  mounted() {
    this.address = this.ownership.address;
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.main:hover {
  background: rgb(238, 234, 195);
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
  background-color: #e7f7f7;
}
.entrance {
  background-color: #f2f7f7;
}
.count {
  width: 4%;
}
.type_room {
  width: 16%;
}
.apartment {
  width: 16%;
}
.bill {
  width: 16%;
}
.total_area {
  width: 16%;
}
.loggia {
  width: 10%;
}
.heatSupply {
  width: 22%;
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
