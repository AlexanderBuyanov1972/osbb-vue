<template>
  <header-payment />
  <vue-loader :isLoader="getIsLoading" />
  <header-messages :messages="getMessages" />
  <line-header text="Тарифы" :style="{ color: 'brown', 'font-size': '30px' }" />
  <div class="blockButtons">
    <!-- <button-simple @click="createAllRate">Создать тарифы </button-simple> -->
    <!-- <button-simple @click="getAllRate">Получить тарифы </button-simple> -->
    <!-- <button-simple @click="showModalDeleteAll = true"
      >Удалить тарифы
    </button-simple> -->
  </div>
  <div class="main">
    <div v-if="getRates.length > 0" class="list">
      <div class="item" v-for="(one, index) in getRates" :key="one.id">
        <rate-item
          :body="one"
          :count="index + 1"
          @edit="(value) => editEmit(value)"
          @remove="(value) => removeEmit(value)"
        />
      </div>
    </div>
    <div v-else class="empty">База тарифов пуста</div>
    <div class="forms">
      <line-header
        :text="showModalUpdate ? 'Обновить тариф' : 'Создать тариф'"
        :style="{ color: 'teal' }"
      />
      <div class="form">
        <div class="id">
          <block-error-message
            :field="rate.id"
            messageFalse="Укажите id"
            messageTrue="id"
            @valid="(value) => (validId = value)"
          />
          <input-simple v-focus v-model.number="rate.id" placeholder="id" />
        </div>
        <div class="date">
          <block-error-message
            :field="rate.date"
            messageFalse="Укажите дату"
            messageTrue="Дата"
            @valid="(value) => (validDate = value)"
          />
          <input-simple v-model.trim="rate.date" placeholder="date" />
        </div>
        <div class="value">
          <block-error-message
            :field="rate.value"
            messageFalse="Укажите значение"
            messageTrue="Значение"
            @valid="(value) => (validValue = value)"
          />
          <input-simple v-model.number="rate.value" placeholder="value" />
        </div>
        <button-simple
          @click="save"
          v-if="validId && validDate && validValue"
          >{{ showModalUpdate ? "Обновить" : "Создать" }}</button-simple
        >
        <button-simple v-if="validId && validDate && validValue" @click="reset"
          >Очистить</button-simple
        >
      </div>
    </div>
  </div>
  <dialog-window :show="showModalDelete">
    <modal-action
      message="Вы действительно хотите удалить этот тариф?"
      @close="showModalDelete = false"
      @successfully="actionDelete"
    ></modal-action>
  </dialog-window>
  <dialog-window :show="showModalDeleteAll">
    <modal-action
      message="Вы действительно хотите удалить все тариф?"
      @close="showModalDeleteAll = false"
      @successfully="actionDeleteAll"
    ></modal-action>
  </dialog-window>
</template>
<script>
import ButtonSimple from "@/ui/elements/buttons/ButtonSimple.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { ButtonSimple },
  data() {
    return {
      id: 0,
      rate: {},
      header: {
        id: "№ ",
        date: "date",
        value: "value",
      },
      validId: false,
      validDate: false,
      validValue: false,
      showModalDeleteAll: false,
      showModalDelete: false,
      showModalUpdate: false,
    };
  },
  methods: {
    ...mapActions({
      createRate: "rate/createRate",
      updateRate: "rate/updateRate",
      fetchRate: "rate/getRate",
      deleteRate: "rate/deleteRate",
      createAllRate: "rate/createAllRate",
      updateAllRate: "rate/updateAllRate",
      getAllRate: "rate/getAllRate",
      deleteAllRate: "rate/deleteAllRate",
    }),
    editEmit(num) {
      this.id = num;
      this.showModalUpdate = true;
      this.fetchRate(num).then(() => {
        this.rate = this.getRate;
      });
    },
    removeEmit(num) {
      this.id = num;
      this.showModalDelete = true;
    },
    actionDelete() {
      this.deleteRate(this.id).then(() => {
        this.showModalDelete = false;
        this.getRatesAndReset();
      });
    },
    actionDeleteAll() {
      this.deleteAllRate().then(() => {
        this.showModalDeleteAll = false;
        this.getRatesAndReset();
      });
    },
    save() {
      this.showModalUpdate ? this.saveUpdate() : this.saveCreate();
    },
    saveCreate() {
      this.createRate(this.rate).then(() => {
        this.getRatesAndReset();
      });
    },
    saveUpdate() {
      this.updateRate(this.rate).then(() => {
        this.getRatesAndReset();
        this.showModalUpdate = false;
      });
    },
    reset() {
      this.rate = {};
      this.showModalUpdate = false;
    },
    getRatesAndReset() {
      this.getAllRate();
      this.rate = {};
    },
  },
  computed: {
    ...mapGetters({
      getIsLoading: "rate/getIsLoading",
      getMessages: "rate/getMessages",
      getRate: "rate/getRate",
      getRates: "rate/getRates",
    }),
  },
  mounted() {
    this.getRatesAndReset();
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.blockButtons {
  display: flex;
  align-items: start;
}
.list {
  width: 50%;
}
.forms {
  width: 50%;
  margin: 10px 0px 100px 50px;
  padding: 10px 30px 100px 30px;
  border: 1px solid blue;
  border-radius: 25px;
}
.main {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.item {
  text-align: center;
}
.empty {
  color: red;
  font-size: 40px;
  border: 1px solid red;
  padding: 10px 75px;
}
.value {
  margin-bottom: 50px;
}
</style>
