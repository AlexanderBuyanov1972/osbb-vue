<template>
  <div class="main">
    <div class="count">{{ count}}.</div>
    <div class="name">{{ getFullName(owner) }} </div>
    <div class="phone">{{ owner.phoneNumber }} </div>
  </div>
</template>
<script>
export default {
  name: "owner-item",
  props: {
    owner: {
      Type: Object,
    },
    count: Number,
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
  margin: 15px 0px;
  padding: 5px;
  border: 2px solid blueviolet;
  color: teal;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
span {
  margin: 0 10px;
}
.count{
  width: 2%;
}
.name{
  width: 22%;
}
.phone{
  width: 15%;
}

</style>
