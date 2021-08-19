const mutations = {
  ADD_TASK: "SET_TASKS",
};

export default {
  state: {
    tasks: [],
  },
  actions: {
    addTask({ commit }, task) {
      commit(mutations.ADD_TASK, task);
    },
  },
  mutations: {
    [mutations.ADD_TASK](state, task) {
      state.tasks = [...state.tasks, task];
    },
  },
  getters: {
    tasks: (state) => state.tasks,
  },
};
