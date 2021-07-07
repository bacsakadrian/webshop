<template>
    <div class="topbar uk-container uk-container-expand">
        <div class="uk-light">
            <ul class="topbarlist">
                    <li><router-link to="/">Főoldal</router-link></li>
                    <li><router-link to="kosar">Kosár</router-link></li>
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

            <div class="uk-navbar-item">
                <form action="javascript:void(0)">
                    <input class="uk-input uk-form-width-small" type="text" placeholder="Input">
                    <button class="uk-button uk-button-default">Button</button>
                </form>
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

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    li {
        padding-left: 5px;
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

<style lang="scss">
    @import "~uikit/dist/css/uikit.min.css"
</style>
