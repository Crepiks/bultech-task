import { taskStatuses } from "@/config/tasks";

const mutations = {
  SET_PROJECT_NAME: "SET_PROJECT_NAME",
  SET_TASKS: "SET_TASKS",
  ADD_TASK: "ADD_TASK",
  SET_SEARCH_QUERY: "SET_SEARCH_QUERY",
  SET_TASKS_STATUS: "SET_TASKS_STATUS",
  SET_TASK: "SET_TASK",
};

export default {
  state: {
    projectName: "Проект по умолчанию",
    tasks: [],
    task: {},
    filters: {
      searchQuery: "",
      status: taskStatuses.ALL,
    },
  },
  actions: {
    updateProjectName({ commit }, projectName) {
      commit(mutations.SET_PROJECT_NAME, projectName);
    },
    addTask({ commit }, task) {
      commit(mutations.ADD_TASK, task);
    },
    deleteTask({ commit, state }, taskId) {
      const tasks = state.tasks.filter((task) => task.id !== taskId);

      if (taskId === state.task.id) {
        commit(mutations.SET_TASK, { taskId, payload: {} });
      }

      commit(mutations.SET_TASKS, tasks);
    },
    completeTask({ commit, state }, taskId) {
      const { tasks } = state;
      const task = tasks.find((task) => task.id === taskId);
      task.completed = true;

      commit(mutations.SET_TASKS, tasks);
    },
    uncompleteTask({ commit, state }, taskId) {
      const { tasks } = state;
      const task = tasks.find((task) => task.id === taskId);
      task.completed = false;

      commit(mutations.SET_TASKS, tasks);
    },
    filterTasksBySearchQuery({ commit }, searchQuery) {
      commit(mutations.SET_SEARCH_QUERY, searchQuery);
    },
    filterTasksByStatus({ commit }, status) {
      commit(mutations.SET_TASKS_STATUS, status);
    },
    setTask({ commit, state }, taskId) {
      const task = state.tasks.find((task) => task.id === taskId);

      if (!task) {
        throw new Error(`Task with ID ${taskId} does not exist`);
      }

      commit(mutations.SET_TASK, task);
    },
    updateTask({ commit, state }, { taskId, payload }) {
      const { tasks } = state;
      const task = tasks.find((task) => task.id === taskId);

      task.email = payload.email;
      task.title = payload.title;
      task.text = payload.text;

      commit(mutations.SET_TASKS, tasks);
    },
  },
  mutations: {
    [mutations.SET_PROJECT_NAME](state, projectName) {
      state.projectName = projectName;
    },
    [mutations.ADD_TASK](state, task) {
      state.tasks = [...state.tasks, task];
    },
    [mutations.SET_TASKS](state, tasks) {
      state.tasks = tasks;
    },
    [mutations.SET_SEARCH_QUERY](state, searchQuery) {
      state.filters.searchQuery = searchQuery;
    },
    [mutations.SET_TASKS_STATUS](state, status) {
      state.filters.status = status;
    },
    [mutations.SET_TASK](state, task) {
      state.task = task;
    },
  },
  getters: {
    projectName: (state) => state.projectName,
    tasks: (state) => {
      const tasksFilteredBySearchQuery = state.tasks.filter(
        (task) => task.title.indexOf(state.filters.searchQuery) !== -1
      );

      if (state.filters.status === taskStatuses.ALL) {
        return tasksFilteredBySearchQuery;
      }

      if (state.filters.status === taskStatuses.COMPLETED) {
        return filterCompeletedTasks(tasksFilteredBySearchQuery);
      }

      return filterUncompletedTasks(tasksFilteredBySearchQuery);
    },
    taskFilters: (state) => state.filters,
    task: (state) => state.task,
  },
};

function filterCompeletedTasks(tasks) {
  return tasks.filter((task) => task.completed);
}

function filterUncompletedTasks(tasks) {
  return tasks.filter((task) => !task.completed);
}
