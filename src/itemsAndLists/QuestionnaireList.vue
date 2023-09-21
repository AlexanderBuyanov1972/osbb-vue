<template>
  <div class="list">
    <questionnaire-item
      v-for="(one, index) in array"
      :questionnaire="one"
      :key="one.id"
      :count="index + 1"
    />
  </div>
</template>

<script>
export default {
  props: {
    array: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    getOne(owner, index) {
      return { owner, index: index + 1 };
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
</style>
