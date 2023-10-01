<template>
  <div class="main">
    <div class="count">{{ count }}</div>
    <div class="theme">{{ questionnaire.title }}</div>
    <div class="date_dispatch">{{ questionnaire.dateDispatch }}</div>
    <div class="date_receiving">{{ questionnaire.dateReceiving }}</div>
    <div class="apartment">{{ questionnaire.apartment }}</div>
    <div class="fio">{{ questionnaire.fullName }}</div>
    <div class="by_whom">{{ questionnaire.byWhom }}</div>
  </div>
</template>
<script>
export default {
  name: "questionnaire-item",
  props: {
    questionnaire: Object,
    count: Number,
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
  justify-content: flex-start;
}
.count {
  width: 3%;
}
.theme {
  width: 40%;
}
.date_dispatch,
.date_receiving {
  width: 15%;
}
.apartment {
  width: 10%;
}
.fio,
.by_whom {
  width: 20%;
}
</style>
