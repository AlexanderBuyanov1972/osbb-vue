<template>
  <div class="header">
    {{ this.mapAddressToLineAddress(address) }}
  </div>
</template>
<script>
import { mapAddressToLineAddress } from "@/pages/_functions/functions";
export default {
  name: "line-address",
  data() {
    return {
      mapAddressToLineAddress,
    };
  },
  props: {
    address: Object,
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.header {
  color: brown;
  margin: 10px 0px;
  text-align: center;
  font-size: 22px;
}
</style>
@/pages/functions/functions
@/pages/_functions/functions@/pages/bills/_functions/functions