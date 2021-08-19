<template>
  <input
    type="text"
    class="base-input"
    @change="$emit('change', $event.target.value)"
  />
</template>

<script>
export default {
  model: {
    prop: "value",
    event: "change",
  },
  prop: {
    value: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.base-input {
  padding: 10px 16px;
  font-size: 18px;
  background-color: #e6e4e4;
  border-radius: 10px;
  border: none;
  outline: none;
}
</style>