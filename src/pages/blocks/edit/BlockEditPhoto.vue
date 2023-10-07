<template>
  <div class="main">
    <line-header text="Персональное фото" :style="{ color: 'brown' }" />
    <div class="share">
      <block-error-message
        :field="photo.name"
        messageFalse="Укажите персональное фото"
        messageTrue="Персональное фото"
        @valid="(value) => handlerPhoto(value)"
      />
      <input-simple
        v-model.trim="photo.name"
        placeholder="Укажите перслнальное фото"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "block-update-photo",
  props: {
    photoProps: Object,
  },
  data() {
    return {
      photo: {
        id: 0,
        url: "",
        name: "",
      },
      validPhoto: false,
    };
  },
  methods: {
    emitPhoto() {
      this.photo.url = `@/photos/owners/${this.photo.name}.png`;
      this.$emit("isValidPhoto", this.validPhoto);
      this.$emit("photo", this.photo);
    },
    handlerPhoto(value) {
      this.validPhoto = value;
      this.emitPhoto();
    },
  },
  updated() {
    this.photo = this.photoProps;
  },
  mounted() {
    this.photo = this.photoProps;
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
