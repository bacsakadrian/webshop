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
    <router-view/>
</template>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
</style>

<style lang="less">
    @import "../../node_modules/uikit/src/less/uikit.less";
</style>