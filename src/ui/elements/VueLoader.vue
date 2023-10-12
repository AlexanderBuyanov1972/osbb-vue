<template>
  <dialog-window :show="isLoader">
    <span v-show="isLoader" class="loader"></span>
  </dialog-window>
 
</template>
<script>
export default {
  name: "vue-loader",
  props: {
    isLoader: Boolean,
  },
};
</script>
<style scoped>
.loader {
  width: 250px;
  height: 250px;
  border-radius: 100%;
  display: inline-block;
  position: relative;
  border: 10px solid;
  border-color: #e00909 #0fd590 transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border: 3px solid;
  border-color: transparent var(--color-base1) var(--color-base1);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  animation: rotationBack 0.5s linear infinite;
  transform-origin: center center;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotationBack {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
</style>
