<template>
  <div class="items">
    <div class="item">
      <input
        class="input"
        type="radio"
        id="1"
        value="За"
        v-model="picked"
        @click="emitValue"
      />
      <label for="1">За</label>
    </div>
    <div class="item">
      <input
        class="input"
        type="radio"
        id="2"
        value="Против"
        v-model="picked"
        @click="emitValue"
      />
      <label for="2">Против</label>
    </div>
    <div class="item">
      <input
        class="input"
        type="radio"
        id="3"
        value="Воздержался"
        v-model="picked"
        @click="emitValue"
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
    };
  },
  methods: {
    emitValue() {
      let count = 0;

      console.log(this.picked);
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
input:checked {
  border: 5px solid blueviolet;
}
</style>
