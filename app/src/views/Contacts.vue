<template>
  <div class="mainBody">
    <h1>Contacta-me!</h1>
    <form
      id="contactsForm"
      @submit.prevent="sendEmail"
      method="post"
      enctype="text/plain"
    >
      <label for="servicesType">Tipo de Serviço</label>
      <select
        v-model="service_type"
        class="input select"
        name="servicesType"
        required
      >
        <option
          class="optionSelect"
          v-for="service in this.services"
          :value="service.name"
        >
          {{ service.name }}
        </option>
        <option class="optionSelect" value="outro">Outro</option>
      </select>
      <label for="name">Nome</label>
      <input v-model="name" class="input" type="text" name="name" required />
      <label for="phoneNumber">Número de telemóvel</label>
      <input
        type="tel"
        v-model="number"
        id="phone"
        class="input"
        name="phoneNumber"
        pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
        required
      />
      <label for="notes">Notas</label>
      <textarea
        class="input"
        v-model="notes"
        name="notes"
        id=""
        rows="8"
        cols="50"
      ></textarea>
      <button @click="sendEmail" class="button">Enviar</button>
    </form>
  </div>
</template>

<script>
import { useServiceStore } from "../stores/Services.js";
import emailjs from "emailjs-com";
export default {
  setup() {
    const serviceStore = useServiceStore();
    return { serviceStore };
  },
  data() {
    return {
      services: [],
      service_type: "",
      name: "",
      number: "",
      notes: "",
      serviceKey: import.meta.env.VITE_APP_SERVICE_KEY,
      templateKey: import.meta.env.VITE_APP_TEMPLATE_KEY,
      userKey: import.meta.env.VITE_APP_USER_KEY,
    };
  },
  async created() {
    if (this.services == undefined || this.services == "") {
      this.services = this.serviceStore.getServices;
    }
  },
  methods: {
    sendEmail() {
      let from_notes = this.notes;
      if (from_notes.length == 0) {
        from_notes = "[Nenhuma nota]";
      }

      const templateParams = {
        serviceType: this.service_type,
        from_name: this.name,
        from_numb: this.number,
        from_notes: this.notes,
      };

      if (this.service_type && this.name && this.number) {
        emailjs
          .send(this.serviceKey, this.templateKey, templateParams, this.userKey)
          .then(
            (response) => {
              console.log(
                "Email sent successfully:",
                response.status,
                response.text
              );
            },
            (error) => {
              console.error("Failed to send email:", error);
            }
          );

        this.name = "";
        this.service_type = "";
        this.number = "";
        this.notes = "";
      } else {
        console.log("No email sent");
      }
    },
  },
};
</script>

<style>
@import "../assets/css/contacts.css";
</style>
