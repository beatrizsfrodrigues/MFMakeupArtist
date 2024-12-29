<template>
  <div v-if="isMobile">
    <div class="horizontal" id="navMobile">
      <router-link
        to="/"
        v-bind:class="{ active: isActive }"
        v-on:click="closeMenu"
        class="logo"
        ><img src="../assets/otherPics/logo_dark.svg" alt="" id="logo"
      /></router-link>
      <button
        class="btnMenu"
        v-bind:class="{ active: isActive }"
        v-on:click="openMenu"
      >
        <vue-feather type="menu" class="navBtn"></vue-feather>
      </button>
    </div>
    <div id="navContent">
      <button
        class="btnClose"
        v-bind:class="{ active: isActive }"
        v-on:click="closeMenu"
      >
        <vue-feather type="x" class="navBtn"></vue-feather>
      </button>
      <div class="navLinks2">
        <router-link
          to="/"
          class="navLink"
          v-bind:class="{ active: isActive }"
          v-on:click="closeMenu"
          >Início</router-link
        >
        <img
          src="https://res.cloudinary.com/dsdq3yrz5/image/upload/v1725545888/portfolio/line_vnqx1r.svg"
          alt=""
          class="line"
        />
        <router-link
          to="/services"
          class="navLink"
          v-bind:class="{ active: isActive }"
          v-on:click="closeMenu"
          >Serviços</router-link
        >
        <img
          src="https://res.cloudinary.com/dsdq3yrz5/image/upload/v1725545888/portfolio/line_vnqx1r.svg"
          alt=""
          class="line"
        />
        <router-link
          to="/contacts"
          class="navLink"
          v-bind:class="{ active: isActive }"
          v-on:click="closeMenu"
          >Contactos</router-link
        >
        <img
          src="https://res.cloudinary.com/dsdq3yrz5/image/upload/v1725545888/portfolio/line_vnqx1r.svg"
          alt=""
          class="line"
        />
        <router-link
          to="/about"
          class="navLink"
          v-bind:class="{ active: isActive }"
          v-on:click="closeMenu"
          >Sobre mim</router-link
        >
      </div>
    </div>
  </div>
  <div v-else id="nav" class="horizontal">
    <router-link to="/" class="logo"><p>Beatriz</p></router-link>

    <div class="horizontal" id="navLinks">
      <router-link to="/" class="navLink"><p>Início</p></router-link>
      <router-link to="/services" class="navLink"><p>Serviços</p></router-link>
      <router-link to="/contacts" class="navLink"><p>Contactos</p></router-link>
      <router-link to="/about" class="navLink"><p>Sobre mim</p></router-link>
    </div>
  </div>
</template>

<script>
import { useMediaQuery } from "@vueuse/core";

export default {
  setup() {
    const isMobile = useMediaQuery("(max-width: 800px)");
    return { isMobile };
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    openMenu() {
      this.isActive = true;
      document.getElementById("navContent").style.right = "0";
    },

    closeMenu() {
      this.isActive = false;
      document.getElementById("navContent").style.right = "-100%";
    },
  },
};
</script>

<style>
@import "../assets/css/nav.css";
</style>
