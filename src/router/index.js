import Vue from 'vue'
import VueRouter from 'vue-router'

import main from './modules/main.js'

Vue.use(VueRouter)

const routes = [
  ...main
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: () => ({ x: 0, y: 0 })
});

// router.beforeEach((to, from, next) => {
//   const routeExist = to.matched.some(record => record);
//   if (!routeExist) next({ name: "Main" });
//   else if (!to.meta.published) next({ name: "Main" });
//   else next();
// });

export default router
