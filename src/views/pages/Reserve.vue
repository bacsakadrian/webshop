<template>
    <div>
        <h1 class="center">Helyhezkötött üzletág - Reserve</h1>
    </div>

    <img class="uk-align-center" src="@/assets/reserve_main.jpg"/>

    <p>
    Az EnerSys szükségáramforrás tárolókat gyárt azokhoz az ipari alkalmazásokhoz, ahol az energia ellátás folyamatossága megkerülhetetlen.<br>
    Az EnerSys, mint a világpiac vezető ipari akkumulátor gyártója világszerte az elsődleges választás az ügyfelek számára.<br>
    A több, mint száz éves múltra visszatekintő gyártási tapasztalata és innovatív technológiái minden műszaki igényt kielégítő termékválasztékot biztosítanak.<br>
    Világszerte több, mint 32 gyár és összeszerelő üzem, több, mint 100 országban jelenlévő leányvállalatai és kereskedelmi partnerei szolgálják ki az EnerSys ügyfeleit.<br>
    Mint a világ egyik legnagyobb ipari akkumulátor gyártója, az EnerSys élenjár az energiatárolási technológiákban és széles körben kínál hatékony megoldásokat a különféle alkalmazásokhoz.<br>
    A közismert PowerSafe, DataSafe, Genesis, Odyssey és Cyclon márkanevek széles körben használtak a telekommunikáció, az IT, a közműszolgáltató (áram, víz, gáz szolgáltatók és erőművek), az UPS, az általános elektronikai és speciális alkalmazások területén.
    </p>

    <h4 class="center">Forgalmazott márkák</h4>
    <img class="uk-align-center" src="@/assets/markak.png"/>
    <h3 class="center"><strong>Kapcsolat - Helyhezkötött üzletág</strong></h3>
    <div class="uk-text-center" uk-grid>
        <ContactCard :contacts = reserve> </ContactCard>
    </div>
    
</template>

<style>
    center {
        text-align: center
        }

</style>

<script>
    import contacts from '@/repository/contactrepository.js';
    import ContactCard from '@/components/ContactCard.vue';
        export default {
        components: { ContactCard, },
        data() {
            return {
                reserve : contacts.reserve
            }
        }
    }
</script>