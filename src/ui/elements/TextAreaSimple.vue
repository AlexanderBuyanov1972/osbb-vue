<template>
  <textarea
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  ></textarea>
</template>

<script>
export default {
  name: "text-area-simple",
  props: ["modelValue"],
  emits: ["update:modelValue"],
};
</script>

<style scoped>
textarea {
  background-color: white;
  height: 100px;
  outline: none;
  border: 1px solid teal;
  width: 100%;
  text-indent: 1em;
  color: teal;
  font-size: 15px;
  resize: none;
}
::placeholder {
  color: #999999;
}
</style>
