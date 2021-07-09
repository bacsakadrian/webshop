<template>
    <table class="uk-table">
        <caption><h2>{{ this.title }} üzletág elérhetőségei</h2></caption>
        <thead>
        <tr>
            <th>Név</th>
            <th>Fax</th>
            <th>Telefonszám</th>
            <th>Email cím</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="c in contact" :key="c">
            <td>{{ c.name }}</td>
            <td><a :href="'tel:' + c.fax">{{ c.fax }}</a></td>
            <td><a :href="'tel:' + c.mobile">{{ c.mobile }}</a></td>
            <td><a :href="'mailto:' + c.email">{{ c.email }}</a></td>
        </tr>
    </tbody>
        </table>
</template>

<script>
    export default {
        props: ['contact', 'title']
    }
</script>