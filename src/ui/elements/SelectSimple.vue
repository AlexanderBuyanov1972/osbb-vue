<script>
export default {
  name: "select-simple",
  data() {
    return {
      array: ["мужской", "женский"],
      selectValue: "Пол",
    };
  },
  methods: {
    select(value) {
      this.selectValue = value;
      this.$emit("select", this.selectValue);
      this.show = false;
    },
  },
  mounted() {
    this.select(this.array[0]);
  },
};
</script>
<template>
  <div :class="!show ? 'blocks' : ['blocks', 'active']">
    <div class="block_1">
      <div class="item" @click="show = !show">
        {{ selectValue }}
      </div>
    </div>
    <div class="block_2" v-if="show">
      <div class="item" v-for="one in array" :key="one" @click="select(one)">
        {{ one }}
      </div>
    </div>
  </div>
</template>
<style scoped>
.blocks {
  border: 1px solid teal;
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  position: relative;
}

.block_1 {
  margin-top: 0.2em;
  height: 2.2em;
}

.block_1:after {
  content: "";
  position: absolute;
  right: 13px;
  top: 0;
  bottom: 0;
  width: 12px;
  height: 6px;
  margin: auto;
  transform: rotate(0deg);
}

.blocks.active .block_1:after {
  transform: rotateZ(180deg);
}

.block_2 {
  border: 1px solid red;
  border-top: none;
  position: absolute;
  background-color: white;
  left: -0.1%;
  top: 100%;
  z-index: 2;
  width: 100%;
}

.item {
  color: teal;
  font-size: 1.1em;
  line-height: 1.5;
  height: 2em;
  text-indent: 1em;
}
</style>
