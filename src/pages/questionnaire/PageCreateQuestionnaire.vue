<template>
  <div class="main">
    <header-messages :messages="[]" />
    <line-header text="Опросный лист" />
    <div class="list" v-for="item in list" :key="item.id">
      <input-simple class="item" />
      <div>
        <div>
          <input
            class="input"
            type="radio"
            id="one"
            value="За"
            v-model="picked"
          />
          <label for="one">За</label>
        </div>
        <div>
          <input
            class="input"
            type="radio"
            id="two"
            value="Против"
            v-model="picked"
          />
          <label for="two">Против</label>
        </div>
        <div>
          <input
            class="input"
            type="radio"
            id="three"
            value="Воздержался"
            v-model="picked"
          />
          <label for="three">Воздержался</label>
        </div>

        <label>Выбрано: {{ picked }}</label>
      </div>
    </div>
    <vue-hr />
    <button-simple @click="addLine">Add</button-simple>
    <button-simple @click="removeLine">Remove</button-simple>
  </div>
</template>
<script>
export default {
  data() {
    return {
      questionnaire: { title: "" },
      list: [{}],
      picked: "",
    };
  },
  methods: {
    addLine() {
      this.list.push({});
    },
    removeLine() {
      this.list.length -= 1;
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
.item {
  margin: 20px 0px;
  font-size: 25px;
}
label {
  font-size: 1.5em;
  color: blueviolet;
}
.input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  border-radius: 50%;
  width: 20px;
  height: 20px;

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
