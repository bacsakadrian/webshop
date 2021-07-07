<template>
    <router-link to="/">.</router-link>
    <router-link to="kosar">Kosár</router-link>
    <div class="uk-container uk-container-expand"></div>
        <div uk-grid>
            <div class="uk-width-1-1@s uk-width-1-2@m">
            </div>
    <div class="uk-width-1-1@s uk-width-1-2@m">
    </div> 
  </div>

  <h1 style="font-family: Montserrat"> Montserrat </h1>
  <h1 style="font-family: Roboto"> Roboto </h1>

  <frontpage></frontpage>
    <router-view/>

</template>

<script>
    import frontpage from '@/views/pages/Frontpage.vue'

    export default {
        name: 'ApplicationLayout',
        components: {frontpage, }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
</style>

<style lang="scss">
    @import "~uikit/dist/css/uikit.min.css"
</style>
