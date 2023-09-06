<template>
  <div class="main" @mousemove="emitOwner">
    <h2>Собственник.</h2>

    <div class="owner">
      <block-error :field="ownerSend.lastName" message="Укажите фамилию." />
      <input-simple
        v-focus
        v-model="ownerSend.lastName"
        placeholder="Фамилия"
      />

      <block-error :field="ownerSend.firstName" message="Укажите имя." />
      <input-simple v-model="ownerSend.firstName" placeholder="Имя" />

      <block-error :field="ownerSend.secondName" message="Укажите отчество." />
      <input-simple v-model="ownerSend.secondName" placeholder="Отчество" />

      <block-error
        :field="ownerSend.dateBirth"
        message="Укажите дату рождения (YYYY-MM-DD)."
      />
      <input-simple
        v-model="ownerSend.dateBirth"
        placeholder="Дата рождения."
      />

      <block-error :field="ownerSend.gender" message="Укажите пол." />
      <select-edit
        :array="arrayGender"
        :startObject="getSelectElement(arrayGender, ownerSend.gender)"
        @select="(value) => (ownerSend.gender = value)"
      />
      <block-error
        :field="ownerSend.familyStatus"
        message="Укажите семейное положение."
      />
      <select-edit
        :array="arrayFamilyStatus"
        :startObject="getSelectElement(arrayFamilyStatus, ownerSend.familyStatus)"
        @select="(value) => (ownerSend.familyStatus = value)"
      />
       <block-error
        :field="ownerSend.email"
        message="Укажите электронный адресс."
      />
      <input-simple v-model="ownerSend.email" placeholder="E-mail" />

      <block-error
        :field="ownerSend.phoneNumber"
        message="Укажите номер телефона +38(0XX)XXXXXXX."
      />
      <input-simple v-model="ownerSend.phoneNumber" placeholder="Телефон" />
    </div>
  </div>
</template>
<script>
export default {
  name: "block-edit-owner",
  data() {
    return {
      ownerSend: { ...this.owner },
    };
  },
  props: {
    arrayGender: {
      Type: Array,
      default: () => [],
    },
    arrayFamilyStatus: {
      Type: Array,
      default: () => [],
    },
    owner: Object,
  },
  methods: {
    emitOwner() {
      this.$emit("owner", this.ownerSend);
    },
    getSelectElement(array, value){
      return array.find(el=> el.value == value)
    }
  },
  };
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
h2 {
  color: blueviolet;
  margin-bottom: 10px;
  text-align: center;
}
</style>
