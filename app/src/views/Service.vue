<template>
  <div class="mainBody">
    <h1>{{ service.name }}</h1>
    <div class="serviceDiv">
      <img
        :src="service.mainPicture"
        alt="Imagem do serviço"
        class="serviceImg"
      />
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
