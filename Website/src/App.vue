<script setup>
import { RouterLink, RouterView } from "vue-router";
import Home from "./views/Home.vue";
import NavB from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <NavB />
  <router-view />
  <Footer />
</template>

<style>
@import "./assets/css/base.css";
</style>
