<template>
  <article class="task-card">
    <base-button
      v-if="completed"
      class="task-card__button"
      @click="handleUncomplete"
    >
      Выполнено
    </base-button>
    <base-button v-else class="task-card__button" @click="handleComplete">
      Не выполнено
    </base-button>
    <span class="task-card__email">{{ email }}</span>
    <h3 class="task-card__title">{{ title }}</h3>
    <p class="task-card__text">{{ text }}</p>
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
  },
};
</script>

<style scoped>
.task-card {
  position: relative;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
}

.task-card__button {
  position: absolute;
  top: 20px;
  right: 20px;
}

.task-card__title {
  margin: 4px 0 20px;
  font-weight: 500;
  font-size: 24px;
}
</style>