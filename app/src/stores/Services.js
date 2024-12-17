import { defineStore } from "pinia";
import { useLocalStorage, useSessionStorage, useStorage } from "@vueuse/core";

export const useServiceStore = defineStore("service", {
  state: () => ({
    services: useStorage("services", []),
  }),
  getters: {
    getServices() {
      return this.services;
    },
  },
  actions: {
    addService(service) {
      this.services.push(service);
    },
  },
});
