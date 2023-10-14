<template>
  <button v-show="share === 0" @click="() => removeOwner(ownerId, ownershipId)">
    Деактивировать
  </button>
</template>

<script>
import { mapActions } from "vuex";
import { PAGE_OWNERS_GET } from "@/router/apiRouter";
export default {
  name: "button-deactivate",
  data() {
    return {
      PAGE_OWNERS_GET,
    };
  },
  props: {
    ownerId: Number,
    ownershipId: Number,
    share: Number,
  },
  methods: {
    ...mapActions({
      deleteShareByOwnerIdAndOwnershipId:
        "share/deleteShareByOwnerIdAndOwnershipId",
      deleteRecordByOwnerIdAndOwnershipId:
        "record/deleteRecordByOwnerIdAndOwnershipId",
      deleteAllQuestionnaireByOwnerIdAndOwnershipId:
        "questionnaire/deleteAllQuestionnaireByOwnerIdAndOwnershipId",
    }),
    removeOwner(ownerId, ownershipId) {
      const payload = {
        ownerId,
        ownershipId,
      };
      this.deleteShareByOwnerIdAndOwnershipId(payload).then(() => {
        this.deleteRecordByOwnerIdAndOwnershipId(payload).then(() => {
          this.deleteAllQuestionnaireByOwnerIdAndOwnershipId(payload).then(
            () => {
              this.$router.push(PAGE_OWNERS_GET);
            }
          );
        });
      });
    },
  },
};
</script>

<style scoped>
button {
  font-size: 12px;
  padding: 5px;
  margin: 5px 5px 5px 0px;
  font-weight: 600;
  letter-spacing: 1px;
  background-color: white;

  text-transform: uppercase;
  border-radius: 0;
  cursor: pointer;
  color: red;
  border: 1px solid red;
}
</style>
