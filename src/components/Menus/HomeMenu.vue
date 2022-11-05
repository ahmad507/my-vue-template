<template>
    <ContentWrapper class="p-0 m-0">
        <div class="row mb-2 p-1 d-flex flex-wrap">
            <div class="col-3 mt-2 ml-auto mr-auto mb-2 bg-white rounded shadows">
                <div class="row my-1">
                    <em class="fas fa-1x ml-2 mr-2 fa-user-circle"></em>
                    <small>Trading Name</small>
                </div>
                <div class="row">
                    <small class="ml-2 mr-2 text-truncate">Rozack Tour And Travel</small>
                </div>
            </div>
            <div class="col-3 mt-2 ml-3 mr-3 mb-2 bg-primary rounded shadows">
                <div class="row my-1">
                    <em class="fas fa-1x ml-2 mr-2 fa-credit-card"></em>
                    <small>Deposit</small>
                </div>
                <div class="row">
                    <small class="ml-2 mr-2 text-truncate">Rp 15.000</small>
                </div>
            </div>
            <div class="col-3 mt-2 ml-auto mr-auto mb-2 bg-gray rounded shadows">
                <div class="row my-1">
                    <em class="fas fa-1x ml-2 mr-2 fa-exchange-alt"></em>
                    <small>Transaction</small>
                </div>
                <div class="row">
                    <small class="ml-2 mr-2 text-truncate">Rp 15.000.000</small>
                </div>
            </div>
        </div>
        <div class="row p-4">
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
    export default {
        data () {
            return {
                component_menu : ['MenuReservation', 'Payment', 'Topup']
            }
        },
        components : {
            MenuReservation,
            MenuPayment,
            MenuTopup
        },
        name: "HomeMenu",
        created() {
            const data_component = this.component_menu.length;
            console.log(data_component)
        }
    }
</script>

<style scoped>
</style>




<!--        <section>-->
<!--            <div class="menu-container">-->
<!--                <em class="fa mr-3 fas fa-ticket-alt"></em>-->
<!--                <strong>Reservasi</strong>-->
<!--                <MenuReservation />-->
<!--            </div>-->
<!--        </section>-->
<!--        <section>-->
<!--            <div class="menu-container">-->
<!--                <em class="fa mr-3 fas fa-money-bill-alt"></em>-->
<!--                <strong>Pembayaran</strong>-->
<!--                <MenuPayment/>-->
<!--            </div>-->
<!--        </section>-->
<!--        <section>-->
<!--            <div class="menu-container">-->
<!--                <em class="fa mr-3 fas fa-arrow-alt-circle-up"></em>-->
<!--                <strong>Top-Up</strong>-->
<!--                <MenuTopup/>-->
<!--            </div>-->
<!--        </section>-->
<!--    </div>-->
