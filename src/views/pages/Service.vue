<template>
    <div>
        <h1>Szerviz</h1>
    </div>

    <div uk-grid>
        <img src="@/assets/szerviz.png"/>
        <p class="text">Az EnerSys értékesített termékeinek üzemeltetéséhez szolgáltatások széles választékát biztosítja.
        Képzett szakember gárdával, kiterjedt szervizhálózattal és optimalizált alkatrész ellátással biztosítja
        ügyfelei részére a zavartalan működést szerte a világban. Az EnerSys ügyfélbarát megközelítése a
        rugalmas, megbízható, szakértő közreműködés, amely partnereinek minden üzleti igényét kielégíti.
        </p>
    </div>
    <div><br>
        <h4 class="not-center"><strong>Szolgáltatások</strong></h4>
        <ul><strong>
            <li>Eseti javítás és karbantartás</li>
            <li>Megelőző, tervszerű, rendszeres karbantartás</li>
            <li>Tervezés és kivitelezés - töltőállomások, töltőhelyiségek</li>
            <li>Élettartam garancia és tervezhető költség előrejelzés</li>
            <li>Szakmai szaktanácsadás és konzultáció</li>
            <li>Vezetői jelentések, előrejelzések</li>
        </strong></ul>
    </div>

    <br>
    <div uk-grid>
        <p class="text" style="max-width: 60%">
        Az Ön dolga akkumulátorainak csúcsformában tartása.
        A megfelelő, előírások szerinti üzemeltetés és karbantartás tudja csak biztosítani az elvárt élettartamot és megbízható üzemvitelt.
        Mindig kövesse a gyártó használati utasításait és tartsa be az időszakos ellenőrzések előírásait.
        Az időszakos tevékenységek elvégzését bízza szakembereinkre, amellyel
        levesszük az Ön válláról a terhet. Mindig viseljen megfelelő védőfelszerelést, ha akkumulátorokkal foglalkozik!
        </p>
        <img src="@/assets/szerviz.png"/>
    </div>

    <h3><strong>Kapcsolat - Szerviz</strong></h3>
    <ContactCard :contacts = service> </ContactCard>
</template>

<style>
    h1, h2, h3 ,h4 ,h5 {
        text-align: center;
    }

    .not-center {
        text-align: left;
    }

    .text {
        max-width: 60%
    }
</style>

<script>
    import contacts from '@/repository/contactrepository.js';
    import ContactCard from '@/components/ContactCard.vue';
    export default {
        components: { ContactCard, },
        data() {
            return {
                service : contacts.service
            }
        }
    }
</script>