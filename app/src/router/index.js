import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../views/Home.vue");
const Services = () => import("../views/Services.vue");
const Service = () => import("../views/Service.vue");
const Contacts = () => import("../views/Contacts.vue");
const About = () => import("../views/About.vue");
const NotFound = () => import("../views/NotFound.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFound,
      meta: { title: "Page Not Found" },
    },
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
