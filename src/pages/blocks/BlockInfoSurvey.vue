<template>
  <div class="main">
    <div class="date">
      <span>Дата начала опроса : </span>{{ info.dateDispatch }}
    </div>
    <div class="by_whom">
      <span>Кем инициализирован : </span>{{ info.byWhom }}
    </div>
    <div class="fullName"><span>Уважаемый </span>{{ info.fullName }}</div>
    <div class="owner">
      <span>Собственник квартиры № </span>{{ info.apartment }}
    </div>
    <div class="fullName">
      <span
        >Правлению ОСББ очень важно знать Ваше мнение по данному опросу
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "block-info-survey",
  props: {
    info: Object,
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.date,
.fullName,
.owner,
.by_whom {
  color: teal;
  font-size: 20px;
  margin: 10px 0px;
}
span{
  color: blueviolet;
  
}
</style>
