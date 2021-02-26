import { createRouter, createWebHistory } from "vue-router";
import TheMenu from "../views/TheMenu";
import TheGameDices from "../views/TheGameDices";
import TheDevTest from "../views/TheDevTest";
import TheMessenger from "@/views/TheMessenger";

const routes = [
  {
    path: "/",
    name: "TheMenu",
    component: TheMenu
  },
  {
    path: "/TheGameDices",
    name: "TheGameDices",
    component: TheGameDices
  },
  {
    path: "/TheDevTest",
    name: "TheDevTest",
    component: TheDevTest
  },
  {
    path: "/TheMessenger",
    name: "TheMessenger",
    component: TheMessenger
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/About.vue')
  //   }
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
