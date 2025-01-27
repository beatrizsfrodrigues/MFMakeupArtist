import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import Home from "../views/Home.vue";
import Services from "../views/Services.vue";
import Service from "../views/Service.vue";
import Contacts from "../views/Contacts.vue";
import About from "../views/About.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/services",
      name: "services",
      component: Services,
    },
    {
      path: "/services/:id",
      name: "service",
      component: Service,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    // {
    //   path: "/:catchAll(.*)",
    //   name: "not-found",
    //   component: NotFound,
    //   meta: { title: "Page Not Found" },
    // },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
