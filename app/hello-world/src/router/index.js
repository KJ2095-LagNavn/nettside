import { createRouter, createWebHashHistory } from "vue-router";
import ChapterTwo from "../views/ChapterTwo.vue";
import ChapterOneView from "../views/ChapterOneView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: ChapterTwo,
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
  {
    path: "/kapittelto",
    name: "KapittelTo",
    component: ChapterTwo,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
