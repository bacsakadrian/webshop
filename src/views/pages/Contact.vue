<template>
    <div>
    <h1>Kapcsolat</h1>
        <div uk-grid>
            <div class="uk-width-2-3@l uk-width-1-1@s">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2697.0050360457653!2d18.89049771588337!3d47.47033130537436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dfe4862f9d51%3A0x2cc8ee251e66de42!2sEnersys+Hung%C3%A1ria+Kft.!5e0!3m2!1shu!2shu!4v1565856259939!5m2!1shu!2shu"
                        width="100%" height="320" frameborder="0" style="border: 0;"
                        allowfullscreen="allowfullscreen"></iframe>
            </div>
            <div>
                <strong>Enersys Hungária Kft.</strong><br>
                2040, Budaörs Gyár utca 2.<br>
                Tel.:+36 23 886 910<br>
                Fax:+36 23 886 911<br>
                Szerviz Tel.:+36 23 886 918<br>
                Szerviz Fax:+36 23 886 919<br>
                <a href="http://www.enersys.hu">http://www.enersys.hu</a>
            </div>
        </div>
    </div>
    <br>

    <ul class="uk-subnav" uk-switcher>
            <li><a href="#">Targonca üzletág</a></li>
            <li><a href="#">Hely üzletág</a></li>
            <li><a href="#">Szerviz üzletág</a></li>
    </ul>

    <ul class="uk-switcher uk-margin">
        <li><ContactTable id="targonca-contacts" title="Targonca" :contact = motive /></li>
        <li><ContactTable id="helyuzletag-contacts" title="Helyhezkötött" :contact = "reserve" /></li>
        <li><ContactTable id="szerviz-contacts" title="Szerviz" :contact = "service" /></li>
    </ul>

</template>

<style>
    h1, h2, h3 ,h4 ,h5 {
        text-align: center;
    }

    thead {
        text-align: center;
    }
</style>

<script>
    import contacts from '@/repository/contactrepository.js';
    import ContactTable from '@/components/ContactTable.vue';
    export default {
        components: { ContactTable, },
        data() {
            return {
                reserve : contacts.reserve,
                motive : contacts.motive,
                service : contacts.service
                }
            }
    }
</script>
