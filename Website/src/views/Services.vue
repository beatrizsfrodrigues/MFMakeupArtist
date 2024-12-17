<template>
  <div class="mainBody">
    <h1>Serviços</h1>
    <div v-for="service in this.services" class="serviceBorder">
      <div class="serviceBorder2">
        <img src="../assets/otherPics/adorn.svg" class="adorn1" alt="" />
        <div class="serviceContent">
          <h3 class="serviceName">{{ service.name }}</h3>
          <img :src="service.mainPicture" alt="imagem" class="serviceImg" />
          <button class="button">Saber mais</button>
        </div>
        <img src="../assets/otherPics/adorn.svg" class="adorn2" alt="" />
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
      services: [],
    };
  },
  async created() {
    if (this.services == undefined || this.services == "") {
      this.services = this.serviceStore.getServices;
    }
    console.log(this.services);
  },
};
</script>

<style lang="scss" scoped></style>
