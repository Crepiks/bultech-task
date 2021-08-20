<template>
  <input
    :value="value"
    :placeholder="placeholder"
    type="text"
    class="base-input"
    @change="$emit('change', $event.target.value)"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    value: {
      type: String,
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
.base-input {
  width: 100%;
  padding: 14px 18px;
  font-size: 16px;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: #f6d06785;
}
</style>
