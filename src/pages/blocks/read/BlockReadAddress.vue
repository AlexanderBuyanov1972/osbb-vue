<template>
  <div class="main">
    <h3>Адресс</h3>
    <p><span>Индекс : </span>{{ address.zipCode }}</p>
    <p><span>Страна : </span>{{ address.country}}</p>
    <p><span>Регион : </span>{{ address.region}}</p>
    <p><span>Город : </span>{{ address.city}}</p>
    <p><span>Улица : </span>{{ address.street}}</p>
    <p><span>Дом : </span>{{ address.house}}</p>
    <p><span>Этаж : </span>{{ address.floor}}</p>
    <p><span>Квартира : </span>{{ address.apartment}}</p>
  </div>
</template>
<script>
export default {
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
  margin: 15px 5px;
  padding: 5px;
  border: 2px solid blueviolet;
  color: teal;
  font-size: 1.2em;
}
p, h3  {
  margin: 0 30px;
}
span{
  color: blueviolet;
}
</style>
<!-- id
apartment
city
country
floor
house
region
street
zipCode -->
