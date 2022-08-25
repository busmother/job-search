import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobResultsView from "@/views/JobResultsView.vue";
import JobView from '@views/JobView.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/jobs/results/:id",
    name: "JobResults",
    component: JobResultsView,
  },
  {
    path: "/jobs/results/",
    name: "JobView",
    component: JobView
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
