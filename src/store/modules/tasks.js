const mutations = {
  SET_PROJECT_NAME: "SET_PROJECT_NAME",
  SET_TASKS: "SET_TASKS",
  ADD_TASK: "ADD_TASK",
  SET_SEARCH_QUERY: "SET_SEARCH_QUERY",
};

export default {
  state: {
    projectName: "Проект по умолчанию",
    tasks: [],
    filters: {
      searchQuery: "",
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
    filterTasks({ commit }, searchQuery) {
      commit(mutations.SET_SEARCH_QUERY, searchQuery);
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
  },
  getters: {
    projectName: (state) => state.projectName,
    tasks: (state) => {
      return state.tasks.filter(
        (task) => task.title.indexOf(state.filters.searchQuery) !== -1
      );
    },
  },
};
