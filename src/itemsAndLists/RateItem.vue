<template>
  <div class="main">
    <span class="id">{{ count }}</span>
    <span class="date">{{ body.date }}</span>
    <span class="value">{{ body.value }} грн/кв2</span>
    <button class="update" @click="$emit('edit', body.id)">Обновить</button>
    <button class="delete" @click="$emit('remove', body.id)">Удалить</button>
  </div>
</template>
<script>
export default {
  name: "rate-item",
  props: {
    body: Object,
    count: Number,
  },
  methods: {},
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.id {
  color: blueviolet;
  width: 3%;
  padding-left: 10px;
}
.date {
  color: teal;
  width: 25%;
}
.value {
  color: red;
  width: 25%;
}

.id,
.date,
.value {
  font-size: 25px;
  margin-right: 25px;
}
.main {
  margin: 10px 0 10px 10px;
  padding: 10px 0 10px 0px;
  border: 1px solid blue;
  border-radius: 20px;
  display: flex;
  align-items: center;
}
.update,
.delete {
  margin: 5px 10px 5px 10px;
  font-size: 20px;
  color: brown;
  width: 25%;
}

.update {
  color: teal;
}
.delete {
  color: red;
}
</style>
