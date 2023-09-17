<template>
  <div class="main">
    <p><span>Индекс : </span>{{ address.zipCode }}</p>
    <p><span>Страна : </span>{{ address.country }}</p>
    <p><span>Регион : </span>{{ address.region }}</p>
    <p><span>Город : </span>{{ address.city }}</p>
    <p><span>Улица : </span>{{ address.street }}</p>
    <p><span>Дом : </span>{{ address.house }}</p>
    <p><span>Дом : </span>{{ address.entrance }}</p>
    <p><span>Этаж : </span>{{ address.floor }}</p>
    <p><span>Квартира : </span>{{ address.apartment }}</p>
  </div>
</template>
<script>
export default {
  name: "block-read-address",
  props: {
    address: {
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
  border: 1px solid blueviolet;
  color: teal;
  font-size: 20px;
}
span {
  color: blueviolet;
}
</style>
