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

            <a class="uk-navbar-item uk-logo" href="#">Logo</a>

            <ul class="uk-navbar-nav">
                <li>
                    <a href="#">
                        <span class="uk-icon uk-margin-small-right" uk-icon="icon: star"></span>
                        Features
                    </a>
                </li>
            </ul>

            <div class="uk-navbar-item">
                <div>Some <a href="#">Link</a></div>
            </div>

        </div>
    </nav>
    <frontpage/>    
    <router-view/>
    </div>
</template>

<script>
    import frontpage from '@/views/pages/Frontpage.vue'

    export default {
        name: 'ApplicationLayout',
        components: {frontpage, }
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