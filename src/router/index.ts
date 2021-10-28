import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { Home, Destination, Crew, Technology } from "@/pages/pages";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/destination",
    name: "Destination",
    component: Destination,
  },
  {
    path: "/crew",
    name: "Crew",
    component: Crew,
  },
  {
    path: "/technology",
    name: "Technology",
    component: Technology,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
