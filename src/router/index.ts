import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import { urlNames, layoutNames } from "@/utils/constants";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: urlNames.MAIN_PAGE,
      component: HomeView,
      meta: {
        layout: layoutNames.MAIN_LAYOUT,
      },
    },
    {
      path: "/tasks",
      name: urlNames.TASKS,
      component: () => import("@/views/TasksView.vue"),
      meta: {
        layout: layoutNames.MAIN_LAYOUT,
      },
    },
    {
      path: "/add-task",
      name: urlNames.ADD_TASK,
      component: () => import("@/views/AddTaskView.vue"),
      meta: {
        layout: layoutNames.MAIN_LAYOUT,
      },
    },
    {
      path: "/edit-task/:taskId",
      name: urlNames.EDIT_TASK,
      component: () => import("@/views/EditTaskView.vue"),
      meta: {
        layout: layoutNames.MAIN_LAYOUT,
      },
    },
    {
      path: "*",
      name: urlNames.ERROR_PAGE,
      component: () => import("@/views/ErrorView.vue"),
      meta: {
        layout: layoutNames.ERROR_LAYOUT,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  next({ name: urlNames.MAIN_PAGE });
});

export default router;
