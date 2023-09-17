<template>
  <div class="main">
    <vue-loader :isLoader="this.getIsLoading" />
    <div class="header">ОСББ "Свободы 51"</div>
    <div class="img">
      <img
        src="https://myshtetl.org/dnepropetrovsk/images/dneprdzrzh_0004.JPG"
        alt="Not Found"
      />
    </div>
    <div class="">
      <button-create @click="sendJsonToServer">Json</button-create>
    </div>
  </div>
</template>
<script>
import { generateJson } from "@/pages/functions/generate";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      generateJson,
    };
  },
  methods: {
    ...mapActions({
      createJsonForDB: "ownership/createJsonForDB",
      createOwnership: "ownership/createOwnership",
    }),
    sendJsonToServer() {
      let list = this.generateJson();
      list.forEach((el) => {
        setTimeout(() => {
          this.createOwnership(el);
        }, 1000);
      });
    },
  },
  mounted() {},
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.img {
  width: 1050px;
  height: 800px;
  padding: 10px;
  align-self: center;
}
.header {
  text-align: center;
  color: teal;
  font-size: 25px;
}
</style>
