<template>
  <div class="mainBody">
    <h1>{{ service.name }}</h1>
    <div class="serviceDiv">
      <div v-if="service.pics.length == 1">
        <img
          :src="service.pics[0]"
          alt="Imagem do serviço"
          class="serviceImg"
        />
      </div>
      <div v-else class="slider">
        <div class="slide-track">
          <div class="slide" v-for="img in service.pics">
            <img :src="img" class="serviceImg" alt="" />
          </div>
          <div class="slide" v-for="img in service.pics">
            <img :src="img" class="serviceImg" alt="" />
          </div>
        </div>
      </div>

      <p>{{ service.description }}</p>
    </div>
    <button class="button">Fazer marcação</button>
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
      service: {},
    };
  },
  async created() {
    if (this.services == undefined || this.services == "") {
      this.services = this.serviceStore.getServices;
    }

    this.service = this.services.find(
      (service) => service.id == this.$route.params.id
    );
  },
};
</script>

<style lang="scss" scoped></style>
