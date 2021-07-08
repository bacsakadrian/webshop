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
                <a href="http://www.enersys.hu">Honlap</a>
            </div>
        </div>
    </div>
    <br>
    <div class="uk-container">
        <button class="uk-button uk-button-default" type="button" uk-toggle="target: #targonca-contacts">Targonca üzletág elérhetőségei</button>
        <button class="uk-button uk-button-default" type="button" uk-toggle="target: #helyuzletag-contacts">Helyhezkötött üzletág elérhetőségei</button>
        <button class="uk-button uk-button-default" type="button" uk-toggle="target: #szerviz-contacts">Szervíz üzletág elérhetőségei</button>
        <table id="szerviz-contacts" class="uk-table">
        <caption><h2>Szervíz üzletág elérhetőségei</h2></caption>
        <thead>
        <tr>
            <th>Név</th>
            <th>Fax</th>
            <th>Telefonszám</th>
            <th>Email cím</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Oszlár Zsolt</td>
            <td>+36 23 886 920</td>
            <td>+36 30 600 9771</td>
            <td><a href="mailto:zsolt.oszlar@hu.enersys.com">zsolt.oszlar@hu.enersys.com</a></td>
        </tr>
        <tr>
            <td>Simon Attila</td>
            <td>+36 23 886 921</td>
            <td>+36 30 334 0860</td>
            <td><a href="mailto:attila.simon@hu.enersys.com">attila.simon@hu.enersys.com</a></td>
        </tr>
        <tr>
            <td>Polgár Ildikó</td>
            <td>+36 23 886 918</td>
            <td></td>
            <td><a href="mailto:ildiko.polgar@hu.enersys.com">ildiko.polgar@hu.enersys.com</a></td>
        </tr>
    </tbody>
        </table>
        <table id="helyuzletag-contacts" class="uk-table">
    <caption><h2>Helyhezkötött üzletág elérhetőségei</h2></caption>
    <thead>
        <tr>
            <th>Név</th>
            <th>Fax</th>
            <th>Telefonszám</th>
            <th>Email cím</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Kun Mariann</td>
            <td>+36 23 886 926</td>
            <td>+36 30 866 6610</td>
            <td><a href="mailto:marianna.kun@hu.enersys.com">marianna.kun@hu.enersys.com</a></td>
        </tr>
        <tr>
            <td>Brachna Gábor</td>
            <td>+36 23 886 916</td>
            <td>+36 30 595 2062</td>
            <td><a href="mailto:gabor.brachna@hu.enersys.com">gabor.brachna@hu.enersys.com</a></td>
        </tr>
    </tbody>
</table>
        <table id="targonca-contacts" class="uk-table">
        <caption><h2>Targonca üzletág</h2></caption>
        <thead>
            <tr>
                <th>Név</th>
                <th>Fax</th>
                <th>Telefonszám</th>
                <th>Email cím</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Sziklai Tamás</td>
                <td>+36 23 886 914</td>
                <td>+36 30 267 2348</td>
                <td><a href="mailto:tamas.sziklai@hu.enersys.com">tamas.sziklai@hu.enersys.com</a></td>
            </tr>
            <tr>
                <td>Hoffer Péter</td>
                <td>+36 23 886 915</td>
                <td>+36 30 444 6628</td>
                <td><a href="mailto:peter.hoffer@hu.enersys.com">peter.hoffer@hu.enersys.com</a></td>
            </tr>
            <tr>
                <td>Magyar Dóra</td>
                <td>+36 23 886 924</td>
                <td>+36 30 338 0413</td>
                <td><a href="mailto:dora.magyar@hu.enersys.com">dora.magyar@hu.enersys.com</a></td>
            </tr>
            <tr>
                <td>Pozderka László</td>
                <td>+36 23 886 925</td>
                <td>+36 30 951 2147</td>
                <td><a href="mailto:laszlo.pozderka@hu.enersys.com">laszlo.pozderka@hu.enersys.com</a></td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<style>
    h1 {
        text-align: center;
    }
    h2 {
        text-align: center;
    }

    thead {
        text-align: center;
    }
</style>