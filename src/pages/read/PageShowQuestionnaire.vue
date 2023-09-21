<template>
  <div class="main">
    <vue-loader :isLoader="this.getIsLoading" />
    <header-messages :messages="getMessages" />
    <line-header text="Результаты опроса" />
    <div class="items">
        <div class="item" v-for="one in getQuestionnaire.selects" :key="one.id">{{ one.question }} ---> {{ one.answer }}</div>
    </div>
  </div>
</template>
<script>
import OwnerItem from "@/itemsAndLists/OwnerItem.vue";
import { mapActions, mapGetters} from "vuex";
export default {
  components: {
    OwnerItem,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions({
        fetchQuestionnaire: "questionnaire/fetchQuestionnaire",
    }),
  },
  computed: {
    ...mapGetters({
      getQuestionnaire: "questionnaire/getQuestionnaire",
      getMessages: "questionnaire/getMessages",
      getIsLoading: "questionnaire/getIsLoading",
    }),
  },
  mounted() {
   
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
