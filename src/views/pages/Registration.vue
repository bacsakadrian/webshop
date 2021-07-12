<template> 
  <div style="text-align: center">
    <h1>Regisztráció</h1>
  </div>
  <Form @submit="onSubmit"> 
        <RegistrationInput type="text" name="Vezetéknév" />
        <RegistrationInput type="text" name="Keresztnév" />
        <RegistrationInput type="password" name="Jelszó" />
      <button class="uk-button-primary" type="submit">Küldés</button>
    </Form>
</template>

<script>
import RegistrationInput from '@/components/RegistrationInput.vue'
import { Form } from 'vee-validate';
  export default {
    components: { RegistrationInput, Form },
  }
</script>