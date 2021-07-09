<template>
    <div class="uk-child-width-1-3@m uk-child-width-1-1@s uk-text-center" uk-grid>
        <div v-for="c in contacts" :key="c">
            <div class="uk-card uk-card-default">
                <div class="uk-card-header">
                    {{ c.name }}
                </div>
                <div class="uk-card-body">
                    <p><a :href="'tel:' + c.fax">{{ c.fax }}</a></p>
                    <p><a :href="'tel:' + c.mobile">{{ c.mobile }}</a></p>
                    <p><a :href="'mailto:' + c.email">{{ c.email }}</a></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [ 'contacts' ]
    }
</script>