<template>
  <div class="main">
    <span>{{ getFullName(owner) }} </span>
    <span>{{ owner.phoneNumber }} </span>
  </div>
</template>
<script>
export default {
  props: {
    owner: {
      Type: Object,
    },
  },
  methods: {
    getFullName(obj) {
      return obj.lastName + " " + obj.firstName + " " + obj.secondName;
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
span {
  margin: 0 30px;
}
</style>
