<template>
  <div class="list" v-for="item in list">
    <div
      class="item"
      v-for="one in item.rooms"
      :key="one.id"
      @click="() => this.$router.push(PAGE_OWNERSHIP_GET + '/' + one.id)"
    >
      <span>Квартира № </span
      >{{
        one.apartment
      }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>
        общая площадь :</span
      >
      {{ one.totalArea }} м2
    </div>
    <p v-for="(two, index) in item.clients" :key="two.id">
      <div >
        <owner-item
        :owner="two"
        :count="index + 1"
        :flag="true"
        />
        <button-delete :style="{'color':'red'}" v-show="two.share === 0"
         @click="()=>removeOwner(two.id, item.rooms[0].id)" >Деактивировать</button-delete>
      </div>
     </p>
  </div>
</template>
<script>
import { PAGE_OWNERSHIP_GET, PAGE_OWNER_GET,PAGE_OWNERS_GET } from "@/router/apiRouter";
import { mapOwnerToLineFullNamesOwner } from "@/pages/_functions/functions";
import OwnerItem from "./OwnerItem.vue";
import { mapActions } from "vuex";
export default {
  components: { OwnerItem },
  data() {
    return {
      PAGE_OWNERSHIP_GET,
      PAGE_OWNERS_GET,
      PAGE_OWNER_GET,
      mapOwnerToLineFullNamesOwner,
     
    };
  },
  props: {
    list: Object,
  },

  methods:{
    ...mapActions({
      deleteShareByOwnerIdAndOwnershipId:
        "share/deleteShareByOwnerIdAndOwnershipId",
      deleteRecordByOwnerIdAndOwnershipId:
        "record/deleteRecordByOwnerIdAndOwnershipId",
    }),
    removeOwner(ownerId, ownershipId) {
          const payload = { 
            ownerId,
            ownershipId,
        };
        this.deleteShareByOwnerIdAndOwnershipId(payload).then(() => {
          this.deleteRecordByOwnerIdAndOwnershipId(payload).then(() => {
            this.$router.push(PAGE_OWNERS_GET);
          });
        });
      
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
.list {
  border: 1px solid;
  padding: 10px 5px;
  margin: 10px 0px;
}

.item {
  font-size: 20px;
  color: blueviolet;
}
span {
  color: teal;
}
.danger{
  background-color: lightcoral;
}
</style>
