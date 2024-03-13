import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ChapterOneView from "../views/ChaptersView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/chapter-one",
    name: "ChapterOneView",
    component: ChapterOneView,
  },
  {
    path: "/database",
    name: "DataBaseView",
    component: () => import("../views/DataBaseView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
