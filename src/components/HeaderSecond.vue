<template>
  <div class="main">
    <button-create @click="goToPageCreateOwnership"
      >{{ CREATE_ENTRY_ABOUT_OWNERSHIP }}
    </button-create>
    <button-create @click="goToPageCreateQuestionnaire"
      >{{ CREATE_QUESTIONNAIRE }}
    </button-create>
  </div>
</template>
<script>
import {
  CREATE_ENTRY_ABOUT_OWNERSHIP,
  CREATE_QUESTIONNAIRE,
} from "@/ui/namesButton";
import {
  PAGE_CREATE_ENTRY_OWNERSHIP,
  PAGE_CREATE_QUESTIONNAIRE,
} from "@/router/apiRouter";
export default {
  data() {
    return {
      CREATE_ENTRY_ABOUT_OWNERSHIP,
      CREATE_QUESTIONNAIRE,
      PAGE_CREATE_ENTRY_OWNERSHIP,
      PAGE_CREATE_QUESTIONNAIRE,
    };
  },
  methods: {
    goToPageCreateOwnership() {
      this.$router.push(PAGE_CREATE_ENTRY_OWNERSHIP);
    },
    goToPageCreateQuestionnaire() {
      this.$router.push(PAGE_CREATE_QUESTIONNAIRE);
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
.main {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.btn {
  margin: 10px 0px;
}
</style>
