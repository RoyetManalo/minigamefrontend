import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import Leaderboards from "../views/Leaderboards.vue";
import Quests from "../views/Quests.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/quests",
    name: "Quests",
    component: Quests,
  },
  {
    path: "/leaderboards",
    name: "Leaderboards",
    component: Leaderboards,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
