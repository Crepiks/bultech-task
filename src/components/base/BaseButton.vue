<template>
  <button
    class="button"
    :class="{ button_danger: danger }"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    danger: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
.button {
  padding: 10px 20px;
  font-size: 16px;
  background: #f6d067;
  border: none;
  outline: none;
  transition: 200ms;
  cursor: pointer;
  border-radius: 10px;
}

.button:hover {
  opacity: 0.7;
}

.button_danger {
  color: white;
  background-color: #f5222d;
}
</style>