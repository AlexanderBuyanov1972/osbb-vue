<template>
  <div :class="!show ? 'blocks' : ['blocks', 'active']">
    <div class="block_1">
      <div class="item" @click="show = !show">
        {{ name }}
      </div>
    </div>
    <div class="block_2" v-if="show">
      <div class="item" v-for="one in titles" :key="one" @click="select(one)">
        {{ one }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "select-title",
  props: {
    titles: {
      Type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      show: false,
      name: "",
    };
  },
  methods: {
    select(str) {
      this.name = str;
      this.$emit("select", this.name);
      this.show = false;
    },
  },

  mounted() {
      this.name = this.titles[0];
      this.$emit("select", this.name);
  },
};
</script>

<style scoped>
.blocks {
  border: 1px solid teal;
  background-color: white;
  width: 500px;
  position: relative;
  height: 30px;
}

.block_1 {
  height: 30px;
}

.block_1:after {
  content: "";
  position: absolute;
  right: 13px;
  top: 0;
  bottom: 0;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAGCAQAAAC/O6xzAAAAW0lEQVQY02MwDjTuNWZAgmzGa401GYwFjC8aN8EFmY3XA4WZQUxR4xvGpVDBJcbbgOoZIGpkjO8YZxkzGs803m/MBRKBaVY2fmS8w/iEMR+Ej7BK23ivsSCMBwBp7Rq8CKnEQgAAAABJRU5ErkJggg==);
  width: 11px;
  height: 6px;
  margin: auto;
  transform: rotate(0deg);
}

.blocks.active .block_1:after {
  transform: rotateZ(180deg);
}

.block_2 {
  border: 1px solid teal;
  border-top: none;
  position: absolute;
  background-color: white;
  left: -0.25%;
  top: 100%;
  z-index: 2;
  width: 100%;
}

.item {
  color: teal;
  font-size: 17px;
  line-height: 1.5;
  height: 30px;
  text-indent: 13px;
}
</style>
