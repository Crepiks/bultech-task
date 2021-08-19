<template>
  <button class="button">
    <slot />
  </button>
</template>

<script>
export default {};
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
</style>