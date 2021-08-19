<template>
  <div class="home">
    <bultech-header heading="Hello" @heading-change="handleHeadingChange" />
    <div class="home__content">
      <div class="home__tasks">
        <task-card
          v-for="task in tasks"
          :key="task.createdAt.toString()"
          :email="task.email"
          :title="task.title"
          :text="task.text"
          class="home__task-card"
        />
      </div>
      <div>
        <task-form @submit="handleCreateTaskFormSubmit" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Header from "@/components/common/Header";
import TaskCard from "@/components/common/TaskCard";
import TaskForm from "@/components/common/TaskForm";

export default {
  name: "Home",
  components: {
    "bultech-header": Header,
    "task-card": TaskCard,
    "task-form": TaskForm,
  },
  computed: {
    ...mapGetters(["tasks"]),
  },
  methods: {
    handleHeadingChange(value) {
      console.log(value);
    },
    handleCreateTaskFormSubmit(payload) {
      const createdAt = Date.now();
      this.addTask({ ...payload, createdAt });
    },
    ...mapActions(["addTask"]),
  },
};
</script>

<style scoped>
.home__content {
  padding: 0 40px;
  display: grid;
  grid-template-columns: 3fr 2fr;
}

.home__tasks {
  margin-right: 20px;
  padding-bottom: 40px;
}

.home__task-card {
  margin-bottom: 20px;
}

.home__task-card:last-child {
  margin-bottom: 0;
}
</style>