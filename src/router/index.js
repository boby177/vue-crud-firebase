import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import UserList from "../components/userList.vue";
import UserCreate from "../components/userCreate";
// import UserCreate from "../views/AboutView";

const routes = [
  {
    path: "/",
    name: "Home",
    component: UserCreate,
  },
  {
    path: "/edit/:id",
    name: "Edit",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
