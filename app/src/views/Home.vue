<template>
  <div class="mainBody">
    <div id="homeDiv">
      <img
        id="pfp"
        src="https://res.cloudinary.com/dhp2bgd7u/image/upload/v1735495404/pfp_f7jemu.png"
        alt="Profile Image"
      />
      <h1>Maquilhadora Profissional</h1>
      <h2>Mónica Ferreira</h2>
      <p>
        Maquilhadora Profissional desde 2013. Especialista em maquilhagem de
        noiva.
      </p>
      <div class="socialDiv">
        <a href="https://www.facebook.com/mfmakeupartist/">
          <vue-feather class="socialIcon" type="facebook"></vue-feather>
        </a>
        <a href="https://www.instagram.com/mf_makeup_artist/">
          <vue-feather class="socialIcon" type="instagram"></vue-feather>
        </a>
      </div>
    </div>
    <div class="section">
      <h1>Galeria</h1>
      <div class="slider">
        <div class="slide-track">
          <div class="slide" v-for="img in this.images">
            <img :src="img" class="serviceImg" alt="" />
          </div>
          <div class="slide" v-for="img in this.images">
            <img :src="img" class="serviceImg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <h1>Serviços</h1>
      <div class="cards">
        <div v-for="service in this.services" class="serviceBorder">
          <div class="serviceBorder2">
            <img src="../assets/otherPics/adorn.svg" class="adorn1" alt="" />
            <div class="serviceContent">
              <h3 class="serviceName">{{ service.name }}</h3>
              <img :src="service.mainPicture" alt="imagem" class="serviceImg" />
              <router-link
                :to="{
                  name: 'service',
                  params: {
                    id: service.id,
                  },
                }"
              >
                <button class="button">Saber mais</button>
              </router-link>
            </div>
            <img src="../assets/otherPics/adorn.svg" class="adorn2" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <h1>Selos de Recomendação</h1>
      <div id="awardsDiv">
        <div>
          <img
            src="../assets/awards/casamentosPT.png"
            alt="casamentosPT"
            class="awards"
          />
          <img
            src="../assets/awards/casamentosPT2.png"
            alt="casamentosPT2"
            class="awards"
          />
        </div>
        <div>
          <img
            src="../assets/awards/weddingAwards.png"
            alt="weddingAwards"
            class="awards"
          />
          <img
            src="../assets/awards/zankyou.png"
            alt="zankyou"
            class="awards"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useServiceStore } from "../stores/Services.js";
export default {
  setup() {
    const serviceStore = useServiceStore();
    return { serviceStore };
  },
  data() {
    return {
      images: [
        "https://res.cloudinary.com/dhp2bgd7u/image/upload/v1734460194/servicePics/fotografia/jhnlbj31kounxdvr33xd.jpg",
        "https://res.cloudinary.com/dhp2bgd7u/image/upload/v1734460189/servicePics/casamento/ko2n2q00i91bmiqbjzhs.jpg",
        "https://res.cloudinary.com/dhp2bgd7u/image/upload/v1734460185/servicePics/casamento/u2zpk4eq5voua4rxpqre.jpg",
        "https://res.cloudinary.com/dhp2bgd7u/image/upload/v1734460187/servicePics/casamento/oybmxx3vdw22z5c8zylm.jpg",
        "https://res.cloudinary.com/dhp2bgd7u/image/upload/v1734460201/servicePics/yu1fgrff9iwruxe8su2y.png",
        "https://res.cloudinary.com/dhp2bgd7u/image/upload/v1734460200/servicePics/social/cyv5nh9tq01caigoabtt.jpg",
        "https://res.cloudinary.com/dhp2bgd7u/image/upload/v1734460193/servicePics/fotografia/fwvpgvsqaqsofivfaxf6.jpg",
      ],
      services: [],
    };
  },
  async created() {
    if (this.services == undefined || this.services == "") {
      this.services = this.serviceStore.getServicesMain;
    }
  },
};
</script>

<style>
@import "../assets/css/home.css";
</style>
