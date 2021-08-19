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
  methods: {
    handleHeadingChange() {
      this.$emit("heading-change", this.heading);
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
  margin-right: 20px;
  background-color: #f6d06785;
}

.header__icon-wrapper {
  width: 40px;
  height: 40px;
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
</style>