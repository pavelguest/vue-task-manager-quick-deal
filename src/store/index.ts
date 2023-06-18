import Vue from "vue";
import Vuex from "vuex";

interface Task {
  id: number;
  title: string;
}

interface TaskState {
  tasks: Task[];
}

Vue.use(Vuex);

const store = new Vuex.Store<TaskState>({
  state() {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]") as Task[];
    return {
      tasks,
    };
  },
  mutations: {
    addTask(state, task: Task) {
      state.tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    updateTask(state, updatedTask: Task) {
      const taskIndex = state.tasks.findIndex(
        (task) => task.id === updatedTask.id
      );
      if (taskIndex !== -1) {
        state.tasks.splice(taskIndex, 1, updatedTask);
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    },
    removeTask(state, task: Task) {
      const taskId = task.id;
      const taskIndex = state.tasks.findIndex((task) => task.id === taskId);
      if (taskIndex !== -1) {
        state.tasks.splice(taskIndex, 1);
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    },
  },
  actions: {
    addTask({ commit }, task: Task) {
      commit("addTask", task);
    },
    updateTask({ commit }, updatedTask: Task) {
      commit("updateTask", updatedTask);
    },
    removeTask({ commit }, task: Task) {
      commit("removeTask", task);
    },
  },
});

export default store;
