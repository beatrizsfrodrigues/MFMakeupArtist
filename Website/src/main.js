import { createApp } from "vue";
import { createPinia } from "pinia";
import VueFeather from "vue-feather";
import App from "./App.vue";
import router from "./router";
import json from "./data.json";
import { useServiceStore } from "@/stores/Services";

const app = createApp(App);

app.component(VueFeather.name, VueFeather);

app.use(createPinia());
app.use(router);

app.mount("#app");

localStorage.clear();

const serviceStore = useServiceStore();

let services = json.services;
let service = serviceStore.getServices;
services.forEach((srv) => {
  if (service.find((s) => s.id == srv.id)) {
    console.log("services added");
  } else {
    serviceStore.addService(srv);
  }
});
