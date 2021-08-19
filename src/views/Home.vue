<template>
  <div class="home">
    <bultech-header heading="Hello" @heading-change="handleHeadingChange" />
    <div class="home__content">
      <div class="home__tasks">
        <div class="home__filters">
          <base-input placeholder="Поиск" @input="handleSearchQueryChange" />
        </div>
        <task-card
          v-for="task in tasks"
          :key="task.id"
          :email="task.email"
          :title="task.title"
          :text="task.text"
          :completed="task.completed"
          class="home__task-card"
          @complete="handleTaskComplete(task.id)"
          @uncomplete="handleTaskUncomplete(task.id)"
          @delete="handleTaskDelete(task.id)"
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
import BaseInput from "@/components/base/BaseInput";
import TaskCard from "@/components/common/TaskCard";
import TaskForm from "@/components/common/TaskForm";

export default {
  name: "Home",
  components: {
    "bultech-header": Header,
    "base-input": BaseInput,
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
    handleSearchQueryChange(searchQuery) {
      this.filterTasks(searchQuery);
    },
    handleCreateTaskFormSubmit(payload) {
      const id = this.generateTaskId(this.tasks);
      const createdAt = Date.now();
      const completed = false;

      this.addTask({ ...payload, createdAt, completed, id });
    },
    generateTaskId(tasks) {
      const greatestId = tasks.reduce(
        (max, task) => (task.id > max ? task.id : max),
        0
      );

      return greatestId + 1;
    },
    handleTaskComplete(taskId) {
      this.completeTask(taskId);
    },
    handleTaskUncomplete(taskId) {
      this.uncompleteTask(taskId);
    },
    handleTaskDelete(taskId) {
      this.deleteTask(taskId);
    },
    ...mapActions([
      "addTask",
      "completeTask",
      "uncompleteTask",
      "deleteTask",
      "filterTasks",
    ]),
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

.home__filters {
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-content: space-between;
  column-gap: 40px;
}

.home__task-card {
  margin-bottom: 20px;
}

.home__task-card:last-child {
  margin-bottom: 0;
}
</style>