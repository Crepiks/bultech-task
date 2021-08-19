<template>
  <article class="task-card">
    <span class="task-card__email">{{ email }}</span>
    <h3 class="task-card__title">{{ title }}</h3>
    <p class="task-card__text">{{ text }}</p>
  </article>
</template>

<script>
export default {
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
};
</script>

<style scoped>
.task-card {
  padding: 20px;
  background-color: white;
  border-radius: 10px;
}

.task-card__title {
  margin: 4px 0 20px;
  font-weight: 500;
  font-size: 24px;
}
</style>