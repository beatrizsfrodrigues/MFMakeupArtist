<template>
  <div class="mainBody">
    <h1>Contacta-me!</h1>
    <form id="contactsForm" action="">
      <label for="">Tipo de Serviço</label>
      <select class="input" id="cars" name="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option>
      </select>
      <label for="">Nome</label>
      <input class="input" type="text" />
      <label for="">Número de telemóvel</label>
      <input
        type="tel"
        id="phone"
        class="input"
        name="phone"
        placeholder="Ex: 912345678"
        pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
        required
      />
      <label for="">Notas</label>
      <textarea class="input" name="" id=""></textarea>
      <button>Enviar</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import "../assets/css/contacts.css";
</style>
