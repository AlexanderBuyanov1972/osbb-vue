<script>
export default {
  name: "photo-carousel",
  props: {
    urls: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    next() {
      const length = this.urls.length;
      this.currentIndex == length - 1
        ? (this.currentIndex = 0)
        : this.currentIndex++;
    },
  },
  computed: {
    itemImage() {
      return require(`@/assets/Svobody51/${this.urls[this.currentIndex]}.jpg`);
    },
  },
};
</script>
<template>
  <div class="image" @click="next">
    <img :src="itemImage" alt="Не найден" />
  </div>
</template>
<style scoped>
.image {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 800px;
  align-self: center;
}
.active {
  color: white;
}
</style>
