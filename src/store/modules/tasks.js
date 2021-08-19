const mutations = {
  SET_TASKS: "SET_TASKS",
  ADD_TASK: "ADD_TASK",
};

export default {
  state: {
    tasks: [],
  },
  actions: {
    addTask({ commit }, task) {
      commit(mutations.ADD_TASK, task);
    },
    completeTask({ commit, state }, taskId) {
      const { tasks } = state;
      const task = tasks.find((task) => task.id === taskId);
      task.completed = true;

      commit(mutations.SET_TASKS, tasks);
    },
    deleteTask({ commit, state }, taskId) {
      const tasks = state.tasks.filter((task) => task.id !== taskId);
      commit(mutations.SET_TASKS, tasks);
    },
  },
  mutations: {
    [mutations.ADD_TASK](state, task) {
      state.tasks = [...state.tasks, task];
    },
    [mutations.SET_TASKS](state, tasks) {
      state.tasks = tasks;
    },
  },
  getters: {
    tasks: (state) => state.tasks,
  },
};
