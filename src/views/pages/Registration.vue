<template>
<div><h1 class="text-middle">Regisztráció</h1></div>
  <Form @submit="onSubmit" :validation-schema="schema">
    <div class="uk-child-width-expand@s uk-text-center" uk-grid>
      <div>
        <div class="uk-card uk-card-default">
          <div class="uk-card-header">
            <h3>Felhasználó adatai</h3>
          </div>
          <div class="uk-card-body">
            <RegistrationInput
            name="firstname"
            type="text"
            label="Vezetéknév"
            />  
            <RegistrationInput
            name="lastname"
            type="text"
            label="Keresztnév"
            />
            <RegistrationInput
            name="email"
            type="email"
            label="E-mail cím"
            />
            <RegistrationInput
            name="password"
            type="password"
            label="Jelszó"
            />
            <RegistrationInput
            name="confirm_password"
            type="password"
            label="Jelszó mégegyszer"
            />
          </div>
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-default">
          <div class="uk-card-header">
            <h3>Céges adatok</h3>
          </div>
          <div class="uk-card-body">
                  <RegistrationInput
        name="company_name"
        type="text"
        label="Cég neve"
      />
      <RegistrationInput
        name="company_country"
        type="number"
        label="Ország"
      />
      <RegistrationInput
        name="company_zip"
        type="number"
        label="Irányítószám"
      />
      <RegistrationInput
        name="company_city"
        type="text"
        label="Város"
      />
      <RegistrationInput
        name="company_address"
        type="text"
        label="Cím"
      />
      <RegistrationInput
        name="company_vat_number"
        type="number"
        label="Adószám"
      />
      <RegistrationInput
        name="company_eu_vat_number"
        type="number"
        label="Európai Adószám"
      />
          </div>
        </div>
      </div>
    </div>
    <div class="uk-margin">
      <div class="uk-text-danger text-middle">Minden mező kitöltése kötelező!</div>
      <button class="uk-width-1-1 uk-button uk-button-primary" type="submit">Regisztráció</button>
    </div>
  </Form>
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
  .text-middle {
    text-align: center
  }
</style>
