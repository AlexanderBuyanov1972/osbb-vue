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
    minusIndex() {
      if (this.currentIndex > 0) this.currentIndex -= 1;
    },
    plusIndex() {
      if (this.currentIndex < this.urls.length - 1) this.currentIndex += 1;
    },
    // itemImage(value) {
    //   if (!value) return;
    //   return require(`@/icons/${value}.png`);
    // },
  },
};
</script>
<template>
  <div class="block">
    <div
      :class="this.currentIndex > 0 ? ['button'] : ['button', 'active']"
      @click="minusIndex"
    >
      -
    </div>
    <div class="image">
      <img :src="urls[currentIndex]" alt="Не найден" />
    </div>
    <div
      :class="
        this.currentIndex < this.urls.length - 1
          ? ['button']
          : ['button', 'active']
      "
      @click="plusIndex"
    >
      +
    </div>
  </div>
</template>
<style scoped>
.block {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.button {
  min-width: 5%;
  display: flex;
  align-self: center;
  justify-content: center;
  font-size: 50px;
  font-weight: 700;
  color: blueviolet;
}
.image {
  width: 100%;
  height: 700px;
  align-self: center;
}
.active {
  color: white;
}
</style>
