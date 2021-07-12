<template>
  <div class="uk-margin">
    <label class="uk-form-label" :for="name"> {{ name }} </label>
    <Field class="uk-input" :name="name" :rules="empty" :type="type" :id="name" :placeholder="name" required="true"/>
    <ErrorMessage class="uk-text-danger" :name="name" />
  </div>
</template>

<script>
  import {  Field, ErrorMessage } from 'vee-validate';
  export default {
    components: { Field, ErrorMessage },
    props: {
      name : String,
      type : String,
    },
    methods: {
      empty(value) {
        if(!value) {
          return "Kötelező a mező kitöltése"  
        }
        return true;
      }
    }
  }
</script>