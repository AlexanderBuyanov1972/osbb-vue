<template>
  <div class="img">
    <img :src="getImage" alt="Not found" />
  </div>
</template>
<script>
export default {
  name: "image-show",
  props: {
    photoName: String,
  },
  data() {
    return {};
  },
  computed: {
    getImage() {
      console.log(this.photoName)
      try {
        return require(`@/assets/owners/${this.photoName}.png`);
      } catch (error) {
        return require(`@/assets/owners/avatar.png`);
      }
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
img {
  width: 17.5vw;
  height: 35vh;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
