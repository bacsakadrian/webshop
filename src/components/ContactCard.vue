<template>
        <div v-for="c in contacts" :key="c" class="uk-card uk-card-default uk-width-1-2@m">
            <div class="uk-card-header">
                <div class="uk-grid-small uk-flex-middle" uk-grid>
                    <div class="uk-width-expand">
                        <h3 class="uk-card-title uk-margin-remove-bottom">{{ c.name }}</h3>
                    </div>
                </div>
            </div>
            <div class="uk-card-body">
                <p>{{ c.fax }}</p>
                <p>{{ c.mobile }}</p>
                <p><a href="'mailto:' + c.email">{{ c.email }}</a></p>
            </div>
        </div>
</template>

<script>
    export default {
        props: [ 'contacts' ]
    }
</script>