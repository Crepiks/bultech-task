<template>
  <select
    :value="value"
    :placeholder="placeholder"
    type="text"
    class="base-select"
    @change="$emit('change', $event.target.value)"
  >
    <slot />
  </select>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number, Boolean],
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.base-select {
  width: 100%;
  padding: 14px 18px;
  font-size: 16px;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: #f6d06785;
}
</style>
