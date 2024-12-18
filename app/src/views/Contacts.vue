<template>
  <div class="mainBody">
    <h1>Contacta-me!</h1>
    <form id="contactsForm" action="">
      <label for="servicesType">Tipo de Serviço</label>
      <select class="input" name="servicesType">
        <option v-for="service in this.services" :value="service.name">
          {{ service.name }}
        </option>
        <option value="outro">Outro</option>
      </select>
      <label for="name">Nome</label>
      <input class="input" type="text" name="name" />
      <label for="phoneNumber">Número de telemóvel</label>
      <input
        type="tel"
        id="phone"
        class="input"
        name="phoneNumber"
        placeholder="Ex: 912345678"
        pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
        required
      />
      <label for="notes">Notas</label>
      <textarea class="input" name="notes" id="" rows="8" cols="50"></textarea>
      <button class="button">Enviar</button>
    </form>
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
  },
};
</script>

<style>
@import "../assets/css/contacts.css";
</style>
