<template>
  <div class="home">
    <bultech-header
      :heading="projectName"
      @heading-change="handleHeadingChange"
    />
    <div class="home__content">
      <div class="home__tasks">
        <div class="home__filters">
          <base-input
            :value="taskFilters.searchQuery"
            placeholder="Поиск"
            @input="handleSearchQueryChange"
          />
          <base-select
            :value="taskFilters.status"
            @change="handleStatusFilterChange"
          >
            <base-select-option :value="taskStatuses.ALL">
              Все
            </base-select-option>
            <base-select-option :value="taskStatuses.COMPLETED">
              Выполненные
            </base-select-option>
            <base-select-option :value="taskStatuses.UNCOMPLETED">
              Не выполненные
            </base-select-option>
          </base-select>
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
          @edit="handleTaskEdit(task.id)"
        />
      </div>
      <aside class="home__aside">
        <create-task-form @submit="handleCreateTaskFormSubmit" />
        <edit-task-form
          v-if="task.id"
          :email="task.email"
          :title="task.title"
          :text="task.text"
          class="home__edit-tasks-form"
          @submit="handleEditTaskFormSubmit"
        />
      </aside>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { taskStatuses } from "@/config/tasks";
import Header from "@/components/common/Header";
import BaseInput from "@/components/base/BaseInput";
import BaseSelect from "@/components/base/BaseSelect";
import BaseSelectOption from "@/components/base/BaseSelectOption";
import TaskCard from "@/components/common/TaskCard";
import CreateTaskForm from "@/components/common/CreateTaskForm";
import EditTaskForm from "@/components/common/EditTaskForm";

export default {
  name: "Home",
  components: {
    "bultech-header": Header,
    "base-input": BaseInput,
    "base-select": BaseSelect,
    "base-select-option": BaseSelectOption,
    "task-card": TaskCard,
    "create-task-form": CreateTaskForm,
    "edit-task-form": EditTaskForm,
  },
  data: () => ({
    taskStatuses,
  }),
  computed: {
    ...mapGetters(["projectName", "taskFilters", "tasks", "task"]),
  },
  methods: {
    handleHeadingChange(value) {
      this.updateProjectName(value);
    },
    handleSearchQueryChange(searchQuery) {
      this.filterTasksBySearchQuery(searchQuery);
    },
    handleStatusFilterChange(status) {
      this.filterTasksByStatus(status);
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
    handleTaskEdit(taskId) {
      this.setTask(taskId);
    },
    handleEditTaskFormSubmit(payload) {
      this.updateTask({ taskId: this.task.id, payload });
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
      "updateProjectName",
      "addTask",
      "completeTask",
      "uncompleteTask",
      "deleteTask",
      "filterTasksBySearchQuery",
      "filterTasksByStatus",
      "setTask",
      "updateTask",
      "loadStateFromLocalStorage",
      "saveStateToLocalStorage",
    ]),
  },
  // beforeMount() {
  //   this.loadStateFromLocalStorage();
  // },
  // beforeDestroy() {
  //   this.saveStateToLocalStorage();
  // },
};
</script>

<style scoped>
.home__content {
  padding: 0 40px 40px;
  display: grid;
  grid-template-columns: 3fr 2fr;
}

.home__tasks {
  margin-right: 20px;
}

.home__filters {
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-content: space-between;
  column-gap: 20px;
}

.home__task-card {
  margin-bottom: 20px;
}

.home__task-card:last-child {
  margin-bottom: 0;
}

.home__edit-tasks-form {
  margin-top: 20px;
}

@media all and (max-width: 1000px) {
  .home__content {
    grid-template-columns: 1fr;
  }

  .home__tasks {
    margin-right: 0;
  }

  .home__aside {
    margin-top: 20px;
  }
}

@media all and (max-width: 500px) {
  .home__content {
    padding: 0 16px 40px;
  }
}
</style>