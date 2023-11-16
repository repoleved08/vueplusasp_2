import { createRouter, createWebHistory } from "vue-router";
import CreateTodo from "@/views/CreateTodo.vue";
import ListTodo from "@/views/ListTodo.vue";
import TodoDetailed from "@/views/TodoDetailed.vue";

const routes = [
  {
    path: "/",
    name: "todo-list",
    component: ListTodo,
  },
  {
    path: "/create-todo",
    name: "create-todo",
    component: CreateTodo,
  },
  {
    path: "/todo-list/:id",
    name: "todo-detailed",
    component: TodoDetailed,
    props: true,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
