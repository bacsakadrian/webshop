<template>
  <Form @submit="onSubmit">
    <RegistrationInput name="Vezetéknév" />

    <button>Küldés</button>
  </Form>
</template>


<script>
  import RegistrationInput from '@/components/RegistrationInput.vue'
  import { Form, } from 'vee-validate';
  export default {
    components : { Form, RegistrationInput },
  }
</script>