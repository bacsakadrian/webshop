<template>
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="center: true">

    <ul class="uk-slider-items uk-grid">
        <li class="uk-width-1-1">
            <div class="uk-panel">
                <img src="@/assets/fish.jpg" alt="">
                <div class="uk-position-center uk-panel"><h1>1</h1></div>
            </div>
        </li>
        <li class="uk-width-1-1">
            <div class="uk-panel">
                <img src="@/assets/fish.jpg" alt="">
                <div class="uk-position-center uk-panel"><h1>2</h1></div>
            </div>
        </li>
        <li class="uk-width-1-1">
            <div class="uk-panel">
                <img src="@/assets/fish.jpg" alt="">
                <div class="uk-position-center uk-panel"><h1>3</h1></div>
            </div>
        </li>
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

</div>
</template>

<style>
    .wrapper {
        height: 100vh;
    }   
</style>
