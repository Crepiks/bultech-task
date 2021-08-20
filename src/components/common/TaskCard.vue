<template>
  <article class="task-card">
    <span class="task-card__email">{{ email }}</span>
    <h3 class="task-card__title">{{ title }}</h3>
    <p class="task-card__text">{{ text }}</p>
    <div class="task-card__buttons-wrapper">
      <base-button
        v-if="completed"
        class="task-card__button"
        @click="handleUncomplete"
      >
        Выполнено
      </base-button>
      <base-button v-else class="task-card__button" @click="handleComplete"
        >Не выполнено</base-button
      >
      <base-button class="task-card__button" @click="handleEdit">
        Редактировать
      </base-button>
      <base-button danger @click="handleDelete"> Удалить </base-button>
    </div>
  </article>
</template>

<script>
import BaseButton from "@/components/base/BaseButton";

export default {
  components: {
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
    completed: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleComplete() {
      this.$emit("complete");
    },
    handleUncomplete() {
      this.$emit("uncomplete");
    },
    handleEdit() {
      this.$emit("edit");
    },
    handleDelete() {
      this.$emit("delete");
    },
  },
};
</script>

<style scoped>
.task-card {
  padding: 20px;
  background-color: white;
  border-radius: 10px;
}

.task-card__buttons-wrapper {
  margin-top: 20px;
}

.task-card__button {
  margin-right: 10px;
  margin-bottom: 10px;
}

.task-card__title {
  margin: 4px 0 20px;
  font-weight: 500;
  font-size: 24px;
}
</style>
