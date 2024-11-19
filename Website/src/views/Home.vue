<template>
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" id="back">
    <ellipse
      id="back2"
      cx="18"
      cy="23"
      rx="10"
      ry="4"
      transform="rotate(20 40 64)"
    />
    <ellipse
      id="back1"
      cx="16"
      cy="24"
      rx="10"
      ry="4"
      transform="rotate(20 40 60)"
    />
  </svg>

  <div id="basicInfo">
    <div id="left">
      <div>
        <h1 class="title">Mónica Ferreira</h1>
        <img id="pincel" src="../assets/otherPics/pincel.svg" alt="" />
        <img id="batom" src="../assets/otherPics/batom.svg" alt="" />
      </div>
      <p>
        O meu nome é Mónica Ferreira, tenho 37 anos e desde pequena que sou
        apaixonada por maquilhagem. Apesar de, inicialmente, ter enveredado por
        outra área, sempre maquilhei familiares e amigas e em 2013 decidi
        formar-me como Maquilhadora Profissional, na escola Formandum com a
        formadora Paula Lage e desde então nunca mais parei…
      </p>
    </div>
    <img id="selfPic" src="../assets/otherPics/monica.png" alt="" />
  </div>
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="lines">
    <line x1="-10" y1="80" x2="150" y2="20" />
    <line x1="-10" y1="50" x2="100" y2="00" />
    <line x1="-10" y1="10" x2="100" y2="20" />
  </svg>
  <div id="awards">
    <img id="pincel" src="../assets/awards/casamentosPT2.png" alt="" />
    <img id="pincel" src="../assets/awards/zankyou.png" alt="" />
    <img id="pincel" src="../assets/awards/weddingAwards.png" alt="" />
    <img id="pincel" src="../assets/awards/casamentosPT.png" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style>
@import "../assets/css/home.css";
</style>
