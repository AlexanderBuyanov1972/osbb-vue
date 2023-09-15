<template>
  <div class="main">
    <div class="header">ОСББ "Свободы 51"</div>
    <div class="img">
      <img
        src="https://myshtetl.org/dnepropetrovsk/images/dneprdzrzh_0004.JPG"
        alt="Not Found"
      />
    </div>
    <button-create @click="sendJsonToServer">Json</button-create>
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
      //console.log(list);
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
  font-size: 1.2em;
}
.img {
  width: 80vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.header {
  text-align: center;
  color: teal;
  font-size: 2em;
}
</style>
@/pages/generate @/pages/functions/generate
