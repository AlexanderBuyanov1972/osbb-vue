<template>
  <!-- { id: 1, name: "Пол", value: "" }, -->
  <div :class="!show ? 'blocks' : ['blocks', 'active']">
    <div class="block_1">
      <div class="item" @click="show = !show">
        {{ flagReset ? change(array[0]) : selectName }}
      </div>
    </div>
    <div class="block_2" v-if="show">
      <div class="item" v-for="one in array" :key="one.id" @click="select(one)">
        {{ one.name }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "select-simple",
  props: {
    array: {
      type: Array,
      default: () => [],
    },
    flagReset: Boolean,
  },

  data() {
    return {
      show: false,
      selectName: this.array[0].name,
    };
  },
  methods: {
    select(one) {
      this.change(one);
      this.show = false;
    },
    change(one) {
      this.selectName = one.name;
      this.$emit("select", one.value);
    },
  },
  mounted() {
    this.select(this.array[0]);
  },
};
</script>

<style scoped>
.blocks {
  border: 1px solid teal;
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  position: relative;
  height: 30px;
  font-size: 20px;
}

.block_1 {
  margin-top: 0.2em;
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
