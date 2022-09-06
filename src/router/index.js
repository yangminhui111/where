import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../pages/home/HomeView.vue";
import CityView from "../pages/city/CityView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/city",
    name: "City",
    component: CityView
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
