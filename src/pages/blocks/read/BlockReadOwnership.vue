<template>
  <div class="main">
    <p><span>Тип : </span>{{ ownership.typeRoom || "" }}</p>
    <p><span>Кол-во комнат : </span>{{ ownership.numberRooms || "" }}</p>
    <p><span>Общая площадь : </span>{{ ownership.totalArea || 0.0 }} м2</p>
    <p><span>Жилая площадь : </span>{{ ownership.livingArea || 0.0 }} м2</p>
    <p>
      <span>Основание собственности : </span
      >{{ ownership.documentConfirmsRightOwn || "" }}
    </p>
    <p><span>Наличие балкона : </span>{{ ownership.loggia || "" }}</p>
    <img :src="ownership.photo" alt="Not Found" />
  </div>
</template>
<script>
export default {
  name: "block-read-ownership",
  props: {
    ownership: {
      Type: Object,
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
  border: 2px solid blueviolet;
  color: teal;
  font-size: 1.2em;
  align-self: start;
  width: 100%;
}

span {
  color: blueviolet;
}
</style>
