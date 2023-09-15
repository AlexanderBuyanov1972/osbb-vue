<script>
import { BACK } from "@/ui/namesButton";
export default {
  name: "button-back",
  data() {
    return {
      BACK,
    };
  },
};
</script>
<template>
  <button>{{ BACK }}</button>
</template>

<style scoped>
button {
  font-size: 1em;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.1em;
  border-radius: 0;
  cursor: pointer;
  padding: 0.7em 1.4em;
  background-color: white;
  color: #999999;
  border: 2px solid #999999;
  margin: 10px 10px 10px 0px;
}
</style>
