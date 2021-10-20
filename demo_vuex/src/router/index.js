import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/text",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Text.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/getters",
    name: "Getters",
    component: () =>
      import(/* webpackChunkName: "getters" */ "../views/Getters.vue")
  },
  {
    path: "/mutations",
    name: "Mutations",
    component: () =>
      import(/* webpackChunkName: "mutations" */ "../views/Mutations.vue")
  },
  {
    path: "/action",
    name: "Action",
    component: () =>
      import(/* webpackChunkName: "actions" */ "../views/Action.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
