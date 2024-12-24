<template>
  <div id="footer">
    <img
      id="footerLogo"
      src="../assets/otherPics/logo.svg"
      alt=""
      width="200"
    />
    <div>
      <router-link
        to="/"
        class="navLink"
        v-bind:class="{ active: isActive }"
        v-on:click="closeMenu"
        >Início</router-link
      >
      <router-link
        to="/services"
        class="navLink"
        v-bind:class="{ active: isActive }"
        v-on:click="closeMenu"
        >Serviços</router-link
      >
      <router-link
        to="/contacts"
        class="navLink"
        v-bind:class="{ active: isActive }"
        v-on:click="closeMenu"
        >Contactos</router-link
      >
      <router-link
        to="/about"
        class="navLink"
        v-bind:class="{ active: isActive }"
        v-on:click="closeMenu"
        >Sobre mim</router-link
      >
    </div>
    <p id="rights">© 2025 - All rights reserved</p>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import "../assets/css/footer.css";
</style>
