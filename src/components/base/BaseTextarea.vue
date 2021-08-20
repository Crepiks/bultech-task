<template>
  <textarea
    :value="value"
    :placeholder="placeholder"
    rows="6"
    class="base-textarea"
    @change="$emit('change', $event.target.value)"
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
.base-textarea {
  width: 100%;
  padding: 14px 18px;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: #f6d06785;
}
</style>
