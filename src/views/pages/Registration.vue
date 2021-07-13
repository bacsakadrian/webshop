<template>
  <div>
    <Form @submit="onSubmit" :validation-schema="schema">
      <RegistrationInput
        name="firstname"
        type="text"
        label="Vezetéknév"
        placeholder="Vezetéknév"
      />
      <RegistrationInput
        name="lastname"
        type="text"
        label="Keresztnév"
        placeholder="Keresztnév"
      />
      <RegistrationInput
        name="email"
        type="email"
        label="E-mail cím"
        placeholder="E-mail cím"
      />
      <RegistrationInput
        name="password"
        type="password"
        label="Jelszó"
        placeholder="Jelszó"
      />
      <RegistrationInput
        name="confirm_password"
        type="password"
        label="Jelszó mégegyszer"
        placeholder="Jelszó mégegyszer"
      />
      <RegistrationInput
        name="company_name"
        type="text"
        label="Cég neve"
        placeholder="Cég neve"
      />
      <RegistrationInput
        name="company_country"
        type="number"
        label="Ország"
        placeholder="Ország"
      />
      <RegistrationInput
        name="company_zip"
        type="number"
        label="Irányítószám"
        placeholder="Irányítószám"
      />
      <RegistrationInput
        name="company_city"
        type="text"
        label="Város"
        placeholder="Város"
      />
      <RegistrationInput
        name="company_address"
        type="text"
        label="Cím"
        placeholder="Cím"
      />
      <RegistrationInput
        name="company_vat_number"
        type="number"
        label="Adószám"
        placeholder="Adószám"
      />
      <RegistrationInput
        name="company_eu_vat_number"
        type="number"
        label="Európai Adószám"
        placeholder="Európai Adószám"
      />
      <button class="uk-button uk-button-primary" type="submit">Regisztráció</button>
    </Form>
  </div>
</template>

<script>
import { Form } from "vee-validate";
import * as Yup from "yup";
import RegistrationInput from "@/components/RegistrationInput.vue";

export default {
  name: "App",
  components: {
    RegistrationInput,
    Form,
  },
  setup() {
    function onSubmit(values) {
      alert(JSON.stringify(values, null, 2));
    }

    const schema = Yup.object().shape({
      firstname: Yup.string().required(),
      lastname: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().min(8).matches('.*[a-z].*').matches('.*[A-Z].*').matches('.*[1-9].*').required(),
      confirm_password: Yup.string()
        .required()
        .oneOf([Yup.ref("password")], "A jelszavak nem egyeznek meg"),
      company_name: Yup.string().required(),
      company_country : Yup.number().required(),
      company_zip : Yup.number().required(),
      company_city : Yup.string().required(),
      company_address : Yup.string().required(),
      company_vat_number : Yup.number().required(),
      company_eu_vat_number : Yup.number().required(),
    })

    return {
      onSubmit,
      schema,
    };
  },
};
</script>

<style>

</style>
