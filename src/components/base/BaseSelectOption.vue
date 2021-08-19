<template>
  <option :value="value">
    <slot />
  </option>
</template>

<script>
export default {
  props: {
    value: [String, Number, Boolean],
  },
};
</script>