<template>
  <div class="items">
    <div class="item">
      <input
        :class="show1 ? ['input', 'input_checked'] : ['input']"
        type="radio"
        id="1"
        value="За"
        @click="() => (picked = emitValue1('За'))"
      />
      <label for="1">За</label>
    </div>

    <div class="item">
      <input
        :class="show2 ? ['input', 'input_checked'] : ['input']"
        type="radio"
        id="2"
        value="Против"
        @click="() => (picked = emitValue2('Против'))"
      />
      <label for="2">Против</label>
    </div>
    <div class="item">
      <input
        :class="show3 ? ['input', 'input_checked'] : ['input']"
        type="radio"
        id="3"
        value="Воздержался"
        @click="() => (picked = emitValue3('Воздержался'))"
      />
      <label for="3">Воздержался</label>
    </div>
    <label class="select"
      >Выбрано: <span>{{ picked }}</span></label
    >
  </div>
</template>
<script>
export default {
  name: "line-radio",
  data() {
    return {
      picked: "",
      show1: false,
      show2: false,
      show3: false,
    };
  },
  methods: {
    emitValue1(value) {
      this.show1 = true;
      this.show2 = false;
      this.show3 = false;
      this.picked = value;
      this.$emit("select", this.picked);
    },
    emitValue2(value) {
      this.show1 = false;
      this.show2 = true;
      this.show3 = false;
      this.picked = value;
      this.$emit("select", this.picked);
    },
    emitValue3(value) {
      this.show1 = false;
      this.show2 = false;
      this.show3 = true;
      this.picked = value;
      this.$emit("select", this.picked);
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
  margin: 15px 25px;
}
label {
  font-size: 1.5em;
  color: brown;
}
span {
  color: teal;
  margin-left: 25px;
  text-decoration: underline;
}
.select {
  color: blueviolet;
  margin-left: 50px;
  font-size: 2em;
  margin-top: 10px;
}

.input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  border-radius: 50%;
  width: 30px;
  height: 30px;

  border: 2px solid #999;
  transition: 0.2s all linear;
  outline: none;
  margin-right: 10px;

  position: relative;
  top: 4px;
}
.input_checked {
  border: 5px solid blueviolet;
}
</style>
