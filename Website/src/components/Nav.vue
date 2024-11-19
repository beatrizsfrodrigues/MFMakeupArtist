<template>
  <div id="nav">
    <router-link to="/"
      ><img id="logo" src="../assets/otherPics/logo.svg" alt=""
    /></router-link>
    <div id="links">
      <router-link to="/"><p class="navLink">Início</p></router-link>
      <router-link to="/services"> <p class="navLink">Serviços</p></router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import "../assets/css/nav.css";
</style>
