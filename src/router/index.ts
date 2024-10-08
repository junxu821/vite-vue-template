import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  { path: "/*", redirect: "/" },
  {
    path: '/NotFound',
    component: () => import("@/views/NotFound.vue"),
  },
  {
    path: '/HelloWorld',
    component: () => import("@/views/HelloWorld.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
export default router;
