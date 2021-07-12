<template>
  <div id="app">
      <label for="name"> {{ name }} </label>
      <Field class="uk-input" :name="name" :rules="validateEmail" />
      <ErrorMessage name="email" />
  </div>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate';

export default {
  props: {
  name: String 
  },
  components: {
    Field,
    ErrorMessage,
  },
  methods: {
    onSubmit(values) {
      alert(JSON.stringify(values, null, 2));
    },
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return 'This field is required';
      }

      // if the field is not a valid email
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return 'This field must be a valid email';
      }

      // All is good
      return true;
    },
  },
};
</script>