<template>
  <form class="task-form" @submit.prevent="handleFormSubmit">
    <h3 class="task-form__heading">Создать задание</h3>
    <base-input
      v-model="form.email"
      placeholder="Почта"
      class="task-form__input"
    />
    <base-input
      v-model="form.title"
      placeholder="Заголовок"
      class="task-form__input"
    />
    <base-textarea v-model="form.text" placeholder="Текст задачи" />
    <div class="task-form__button-wrapper">
      <base-button>Создать</base-button>
    </div>
  </form>
</template>

<script>
import BaseInput from "@/components/base/BaseInput";
import BaseTextarea from "@/components/base/BaseTextarea";
import BaseButton from "@/components/base/BaseButton";

export default {
  components: {
    "base-input": BaseInput,
    "base-textarea": BaseTextarea,
    "base-button": BaseButton,
  },
  data: () => ({
    form: {
      email: "",
      title: "",
      text: "",
    },
  }),
  methods: {
    handleFormSubmit() {
      const payload = {
        email: this.form.email,
        title: this.form.title,
        text: this.form.text,
      };

      this.$emit("submit", payload);
      this.resetFormFields();
    },
    resetFormFields() {
      this.form.email = "";
      this.form.title = "";
      this.form.text = "";
    },
  },
};
</script>

<style scoped>
.task-form {
  padding: 20px;
  background-color: white;
  border-radius: 10px;
}

.task-form__heading {
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 22px;
}

.task-form__input {
  margin-bottom: 14px;
}

.task-form__input:last-child {
  margin-bottom: 0;
}

.task-form__button-wrapper {
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
}
</style>
