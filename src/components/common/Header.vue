<template>
  <header class="header">
    <template v-if="!editingEnabled">
      <h3 class="header__heading">{{ heading }}</h3>
      <div class="header__icon-wrapper" @click="enableEditingMode">
        <i class="bx bx-edit-alt header__icon"></i>
      </div>
    </template>
    <template v-else>
      <base-input v-model="edittedHeading" class="header__input" />
      <div class="header__icon-wrapper" @click="handleHeadingChange">
        <i class="bx bx-check header__icon"></i>
      </div>
    </template>
  </header>
</template>

<script>
import BaseInput from "@/components/base/BaseInput";

export default {
  components: {
    "base-input": BaseInput,
  },
  props: {
    heading: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    editingEnabled: false,
    edittedHeading: "",
  }),
  watch: {
    heading(newHeading) {
      this.heading = newHeading;
    },
  },
  methods: {
    handleHeadingChange() {
      this.$emit("heading-change", this.edittedHeading);
      this.disabledEditingMode();
    },
    enableEditingMode() {
      this.edittedHeading = this.heading;
      this.editingEnabled = true;
    },
    disabledEditingMode() {
      this.editingEnabled = false;
    },
  },
};
</script>

<style scoped>
.header {
  padding: 30px 40px;
  display: flex;
  align-items: center;
}

.header__heading {
  margin-right: 20px;
  font-weight: 500;
}

.header__input {
  max-width: 300px;
  margin-right: 20px;
}

.header__icon-wrapper {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6d06785;
  border-radius: 10px;
  cursor: pointer;
}

.header__icon {
  font-size: 20px;
}

@media all and (max-width: 500px) {
  .header {
    padding: 30px 16px;
  }
}
</style>