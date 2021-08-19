<template>
  <div class="home">
    <bultech-header heading="Hello" @heading-change="handleHeadingChange" />
  </div>
</template>

<script>
import Header from "@/components/common/Header";

export default {
  name: "Home",
  components: {
    "bultech-header": Header,
  },
  methods: {
    handleHeadingChange(value) {
      console.log(value);
    },
  },
};
</script>
