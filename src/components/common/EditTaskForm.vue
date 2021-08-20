<template>
  <form class="task-form" @submit.prevent="handleFormSubmit">
    <h3 class="task-form__heading">Редактировать задание</h3>
    <base-input
      v-model="form.email"
      type="email"
      required
      placeholder="Почта"
      class="task-form__input"
    />
    <base-input
      v-model="form.title"
      required
      placeholder="Заголовок"
      class="task-form__input"
    />
    <base-textarea v-model="form.text" required placeholder="Текст задачи" />
    <div class="task-form__button-wrapper">
      <base-button>Сохранить</base-button>
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
  props: {
    email: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    form: {
      email: "",
      title: "",
      text: "",
    },
  }),
  watch: {
    email() {
      this.setFormFieldsFromProps();
    },
    title() {
      this.setFormFieldsFromProps();
    },
    text() {
      this.setFormFieldsFromProps();
    },
  },
  methods: {
    handleFormSubmit() {
      const payload = {
        email: this.form.email,
        title: this.form.title,
        text: this.form.text,
      };

      this.$emit("submit", payload);
    },
    setFormFieldsFromProps() {
      this.form.email = this.email;
      this.form.title = this.title;
      this.form.text = this.text;
    },
  },
  beforeMount() {
    this.setFormFieldsFromProps();
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
