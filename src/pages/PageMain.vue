<template>
  <div class="main">
    <div class="header">ОСББ "Свободы 51"</div>
    <div class="img">
      <img
        src="https://myshtetl.org/dnepropetrovsk/images/dneprdzrzh_0004.JPG"
        alt="Not Found"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
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
.main {
  color: red;
  font-size: 1.2em;
}
.img {
  width: 80vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.header{
  text-align: center;
  color: teal;
  font-size: 2em;
}
</style>
