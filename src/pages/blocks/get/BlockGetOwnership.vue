<template>
  <div class="main">
    <div class="img">
      <img :src="image" alt="Not Found" />
    </div>
    <div class="spans">
      <div class="item"><span>Лицевой счёт : </span>{{ ownership.bill }}</div>
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
      <!-- ***************************************************** -->
      <div class="item">
        <span>Газоснабжение : </span>{{ ownership.gasSupply }}
      </div>
      <div class="item">
        <span>Газовый счётчик : </span>{{ ownership.gasMeter }}
      </div>
      <div class="item">
        <span>Водоснабжение : </span>{{ ownership.waterSupply }}
      </div>
      <div class="item">
        <span>Водяной счётчик : </span>{{ ownership.waterMeter }}
      </div>
      <div class="item">
        <span>Канализация : </span>{{ ownership.sewerage }}
      </div>
      <div class="item">
        <span>Теплоснабжение : </span>{{ showHeatSupply(ownership.heatSupply) }}
      </div>
      <div class="item">
        <span>Тепловой счётчик : </span>{{ ownership.heatMeter }}
      </div>
      <div class="item">
      <span>Дополнительная информация : </span>{{ ownership.additionalInformation }}
    </div>
    </div>
  </div>
</template>
<script>
import {
  showLoggia,
  showTypeRoom,
  showNumberRooms,
  showHeatSupply,
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
      showHeatSupply,
    };
  },
  computed: {
    image() {
      try {
        return require(`@/assets/rooms/${this.ownership.address.apartment}.png`);
      } catch (error) {
        return require(`@/assets/rooms/1_1.png`);
      }
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
