<template>
  <div class="img">
    <img :src="getImage" alt="Not found" />
  </div>
</template>
<script>
export default {
  name: "image-show",
  props: {
    photo: Object,
  },
  data() {
    return {};
  },
  computed: {
    getImage() {
      try {
        if (this.owner.photo) {
          return require(`@/assets/owners/${this.owner.photo.name}.png`);
        }
        if (this.owner.photo.name) {
          return require(`@/assets/owners/${this.owner.photo.name}.png`);
        }
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
  width: 15vw;
  height: 25vh;
  padding: 10px;
}
</style>
