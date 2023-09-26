<template>
  <div class="wrapper">
    <div class="item" :style="{ color: 'brown', 'font-size': '25px' }">
      Место работы :
    </div>
    <div class="item">
      <span>Наименование предприятия : </span>{{ placeWork.businessName }}
    </div>
    <div class="item"><span>Адресс : </span>{{ placeWork.address }}</div>
    <div class="item">
      <span>Номер телефона : </span>{{ placeWork.numberPhone }}
    </div>
    <div class="item">
      <span>Должность : </span>{{ placeWork.position }}
    </div>
    <div class="item">
      <span>Дополнение : </span>{{ placeWork.addition }}
    </div>
  </div>
</template>
<script>
export default {
  name: "block-get-place-work",
  props: {
    placeWork: Object,
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.wrapper {
  margin: 15px 0px;
  padding: 25px;
  color: teal;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  border: 1px solid blueviolet;
  font-size: 20px;
}
span {
  color: blueviolet;
}
.item {
  margin: 5px 0px;
  align-self: start;
}
</style>
