<template>
  <div class="items">
    <div class="item">
      <input
        :class="show1 ? ['input', 'input_checked'] : ['input']"
        type="radio"
        id="1"
        value="За"
        @click="emitValue1"
      />
      <label for="1">За</label>
    </div>

    <div class="item">
      <input
        :class="show2 ? ['input', 'input_checked'] : ['input']"
        type="radio"
        id="2"
        value="Против"
        @click="emitValue2"
      />
      <label for="2">Против</label>
    </div>
    <div class="item">
      <input
        :class="show3 ? ['input', 'input_checked'] : ['input']"
        type="radio"
        id="3"
        value="Воздержался"
        @click="emitValue3"
      />
      <label for="3">Воздержался</label>
    </div>
    <label class="select"
      >Выбрано: <span>{{ picked }}</span></label
    >
  </div>
</template>
<script>
import { arrayAnswer } from "@/pages/_functions/arraysOfData";
import { getValueByName } from "@/pages/_functions/functions";
export default {
  name: "line-radio",
  data() {
    return {
      picked: "",
      show1: false,
      show2: false,
      show3: false,
      arrayAnswer,
      getValueByName,
    };
  },
  methods: {
    emitValue1() {
      this.show1 = true;
      this.show2 = false;
      this.show3 = false;
      this.picked = "За";
      this.$emit("select", this.getValueByName(this.arrayAnswer, this.picked));
    },
    emitValue2() {
      this.show1 = false;
      this.show2 = true;
      this.show3 = false;
      this.picked = "Против";
      this.$emit("select", this.getValueByName(this.arrayAnswer, this.picked));
    },
    emitValue3() {
      this.show1 = false;
      this.show2 = false;
      this.show3 = true;
      this.picked = "Воздержался";
      this.$emit("select", this.getValueByName(this.arrayAnswer, this.picked));
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
.items {
  display: flex;
  align-items: center;
  justify-content: start;
}
.item {
  margin: 5px 15px;
}
label {
  font-size: 15px;
  color: brown;
}
span {
  color: red;
  margin-left: 20px;
}
.select {
  color: blueviolet;
  font-size: 20px;
  margin: 5px 10px 5px 25px;
}

.input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  border-radius: 50%;
  width: 15px;
  height: 15px;

  border: 1px solid #999;
  transition: 0.2s all linear;
  outline: none;
  margin-right: 5px;

  position: relative;
  top: 4px;
}
.input_checked {
  border: 3px solid blueviolet;
}
</style>
@/pages/_functions/arraysOfData@/pages/_functions/functions