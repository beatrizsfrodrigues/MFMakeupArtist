import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Services from "../views/Services.vue";
import Contacts from "../views/Contacts.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      path: "/contacts",
      name: "contacts",
      component: Contacts,
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
