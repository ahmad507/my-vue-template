<template>
    <ContentWrapper>
        <div class="container card">Banner 1</div>
        <div class="container card">Menu Favorit</div>
        <div class="row mb-4 mt-2">
            <div class="container bg-white rounded-top">
                <menu-reservation title="Reservasi Tiket"/>
            </div>
            <div class="container bg-white">
                <menu-payment title="Pembayaran & Tagihan"/>
            </div>
            <div class="container bg-white rounded-bottom">
                <menu-topup title="Topup"/>
            </div>
        </div>
        <div class="container card">Banner 1</div>
        <div class="container card">Menu Favorit</div>
    </ContentWrapper>
</template>

<script>
    import MenuReservation from "./Reservations/MenuReservation";
    import MenuPayment from "./Payments/MenuPayment";
    import MenuTopup from "./Topup/MenuTopup";
    import CardDeposit from "../Common/Travel/Partials/CardDeposit";
    export default {
        data () {
            return {
                component_menu : ['MenuReservation', 'Payment', 'Topup'],
                user_details:{
                    user_name : 'Awesome Tour And Travel',
                    user_deposit : 15000,
                    user_transaction : 2500000
                },
            }
        },
        components : {
            MenuReservation,
            MenuPayment,
            MenuTopup,
            CardDeposit
        },
        name: "HomeMenu",
        mounted() {
            const data_component = this.component_menu.length;
            const user_name = this.user_details.user_name;
            const user_deposit = this.user_details.user_deposit;
            const user_transaction =this.user_details.user_transaction;
        },
    }
</script>
<style scoped>
</style>
