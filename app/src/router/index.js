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
      meta: { title: "Home" },
    },
    {
      path: "/services",
      name: "services",
      component: Services,
      meta: { title: "Services" },
    },
    {
      path: "/services/:id",
      name: "service",
      component: Service,
      meta: { title: "Service Details" },
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts,
      meta: { title: "Contacts" },
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: { title: "About" },
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

// Update document title dynamically
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Default Title";
  next();
});

export default router;
