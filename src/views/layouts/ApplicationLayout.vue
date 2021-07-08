<template>
        <div class="topbar uk-container uk-container-expand">
        <div class="uk-light">
            <ul class="topbarlist">
                    <li><a href="http://www.enersys.com/">ENERSYS HOME</a></li>
                    <li><a href="http://www.enersys-emea.com/">ENERSYS EMEA HOME</a></li>
                    <li><router-link to="magyarorszagi-cegtortenet">MAGYARORSZÁGI CÉGTÖRTÉNET</router-link></li>
                    <li><router-link to="kapcsolat">KAPCSOLAT</router-link></li>
            </ul>
        </div>
    </div>
    <div class="uk-container uk-container-expand">
        <nav style="background: white" class="uk-navbar-container" uk-navbar>
        <div class="uk-navbar-left">

            <router-link class="uk-navbar-item" to="/">Enersys LOGO</router-link>
        </div>

        <div class="uk-navbar-right">

            <ul class="uk-navbar-nav">
                <li>
                    <router-link to="/">
                        Kezdőlap
                    </router-link>
                </li>

                <li class="uk-navbar-item">
                    <router-link to="targonca-uzletag-motive">
                        Targonca üzletág - Motive
                    </router-link>
                </li>

                <li class="uk-navbar-item">
                    <router-link to="helyhezkotott-uzletag-reserve">
                        Helyhezkötött üzletág - Reserve
                    </router-link>
                </li>

                <li class="uk-navbar-item">
                    <router-link to="szerviz">
                        Szerviz
                    </router-link>
                </li>
            </ul> 

        </div>
    </nav>
    <router-view/>
    <div class="footer"> © 2019, EnerSys Hungária Kft. Minden jog fenntartva. </div> 
    </div>
</template>

<script>

    export default {
        name: 'ApplicationLayout',
        components: { }
    }
</script>

<style lang="scss">
    @import "uikit/src/scss/variables-theme.scss";
    @import "uikit/src/scss/mixins-theme.scss";
    @import "uikit/src/scss/uikit-theme.scss";
</style>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    li {
        padding-left: 15px;
    }
    .topbar { 
        color:white;
        background-color: darkgrey
    }
    .topbarlist {
        display: flex; 
        list-style: none; 
        margin-bottom: 0px;
    }

    ul.topbarlist {
        padding-left: 0px;
    }

</style>