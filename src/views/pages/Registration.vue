<template>
    <div class="uk-align-center">
        <h1>Regisztráció</h1>
<form class="uk-form-horizontal uk-margin-large">

    <div class="uk-margin">
        <label class="uk-form-label" for="firstname">Név</label>
        <div class="uk-form-controls">
            <input class="uk-width-1-2 uk-input" id="firstname" type="text" placeholder="Vezetéknév" required>
            <input class="uk-width-1-2 uk-input" id="lastname" type="text" placeholder="Becenév" required>
        </div>
        
    </div>

    <div class="uk-margin">
        <label class="uk-form-label" for="email">E-mail cím</label>
        <div class="uk-form-controls">
            <input class="uk-input" id="email" type="email" placeholder="Email cím" required>
        </div>
    </div>

    <div class="uk-margin">
        <label aria-describedby="passwordhelp" class="uk-form-label" for="password">Jelszó</label>
        <div class="uk-form-controls">
            <input v-model="pw" pattern="(.*[a-z].*)(.*[A-Z].*)" class="uk-input" v-on:input="isvalidpassword()" id="password" type="password" placeholder="Jelszó" required>
            <input v-model="pw_confirm" pattern="(.*[a-z].*)(.*[A-Z].*)(.*[0-9].*)" class="uk-input" v-on:input="isvalidpassword()" id="password_confirm" type="password" placeholder="Jelszó mégegyszer" required>
            <small class="uk-text-danger" id="passwordhelp">A jelszónak tartalmaznia kell legalább egy kisbetűt, egy nagy betűt, és egy számot.</small>
        </div>
    </div>

    <div class="uk-margin">
        <label class="uk-form-label" for="company_name">Cég név:</label>
        <div class="uk-form-controls">
            <input class="uk-input" id="company_name" type="text" placeholder="Cég neve" required>
        </div>
    </div>

    <div class="uk-margin">
        <label class="uk-form-label" for="company_country">Ország:</label>
        <div class="uk-form-controls">
            <input class="uk-input" id="company_country" type="number" placeholder="Ország" required>
        </div>
    </div>

    <div class="uk-margin">
        <label class="uk-form-label" for="company_zip">Irányítószám:</label>
        <div class="uk-form-controls">
            <input class="uk-input" id="company_zip" type="number" placeholder="Irányítószám" required>
        </div>
    </div>

    <div class="uk-margin">
        <label class="uk-form-label" for="company_address">Cég címe:</label>
        <div class="uk-form-controls">
            <input class="uk-input" id="company_address" type="text" placeholder="Cég címe" required>
        </div>
    </div>

    <div class="uk-margin">
        <label class="uk-form-label" for="company_vat_number">Adószám:</label>
        <div class="uk-form-controls">
            <input class="uk-input" id="company_vat_number" type="text" placeholder="Adószám" required>
        </div>
    </div>

    <div class="uk-margin">
        <label class="uk-form-label" for="company_eu_vat_number">Európai adószám:</label>
        <div class="uk-form-controls">
            <input class="uk-input" id="company_eu_vat_number" type="text" placeholder="Európai adószám:" required>
        </div>
    </div>
    <div>
        <b><small class="uk-text-danger">Az összes mező kitöltése kötelező!</small></b>
    </div>
<button :disabled="!isvalidpassword()" class="uk-button uk-button-default" type="submit">Küldés</button>
</form>
</div>
</template>

<style>
    h1 {
        text-align: center;
        padding-bottom: 5px;
    }
</style>

<script>
    export default {
        data() {
            return { pw : "" , pw_confirm: "" } 
        },
            methods: {
                isvalidpassword() {
                    return this.pw === this.pw_confirm && this.pw.length > 8
                }
            }
        }
</script>