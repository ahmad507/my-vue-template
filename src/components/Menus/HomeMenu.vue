<template>
    <ContentWrapper class="p-0 mt-n4">
        <card-deposit
                v-model="user_details"
                :user_name="user_details.user_name"
                :user_deposit="user_details.user_deposit"
                :user_transaction="user_details.user_transaction" />
        <div class="row p-4 mt-n5">
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
