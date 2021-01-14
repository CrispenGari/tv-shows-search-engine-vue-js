import { createWebHistory, createRouter } from "vue-router";

import { History, Home } from "./views";

const routes = [
  { name: "Home", component: Home, path: "/" },
  { name: "History", component: History, path: "/history" },
];
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
