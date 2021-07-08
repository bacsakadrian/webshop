<template>
    <div class="uk-grid uk-align-center wrapper">
        <div v-for="n in 3" :key="n" class="image-wrapper uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>

        <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
            <li class="uk-cover-container uk-width-large">
                <img src="@/assets/fish.jpg" alt="">
                <div class="uk-position-center uk-panel"><h1>1</h1></div>
        </li>
            <li class="uk-cover-container uk-width-large">
                <img src="@/assets/fish.jpg" alt="">
                <div class="uk-position-center uk-panel"><h1>2</h1></div>
        </li>
            <li class="uk-cover-container uk-width-large">
                <img src="@/assets/fish.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>3</h1></div>
        </li>
    </ul>
        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

        </div>
    </div>
    
</template>

<style>
    .wrapper {
        height: 100vh;
    }

    .image-wrapper {
        border: 1px solid #e5e5e5;
        padding: 5px;
        img {
            border: 5px solid #fff;
        }

        &:hover {
            border-color: #ccc;
        }
    }
</style>
