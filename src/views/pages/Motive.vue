<template>
    <div>
        <h1>Targonca üzletág - Motive</h1>
        <img class="uk-align-center" src="@/assets/chargers.jpg"/>
    </div>
    <p>
    Ahol mobil meghajtó energiára van szükség ott az EnerSys minden igényt kielégítő energiatárolási megoldásokat kínál.
    Világszerte több, mint 32 gyár és összeszerelő üzem, több, mint 100 országban jelenlévő leányvállalata vagy kereskedelmi partnere szolgálják ki az EnerSys ügyfeleit.
    Mint a világ egyik legnagyobb ipari akkumulátor gyártója, az EnerSys élenjár az energiatárolási technológiákban és széles körben kínál hatékony megoldásokat a különféle alkalmazásokhoz.
    Gyártmánycsaládjainak, mint a Hawker, a Fiamm Motive Power és az Energia főbb alkalmazási területei: az anyagmozgatás – elsősorban elektromos targoncák; a mobil berendezések energiaellátása – személyemelők, takarítógépek stb.; egyéb speciális, ciklikus igénybevételű alkalmazások – rokkantkocsi, golfkocsi stb. és a hibrid üzemű berendezések.
    </p>
    <h3><strong>Kapcsolat - targonca üzletág</strong></h3>
    <ContactCard :contacts = motive> </ContactCard>
</template>


<style>
        h1, h2, h3 ,h4 ,h5 {
        text-align: center;
    }
</style>

<script>
    import contacts from '@/repository/contactrepository.js';
    import ContactCard from '@/components/ContactCard.vue';
    export default {
        components: { ContactCard, },
        data() {
            return {
                motive : contacts.motive
            }
        }
    }
</script>